import React from "react";
import Anime from "./Anime";
import Popping from "./Popping";

function Footer() {
  return (
    <>
    <Popping><div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:px-20 text-white my-16">
        {/* About Us Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="underline underline-offset-4 text-2xl font-semibold pb-6">
            About Us
          </h1>
          <p className="leading-relaxed">
            We are committed to providing quality services and products to our
            clients. Our mission is to bring the best experience to our
            customers with innovation, creativity, and excellence.
          </p>
          <p>For more details Read <a href="/aboutus" className="text-blue-700 underline mx-1 hover:text-orange-200 transition-transform hover:scale-105">Click here</a></p>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="underline underline-offset-4 text-2xl font-semibold pb-6">
            Contact Us
          </h1>
          <div className="space-y-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
              {/* First Location Map */}
              <div className="text-blue-300 text-sm font-mono">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.166642140593!2d88.3782756750754!3d22.4979300795449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713f37a6102d%3A0x4d17af8ca1c5acc1!2sJadavpur%20University%20Campus%20Area%2C%20Kolkata%2C%20West%20Bengal%20700075!5e0!3m2!1sen!2sin!4v1728911578723!5m2!1sen!2sin"
                width="300"
                height="200"
                className="border-0 rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              Jadavpur University Jadavpur Campus
              </div>

              {/* Second Location Map */}
              <div className="text-blue-300 text-sm font-mono">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.499068084821!2d88.41105557507734!3d22.560430279500373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%2C%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1728911830493!5m2!1sen!2sin"
                width="300"
                height="200"
                className="border-0 rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              Jadavpur University Salt Lake Campus
              </div>
            </div>
            <div className="text-lg flex gap-4 font-mono"><div>Phone :</div> <div className="transition-transform cursor-pointer hover:scale-110">+91 12345 67890</div></div>
            <div className="text-lg flex gap-4 font-mono"><div>Email :</div> <a href="mailto:jumathsociety@gmail.com" className="transition-transform cursor-pointer hover:scale-105">jumathsociety@gmail.com</a></div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="underline underline-offset-4 text-2xl font-semibold pb-6">
            Follow Us
          </h1>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                height={30}
                width={30}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                height={30}
                width={30}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/astrosciclubju/profilecard/?igsh=ZmwwZWJ2bmhmdGhl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                height={30}
                width={30}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                height={30}
                width={30}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div></Popping>

      {/* Footer Bottom */}
      <hr className="w-4/5 mx-auto border-t border-gray-700 my-6" />
      <Popping><div className="text-white text-center">
        <div className="flex items-center justify-center my-6">
          <img
            src="../../Images/JMS_Logo(1).png"
            alt="Company Logo"
            height={100}
            width={100}
            className="rounded-lg mr-1"
          />
          <div className="text-lg">
            <Anime />
          </div>
        </div>
        <div className="text-lg pb-6">Made with Love ❤️ by JMS</div>
      </div></Popping>
    </>
  );
}

export default Footer;
