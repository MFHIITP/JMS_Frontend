import React, { useState } from "react";

function Profile(props) {
  const [newname, setNewname] = useState("");
  const [newcollege, setNewcollege] = useState("");
  const [newdepartment, setNewdepartment] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [newyear, setNewyear] = useState("");

  const [changename, setChangename] = useState(false);
  const [changecollege, setChangecollege] = useState(false);
  const [changedepartment, setChangedepartment] = useState(false);
  const [changepassword, setChangepassword] = useState(false);
  const [changeyear, setChangeyear] = useState(false);
  const serv_addr = import.meta.env.VITE_SERV_ADDR

  const handleupdate = async (type, val) => {
    const response = await fetch(
      `${serv_addr}/users/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          email: props.details.email,
          old: type,
          name: val,
        }),
        credentials: "include",
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      document.cookie = `ProfileInfo=${encodeURIComponent(
        "j:" + JSON.stringify(data.profileinfo)
      )}; path=/; domain=${window.location.hostname}; secure=true; sameSite=None;`
      window.location.reload();
    } else {
      console.log("Internal Server Error");
    }
  };

  const handleremove = async () => {
    const response = await fetch(
      `${serv_addr}/removeprofile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: details.email,
        }),
      }
    );
    if (response.status === 200) {
      document.cookie = `Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      document.cookie = `ProfileInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      window.location.href = "/";
    }
  };
  

  return (
    <div className="text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto font-mono">
      <h1 className="text-3xl font-bold my-6 text-center">Profile Information</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="bg-gray-800 p-4 rounded-lg my-4">
          <div className="flex justify-between">
            <p className="font-semibold">Name:</p>
            <span
              className="text-sm text-blue-400 hover:text-blue-500 cursor-pointer"
              onClick={() => setChangename(!changename)}
            >
              {changename ? "Cancel" : "Edit"}
            </span>
          </div>
          {!changename ? (
            <p className="mt-2 bg-gray-700 p-2 rounded">{props.details.name}</p>
          ) : (
            <div>
              <input
                type="text"
                value={newname}
                onChange={(e) => setNewname(e.target.value)}
                className="w-full mt-2 bg-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span
                className="block mt-2 text-green-400 hover:text-green-500 cursor-pointer text-sm"
                onClick={() => handleupdate("name", newname)}
              >
                Submit
              </span>
            </div>
          )}
        </div>

        {/* Email */}
        <div className="bg-gray-800 p-4 rounded-lg my-4">
          <p className="font-semibold">Email:</p>
          <p className="mt-2 bg-gray-700 p-2 rounded">{props.details.email}</p>
        </div>

        {/* College */}
        <div className="bg-gray-800 p-4 rounded-lg my-4">
          <div className="flex justify-between">
            <p className="font-semibold">College:</p>
            <span
              className="text-sm text-blue-400 hover:text-blue-500 cursor-pointer"
              onClick={() => setChangecollege(!changecollege)}
            >
              {changecollege ? "Cancel" : "Edit"}
            </span>
          </div>
          {!changecollege ? (
            <p className="mt-2 bg-gray-700 p-2 rounded">{props.details.college}</p>
          ) : (
            <div>
              <input
                type="text"
                value={newcollege}
                onChange={(e) => setNewcollege(e.target.value)}
                className="w-full mt-2 bg-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span
                className="block mt-2 text-green-400 hover:text-green-500 cursor-pointer text-sm"
                onClick={() => handleupdate("college", newcollege)}
              >
                Submit
              </span>
            </div>
          )}
        </div>

        {/* Department */}
        <div className="bg-gray-800 p-4 rounded-lg my-4">
          <div className="flex justify-between">
            <p className="font-semibold">Department:</p>
            <span
              className="text-sm text-blue-400 hover:text-blue-500 cursor-pointer"
              onClick={() => setChangedepartment(!changedepartment)}
            >
              {changedepartment ? "Cancel" : "Edit"}
            </span>
          </div>
          {!changedepartment ? (
            <p className="mt-2 bg-gray-700 p-2 rounded">{props.details.department}</p>
          ) : (
            <div>
              <input
                type="text"
                value={newdepartment}
                onChange={(e) => setNewdepartment(e.target.value)}
                className="w-full mt-2 bg-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span
                className="block mt-2 text-green-400 hover:text-green-500 cursor-pointer text-sm"
                onClick={() => handleupdate("department", newdepartment)}
              >
                Submit
              </span>
            </div>
          )}
        </div>

        {/* Password */}
        <div className="bg-gray-800 p-4 rounded-lg my-4">
          <div className="flex justify-between">
            <p className="font-semibold">Password:</p>
            <span
              className="text-sm text-blue-400 hover:text-blue-500 cursor-pointer"
              onClick={() => setChangepassword(!changepassword)}
            >
              {changepassword ? "Cancel" : "Edit"}
            </span>
          </div>
          {!changepassword ? (
            <p className="mt-2 bg-gray-700 p-2 rounded">{props.details.password}</p>
          ) : (
            <div>
              <input
                type="password"
                value={newpassword}
                onChange={(e) => setNewpassword(e.target.value)}
                className="w-full mt-2 bg-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span
                className="block mt-2 text-green-400 hover:text-green-500 cursor-pointer text-sm"
                onClick={() => handleupdate("password", newpassword)}
              >
                Submit
              </span>
            </div>
          )}
        </div>

        {/* Year */}
        <div className="bg-gray-800 p-4 rounded-lg my-4">
          <div className="flex justify-between">
            <p className="font-semibold">Year:</p>
            <span
              className="text-sm text-blue-400 hover:text-blue-500 cursor-pointer"
              onClick={() => setChangeyear(!changeyear)}
            >
              {changeyear ? "Cancel" : "Edit"}
            </span>
          </div>
          {!changeyear ? (
            <p className="mt-2 bg-gray-700 p-2 rounded">{props.details.year}</p>
          ) : (
            <div>
              <input
                type="text"
                value={newyear}
                onChange={(e) => setNewyear(e.target.value)}
                className="w-full mt-2 bg-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span
                className="block mt-2 text-green-400 hover:text-green-500 cursor-pointer text-sm"
                onClick={() => handleupdate("year", newyear)}
              >
                Submit
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Remove Profile Button */}
      <div className="flex justify-center mt-5">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleremove}
        >
          Remove Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
