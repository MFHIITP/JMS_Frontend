import React from "react";
import Popping from "./Popping";

function Part2() {
  return (
    <div className="text-white mt-2 p-4">
      <style>
        {`
            @keyframes fadeIn {
                from {
                opacity: 0;
                }
                to {
                opacity: 1;
                }
            }
            `}
      </style>
      <Popping>
        <div className="relative flex justify-center items-center text-5xl py-12 h-screen text-center overflow-hidden rounded-lg my-2">
          <video
            className="absolute top-0 left-0 w-full h-full min-w-full min-h-full object-cover z-0"
            src="../../Images/maths_video.mp4"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-60 z-0" />
          <div
            className="relative z-10 text-4xl md:text-6xl font-bold text-white bg-gray-900 opacity-70 p-4 rounded-lg"
            style={{ animation: "fadeIn 2s ease-in-out" }}
          >
            GREETINGS, FELLOW MATHEMATICIAN
          </div>
        </div>
      </Popping>
      <Popping>
        <div className="flex flex-col gap-16 py-16 bg-gray-900 px-10 rounded-lg">
          {/* Regular Contests */}
          <div className="flex flex-row items-center mx-24 gap-20 p-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-[40%] relative">
              <div className="text-4xl font-mono font-bold text-blue-600">
                Regular Contests
              </div>
            </div>
            <div className="w-[60%] font-mono text-gray-700">
              Ignite Your Passion, join Our Exciting Contests! Unleash your
              creativity and compete with peers! From hackathons to debates,
              there’s a challenge waiting for everyone. Get ready to showcase
              your skills and win amazing prizes!
            </div>
          </div>

          {/* Mentorship Facilities */}
          <div className="flex flex-row items-center mx-24 gap-20 p-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-[60%] font-mono text-gray-700">
              Guided by Experience, unlock Your Potential! Connect with seasoned
              mentors who are here to nurture your talent and help you navigate
              your journey. Gain invaluable insights and grow both personally
              and professionally.
            </div>
            <div className="w-[40%] relative">
              <div className="text-4xl font-mono font-bold text-blue-600">
                Mentorship Facilities
              </div>
            </div>
          </div>

          {/* Events and Workshops */}
          <div className="flex flex-row items-center mx-24 gap-20 p-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-[40%] relative">
              <div className="text-4xl font-mono font-bold text-blue-600">
                Events and Workshops
              </div>
            </div>
            <div className="w-[60%] font-mono text-gray-700">
              Learn, Engage, and Grow! Participate in dynamic workshops and
              events designed to enhance your skills and broaden your horizons.
              Join us for a transformative experience!
            </div>
          </div>

          {/* Community and Networking */}
          <div className="flex flex-row items-center mx-24 gap-20 p-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-[60%] font-mono text-gray-700">
              Build Connections That Last! Join a vibrant community of
              like-minded individuals. Collaborate, share ideas, and build
              lifelong friendships that will enrich your college experience.
            </div>
            <div className="w-[40%] relative">
              <div className="text-4xl font-mono font-bold text-blue-600">
                Community and Networking
              </div>
            </div>
          </div>

          {/* Join Us */}
          <div className="flex flex-row items-center mx-24 gap-20 p-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-[40%] relative">
              <div className="text-4xl font-mono font-bold text-blue-600">
                Join Us
              </div>
            </div>
            <div className="w-[60%] font-mono text-gray-700">
              Be Part of Something Bigger! Ready to make an impact? Join our
              society and be part of a journey filled with growth, learning, and
              unforgettable memories!
            </div>
          </div>
        </div>
      </Popping>
    </div>
  );
}

export default Part2;
