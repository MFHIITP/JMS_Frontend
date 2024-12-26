import React, { useEffect } from "react";
import toast from "react-hot-toast";

function Part1() {
  useEffect(() => {
    if(localStorage.length == 1){
      const value = localStorage.getItem('toast_message')
      toast.success(value)
      localStorage.clear()
    }
  }, [])
  

  return (
    <div className="relative w-full">
      <div className="relative">
        <img
          src="../../Images/MatheMatics_image.jpg"
          alt=""
          className="object-cover w-full opacity-30 h-[calc(100vh-10vh)]"
        />
        <div className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-9xl font-mono">
          <span className="text-7xl sm:text-8xl block text-center sm:text-left italic">WELCOME TO</span>
          <img src="../../Images/JMS_Logo(1).png" alt="Image not found" height={450} width={450} className="m-auto mt-[-20px]" />
        </div>
      </div>
    </div>
  );
}

export default Part1;
