import React from "react";

function Part1() {
  return (
    <div className="relative w-full">
      <div className="relative">
        <img
          src="../../Images/MatheMatics_image.jpg"
          alt=""
          className="object-cover w-full opacity-30 h-[calc(100vh-10vh)]"
        />
        <div className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-9xl font-mono">
          <i>WELCOME TO</i>
          <img src="../../Images/JMS_Logo(1).png" alt="Image not found" height={450} width={450} className="m-auto mt-[-20px]"/>
        </div>
      </div>
    </div>
  );
}

export default Part1;
