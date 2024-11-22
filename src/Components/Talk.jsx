import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "../main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Talk(props) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState({});
  const [allmessages, setAllmessages] = useState([]);
  const [Socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);
  const {adminemails} = useContext(MyContext)

  useEffect(() => {
    const ws = new WebSocket("wss://nvdqwpdb-8000.inc1.devtunnels.ms/");
    setSocket(ws);
    ws.onmessage = async (event) => {
      const data = await JSON.parse(event.data);
      setAllmessages((prevmessages) => [...prevmessages, data]);
    };
    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch(
        "https://nvdqwpdb-8000.inc1.devtunnels.ms/talks/getchat",
        {
          method: "POST",
        }
      );
      if (response.status == 200) {
        const data = await response.json();
        setAllmessages(data);
      }
      setLoading(false);
    };
    getdata();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the page from refreshing

    if (Socket) {
      const formdata = new FormData();
      formdata.append("name", props.details.name);
      formdata.append("message", message);
      if (file) {
        const imageform = new FormData();
        imageform.append("name", props.details.name);
        imageform.append("image", file);
        const response = await fetch(
          "https://nvdqwpdb-8000.inc1.devtunnels.ms/talks/imagestore",
          {
            method: "POST",
            body: imageform,
          }
        );
        console.log(response);
        const resp = await response.json();
        formdata.append("image", resp.url);
      } else {
        formdata.append("image", "");
      }
      const formattedDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Set to true for 12-hour format
    });
      formdata.append("date", formattedDate);
      const socketdata = {};
      formdata.forEach((val, key) => {
        socketdata[key] = val;
      });
      Socket.send(JSON.stringify(socketdata));
    }
    setMessage("");
  };

  const handleDelete = async(posts, index)=>{
    alert("Do You really want to delete this?")
    const response = await fetch(
      "https://nvdqwpdb-8000.inc1.devtunnels.ms/talks/deletemessage",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          name: posts.name,
          message: posts.message,
          image: posts.image
        })
      }
    );
    if(response.status == 200){
      setAllmessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
    }
    else{
      console.log(response.status)
    }
  }

  if (loading) {
    return (
      <>
        <div className="bg-black h-screen w-screen flex justify-center items-center text-white font-mono text-4xl">
          Loading ...
        </div>
      </>
    );
  }
  if (!props.details.name) {
    return (
      <div className="bg-black text-white h-screen flex justify-center items-center font-mono text-4xl">
        Please LogIn
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-900 p-6">
      <div
        className="text-white p-4 overflow-y-auto bg-gray-800 rounded-lg shadow-md"
        style={{ maxHeight: "74vh" }}
      >
        <ul className="space-y-4">
          {allmessages.map((post, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg shadow-lg ${
                props.details.name === post.name
                  ? "ml-auto bg-green-700"
                  : "mr-auto bg-blue-700"
              } w-2/3 relative`}
            >
                <button
                  onClick={() => handleDelete(post, index)}
                  className={`absolute top-2 right-1 text-white hover:text-red-500 transition ${
                    (props.details.name === post.name || adminemails.includes(props.details.email)) ? "" : "hidden"
                  }`}
                  aria-label="Delete message"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              <div className="flex flex-col sm:flex-row justify-between">
                <h2 className="text-lg font-bold mb-2 font-mono">
                  {post.title}
                </h2>
                <div className="text-sm text-gray-300 my-1">
                  {post.name}, {post.date}
                </div>
              </div>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-gray-200 font-mono"
              >
                {post.message}
              </p>
              {post.image && (
                <img
                  className="mt-4 rounded-lg"
                  src={`${post.image}`}
                  alt="File not found"
                  style={{ maxHeight: 300 }}
                  onError={(e) => {
                    e.target.style.display = "none"; // Hide image if not found
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-3">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            handleSubmit(e); // Pass the event to handleSubmit
          }}
        >
          <div className="grid grid-cols-[5%,80%,10%] gap-4">
            <div className="relative flex items-center cursor-pointer w-full bg-blue-800 rounded-lg">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="text-white py-2 px-2 rounded cursor-pointer hover:bg-blue-700 w-[20%] text-center">
                {file.name ? <>{file.name}</> : <>Upload File</>}
              </div>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600 size-16 resize-none"
            />
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Talk;
