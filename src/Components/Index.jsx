import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { MyContext } from "../main";

function Index(props) {
  var name = props.details.name;
  if (name != undefined) {
    name = name[0];
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [librarydrop, setLibrarydrop] = useState(false);
  const [noticedrop, setNoticedrop] = useState(false);
  const [coreTeamDropdownOpen, setcoreTeamDropdownOpen] = useState(false);
  const { adminemails } = useContext(MyContext);
  const serv_addr = import.meta.env.VITE_SERV_ADDR

  const handleLogout = async () => {
    const response = await fetch(
      `${serv_addr}/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.details.email,
        }),
      }
    );
    if (response.status == 200) {
      document.cookie = `Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      document.cookie = `ProfileInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      window.location.href = "/";
    } else {
      console.log(response.status)
      alert("Do again");
    }
  };

  return (
    <div className="text-white h-16 bg-gray-900 grid grid-cols-[20%,65%,15%] shadow-md px-4 z-50">
      {/* Logo and Title Section */}
      <div className="flex items-center cursor-pointer">
        <img
          src="../../Images/JMS_Logo(1).png"
          alt="JMS Logo"
          height={80}
          width={80}
          className="rounded-lg hover:transition hover:duration-500 hover:scale-125"
        />
        <div className="font-semibold text-xl tracking-wide hover:text-blue-500 transition-colors hover:scale-105 font-serif ml-2">
          <a href="/">Jadavpur Maths Society</a>
        </div>
      </div>

      {/* Navigation Links Section */}
      <div className="flex items-center justify-center gap-8 relative">
        <div
          className={`cursor-pointer hover:text-blue-500 transition-colors hover:scale-110 font-serif ${
            window.location.pathname === "/" ? "text-blue-500" : "text-gray-300"
          }`}
        >
          <a href="/">Home</a>
        </div>
        {["About Us", "Rules"].map((link, index) => (
          <div
            key={index}
            className={`cursor-pointer hover:text-blue-500 transition-colors font-serif hover:scale-110 ${
              window.location.pathname ===
              `/${link.toLowerCase().replace(/\s/g, "")}`
                ? "text-blue-500"
                : "text-gray-300"
            }`}
          >
            <a href={`/${link.toLowerCase().replace(/\s/g, "")}`}>{link}</a>
          </div>
        ))}
        <div
          className={`relative cursor-pointer transition-colors font-serif hover:scale-110`}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div
            className={`${
              window.location.pathname.startsWith("/admins")
                ? "text-blue-500"
                : "text-gray-300"
            } hover:text-blue-500`}
          >
            Admins
          </div>
          {dropdownOpen && (
            <div
              className={`absolute top-4 mt-2 w-40 bg-gray-800 shadow-lg rounded-md`}
              onMouseEnter={() => {
                setDropdownOpen(true);
              }}
            >
              <div
                className="block pl-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition"
                onMouseEnter={() => {
                  setcoreTeamDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  setcoreTeamDropdownOpen(false);
                }}
              >
                Meet our Team
                {coreTeamDropdownOpen && (
                  <div className="absolute left-full top-0 w-52 bg-gray-800 shadow-lg rounded-md mt-0 ml-0">
                    {[
                      "Executive Committee",
                      "Core Committee",
                      "Treasury Committee",
                      "Development Team",
                      "Design Team",
                      "Content Team",
                      "Activity Team",
                      "PR Team",
                      "Appointment Sub-Committee",
                      "Disciplinary Sub-Committee",
                    ].map((team, index) => (
                      <a
                        key={index}
                        href={`/admins/coreteam/${team
                          .toLowerCase()
                          .replace(/\s/g, "")}`}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition"
                      >
                        {team}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="/admins/userlist"
                className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition ${
                  props.auth ? "" : "hidden"
                }`}
              >
                UserList
              </a>
              <a
                href="/admins/liveusers"
                className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition ${
                  props.auth ? "" : "hidden"
                } ${adminemails.includes(props.details.email) ? "" : "hidden"}`}
              >
                Live Users
              </a>
              <a
                href="/admins/historyusers"
                className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition ${
                  props.auth ? "" : "hidden"
                } ${adminemails.includes(props.details.email) ? "" : "hidden"}`}
              >
                User History
              </a>
            </div>
          )}
        </div>
        <div
          className={`relative cursor-pointer hover:text-blue-500 transition-colors font-serif hover:scale-110 ${
            props.auth ? "" : "hidden"
          }`}
          onMouseEnter={() => setLibrarydrop(true)}
          onMouseLeave={() => setLibrarydrop(false)}
        >
          <div
            className={`${
              window.location.pathname.startsWith("/library")
                ? "text-blue-500"
                : "text-gray-300"
            } hover:text-blue-500`}
          >
            Library
          </div>
          {librarydrop && (
            <div
              className={`absolute top-4 mt-2 w-40 bg-gray-800 shadow-lg rounded-md`}
              onMouseEnter={() => {
                setLibrarydrop(true);
              }}
            >
              <a
                href="/library/resources"
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition"
              >
                Resources
              </a>
              <a
                href="/library/problems"
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition"
              >
                Daily Problems
              </a>
            </div>
          )}
        </div>
        {["Group Chat", "Meeting"].map((link, index) => (
          <div
            key={index}
            className={`cursor-pointer hover:text-blue-500 transition-colors font-serif hover:scale-110 ${
              window.location.pathname ===
              `/${link.toLowerCase().replace(/\s/g, "")}`
                ? "text-blue-500"
                : "text-gray-300"
            } ${props.auth ? "" : "hidden"}`}
          >
            <a href={`/${link.toLowerCase().replace(/\s/g, "")}`}>{link}</a>
          </div>
        ))}

        <div
          className={`cursor-pointer hover:text-blue-500 transition-colors font-serif hover:scale-110 ${
            window.location.pathname.startsWith("/gallery")
              ? "text-blue-500"
              : "text-gray-300"
          } hover:text-blue-500`}
        >
          <a href="https://sites.google.com/d/1YIiDDXlB4EW7wCFTASiACXPuoZ6JQRqL/edit">Gallery</a>
        </div>

        <div
          className={`relative cursor-pointer hover:text-blue-500 transition-colors font-serif hover:scale-110`}
          onMouseEnter={() => setNoticedrop(true)}
          onMouseLeave={() => setNoticedrop(false)}
        >
          <div
            className={`${
              window.location.pathname.startsWith("/notice")
                ? "text-blue-500"
                : "text-gray-300"
            } hover:text-blue-500`}
          >
            NoticeUpdates
          </div>
          {noticedrop && (
            <div
              className={`absolute top-4 mt-2 w-40 bg-gray-800 shadow-lg rounded-md`}
              onMouseEnter={() => {
                setNoticedrop(true);
              }}
            >
              <a
                href="/notice/notices"
                className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition ${
                  props.auth ? "" : "hidden"
                }`}
              >
                Notice and Circulars
              </a>
              <a
                href="/notice/merchandise"
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition"
              >
                Merchandise
              </a>
              <a
                href="/notice/donation"
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition"
              >
                Donate Us
              </a>
            </div>
          )}
        </div>
        {/* Profile Icon */}
        <div className={`cursor-pointer ${props.auth ? "" : "hidden"}`}>
          <a href="/profiles">
            <Avatar
              sx={{
                bgcolor:
                  window.location.pathname === "/profiles" ? "blue" : "white",
                color:
                  window.location.pathname === "/profiles" ? "white" : "blue",
              }}
              className="hover:scale-110 transition-transform font-mono"
            >
              {name}
            </Avatar>
          </a>
        </div>
      </div>

      {/* Login/Logout Section */}
      <div className="flex items-center gap-4 justify-end">
        <div
          className={`cursor-pointer px-4 py-2 rounded-md border transition-all duration-300 hover:text-blue-500 hover:border-blue-500 font-serif ${
            window.location.pathname === "/login"
              ? "text-blue-500 border-blue-500"
              : "text-gray-300 border-transparent"
          } hover:shadow-md ${props.auth ? "hidden" : ""}`}
        >
          <a href="/login">Login</a>
        </div>
        <div
          className={`cursor-pointer px-4 py-2 rounded-md border border-transparent text-red-500 border-red-500 transition-all duration-300 hover:shadow-md hover:border-red-700 hover:scale-110 font-serif ${
            props.auth ? "" : "hidden"
          }`}
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default Index;
