import { title } from "process";
import IconShortMovies from "./atom/IconShortMovies";
import IconCompanyProfile from "./atom/IconCompanyProfile";
import IconProductVideos from "./atom/IconProductVideos";
import IconMusicVideos from "./atom/IconMusicVideos";
import React from "react";

interface Service {
  title: string;
  icon: React.FC;
}

export default function OurServices() {
  const ourServices: Service[] = [
    {
      title: "Music Videos",
      icon: IconMusicVideos,
    },

    { title: "Company Profile", icon: IconCompanyProfile },
    {
      title: "Product Videos",
      icon: IconProductVideos,
    },
    { title: "Short Movies", icon: IconShortMovies },
  ];
  return (
    <section className=" px-8 md:px16 py-3 grid grid-cols-1 md:grid-cols-2 items-center  gap-8 md:gap-12">
      <div className="">
        <h2 className="text-[42px] md:text-[52px] font-semibold">Our Services</h2>
        <p className="text-base md:text-xl text-[#4E4E4E] ">
          We produce various audiovisuals to improve your business and
          advertising.
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-y-4 gap-x-12 px-6 md:px-0">
        {ourServices.map((service) => (
          <div
            className="p-4 border-[#4e4e4e] border rounded-2xl font-medium text-lg flex gap-2 items-center"
            key={service.title}
          >
            <service.icon />
            <span>
            {service.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
