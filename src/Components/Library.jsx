import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../main";

function Library(props) {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState('');
  const [Author, setAuthor] = useState('Jadavpur Mathematics Society');
  const [pdfFile, setPdfFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const { adminemails } = useContext(MyContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getbooks = async () => {
      const response = await fetch('https://nvdqwpdb-8000.inc1.devtunnels.ms/library/books', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      setBooks(data); // Ensure to set the fetched books in state
    };
    getbooks();
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setUploadStatus("");
    } else {
      setUploadStatus("Please upload a valid pdf file");
    }
  };

  const handleReadBook = async(bookurl)=>{
    const listed = bookurl.split('/');
    const newurl = listed[listed.length - 1];
    window.location.pathname = `/readbook/${newurl}`;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dmr09pu10/raw/upload";
    if (pdfFile && title && Author) {
      let bookurl;
      const formData = new FormData();
      formData.append("file", pdfFile);
      formData.append("upload_preset", "itjc4orz");

      try {
        const response = await fetch(cloudinaryUrl, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log(data);
        if (data.secure_url) {
          bookurl = data.secure_url; 
        } else {
          setUploadStatus("Upload failed, no URL returned.");
          return;
        }
      } catch (error) {
        console.error("Upload failed:", error);
        setUploadStatus("Upload failed. Please try again.");
        return;
      }

      const response = await fetch('https://nvdqwpdb-8000.inc1.devtunnels.ms/library/books', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          author: Author,
          url: bookurl
        })
      });

      if (response.status === 200) {
        setUploadStatus("Upload successful!"); 
        window.location.reload();
      } else {
        alert("Failed to upload");
      }
    }
  };

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="relative h-screen">
    <div className="bg-gray-900 py-8">
      <section className="container mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Find Your Book</h1>
          <p className="text-gray-400 mt-2">
            Search from a variety of books available in our library.
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for books, authors, or genres"
            className="w-2/3 md:w-1/2 p-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-lg shadow-lg transition duration-200 ease-in-out hover:shadow-xl"
              >
                <div onClick={()=>{handleReadBook(book.url)}} className="cursor-pointer">
                  <div className="block text-white"> 
                  <h2 className="text-xl font-semibold">{book.title}</h2>
                  <p className="text-gray-300">by {book.author}</p>
                </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No books found
            </p>
          )}
        </div>
      </section>
      <div className={`${adminemails.includes(props.details.email) ? "none" : "hidden"} absolute bottom-2 left-2 text-white bg-gray-700 p-1 rounded-lg`}>
        <div className="pdf-uploader flex flex-col">
          <h2 className="flex justify-center m-1 p-1 text-3xl font-mono">Upload PDF File</h2>
          <label className="font-mono text-2xl m-1 p-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state
            className="mb-2 p-2 rounded-lg border border-gray-600 text-white bg-slate-800"
          />
          <label className="font-mono text-2xl m-1 p-1">Author</label>
          <input
            type="text"
            value={Author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mb-2 p-2 rounded-lg border border-gray-600 text-white bg-slate-800"
            disabled = {adminemails.includes(props.details.email) ? false : true}
          />
          <input
            type="file"
            accept="application/pdf"
            className="rounded-lg w-fill m-2"
            onChange={handleFileChange}
          />
          <button onClick={handleSubmit} className="w-fill bg-blue-900 rounded-lg m-1 p-1 font-mono">Upload PDF</button>
          {uploadStatus && <p>{uploadStatus}</p>}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Library;
