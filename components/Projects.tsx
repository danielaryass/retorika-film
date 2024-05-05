"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import landscapeImsak from "@/public/landscape_poster=Imsak.png";
import landscapeKromoloe from "@/public/landscape_poster=Kromoloe.png";
import landscapeUnderTheTree from "@/public/landscape_poster=UnderTheTree.png";
import landscapeBakekok from "@/public/landscape_poster=Bakekok.png";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const projects = [
    landscapeImsak,
    landscapeKromoloe,
    landscapeUnderTheTree,
    landscapeBakekok,
  ];
  const [selectedShow, setSelectedShow] = useState("Short Movie");

  return (
    <section className=" px-8 md:px16 py-3 flex flex-col items-center  gap-8 md:gap-12">
      <div className="flex flex-col items-center gap-6">
        <h2 className="font-medium text-2xl text-[#4e4e4e] text-center">
          Projects
        </h2>
        <p className="max-w-[550px] text-[42px] md:text-[52px] text-center font-semibold">
          Quality Comes From Experience
        </p>
        <p className="text-[#4e4e4e] leading-[1.6] text-center md:text-2xl">
          We believe good quality grows from various experiences.
        </p>
        <button className="flex bg-black text-white px-6 py-4 rounded-full items-center gap-2 text-xl mt-4">
          See more <FaArrowRightLong />
        </button>
      </div>
      <div className="max-w-[500px] w-full flex justify-between px-6 ">
        <div
          className={`cursor-pointer text-lg md:text-2xl font-medium relative ${
            selectedShow == "Short Movie" ? "text-[#4e4e4e]" : "text-[#9b9b9b]"
          } `}
          onClick={() => setSelectedShow("Short Movie")}
        >
          Short Movie
          {selectedShow == "Short Movie" ? (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 rounded-full bg-black"></div>) : null}
        </div>
        <div
          className={`cursor-pointer text-lg md:text-2xl font-medium relative ${
            selectedShow == "Commercial" ? "text-[#4e4e4e]" : "text-[#9b9b9b]"
          } `}
          onClick={() => setSelectedShow("Commercial")}
        >
          Commercial
          {selectedShow == "Commercial" ? (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 rounded-full bg-black"></div>) : null}
        </div>
      </div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar w-full px-4">
        <div className="flex flex-nowrap gap-6 ">
          {projects.map((project, index) => (
            <div
              className="w-72 md:w-[360px] h-auto aspect-[36/28] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              key={index}
            >
              <Image
                src={project}
                alt="project"
                className="w-full h-full object-cover"
                width={360}
                height={280}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
