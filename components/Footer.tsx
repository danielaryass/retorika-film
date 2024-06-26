"use server"
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { GiFilmProjector } from "react-icons/gi";

export default async function Footer() {
  return (
    <footer className="mx-4 md:mx-8 px-4 py-10 md:p-10 my-4 flex flex-col gap-20  items-center bg-black rounded-xl ">
      <div className="w-full flex flex-col md:flex-row gap-12 justify-between">
        <div className="space-y-6">
          <div className="flex gap-4 text-white items-center">
            <GiFilmProjector className="text-[60px]" />
            <span className="text-2xl font-medium mt-2">Retorika Film</span>
          </div>
          <div className="text-white text-3xl flex gap-4">
            <a href={"/"} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={"/"} aria-label="Youtube">
              <FaYoutube />
            </a>
            <a href={"/"} aria-label="Linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 text-white">
            <div className="space-y-4">
                <p className="font-bold">Name</p>
                <p>retorikafilm@gmail.com</p>
            </div>
            <div className="space-y-4">
                <p className="font-bold">Phone</p>
                <p>+62817-7927-7238</p>
            </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-20 justify-between">
        <div className="text-white flex flex-col md:flex-row gap-4">
          <a href="#about-us">About</a>
          {/* contact, team, blog */}
          <a href="#contact">Contact</a>
          <a href="#team">Team</a>
          <a href="#blog">Blog</a>
        </div>
        <p className="text-white">Copyright © Retorika Film. All rights reserved.</p>
      </div>
    </footer>
  );
}
