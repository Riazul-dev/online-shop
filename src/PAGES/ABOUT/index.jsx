import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

const members = [
  {
    id: 1,
    memberName: "Harvey Spector",
    memberImage: "../members/team2-free-img.png",
    memberPosition: "Founder - CEO",
  },
  {
    id: 2,
    memberName: "Jessica Pearson",
    memberImage: "../members/team1-free-img.png",
    memberPosition: "COO",
  },
  {
    id: 3,
    memberName: "Rachel Zain",
    memberImage: "../members/team3-free-img.png",
    memberPosition: "Marketing Head",
  },
  {
    id: 4,
    memberName: "Luise Litt",
    memberImage: "../members/team4-free-img.png",
    memberPosition: "Lead Developer",
  },
  {
    id: 5,
    memberName: "Katrina Bennett",
    memberImage: "../members/team5-free-img.png",
    memberPosition: "Intern Designer",
  },
  {
    id: 6,
    memberName: "Mike Ross",
    memberImage: "../members/team6-free-img.png",
    memberPosition: "Intern Designer",
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div
        className="w-full h-[40vh] md:h-[65vh] bg-[#1F576D] bg-no-repeat bg-cover bg-bottom bg-fixed"
        style={{ backgroundImage: "url(./bg-about1.jpg)" }}
      >
        <div className="bg-black/50 w-full h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-7xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Section-1 */}
      <div className="bg-[#F5F7F9] grid grid-cols-1 md:grid-cols-2 py-10 px-4">
        {/* col-1 */}
        <div className="bg-white py-10 px-4 flex flex-col items-center md:items-start justify-center gap-6">
          <div className="h-1 w-20 bg-blue-600"></div>
          <h3 className="text-2xl md:text-4xl font-semibold text-[#6EC1E4]">Who We Are</h3>
          <p className="text-slate-500 leading-8 text-center md:text-start text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec
            tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
            erat consequat auctor eu in elit.
          </p>
        </div>
        {/* col-2 */}
        <div>
          <img src="./bg.jpeg" alt="" />
        </div>
      </div>

      {/* Section-2 */}
      <div className="bg-white py-24 flex flex-col justify-center items-center gap-20">
        {/*  */}
        <div className="flex flex-col justify-center items-center gap-5 px-4 text-center">
          <div className="h-1 w-20 bg-blue-600"></div>
          <p className="text-xl font-medium text-[#6EC1E4] tracking-wider">
            A Few Words About
          </p>
          <h3 className="text-2xl md:text-5xl font-semibold text-[#6EC1E4]">Our Team</h3>
          <p className="leading-7 text-slate-500 text-center md:w-[70vw]">
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra.
          </p>
        </div>
        {/*  */}
        <div className="grid md:grid-cols-3 gap-5 md:px-2">
          {members.map((member) => {
            return (
              <div
                key={member.id}
                className="border bg-[#F5F7F9] px-12 py-8 flex flex-col justify-center items-center gap-6 rounded"
              >
                <img
                  className="w-24 rounded-full"
                  src={member.memberImage}
                  alt={member.memberName}
                />
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-2xl text-[#6EC1E4]">
                    {member.memberName}
                  </h3>
                  <p className="text-slate-500">{member.memberPosition}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Section-3 */}
      <div
        className="h-[50vh] md:h-80 bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center"
        style={{ backgroundImage: "url(./bg-about.jpg)" }}
      >
        <div className="bg-black/50 w-full h-full flex justify-center items-center">
          <div className="bg-[#F5F7F9] md:h-full flex flex-col justify-center items-center gap-10  px-10 py-10">
            <div className="h-1 w-20 bg-blue-600"></div>
            <h3 className="text-3xl md:text-4xl font-medium text-[#6EC1E4]">Follow Us</h3>
            <div className="flex justify-center items-center text-xl gap-4">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.youtube.com/"
                target="_blank"
                className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
              >
                <FaYoutube />
              </Link>
              <Link
                to="https://www.twitter.com/"
                target="_blank"
                className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.google.com/"
                target="_blank"
                className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
              >
                <FaGoogle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
