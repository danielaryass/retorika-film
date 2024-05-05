"use client";
import Image, { StaticImageData } from "next/image";
import heroImage from "@/public/image 1.jpg";
import potraitImsak from "@/public/potraitImsak.webp";
import potraitKromoloe from "@/public/potraitKromoloe.webp";
import potraitUnderTheTree from "@/public/potraitUnderTheTree.webp";
import potraitBakekok from "@/public/potraitBakekok.webp";
import landscapeImsak from "@/public/landscape_poster=Imsak.webp";
import landscapeKromoloe from "@/public/landscape_poster=Kromoloe.webp";
import landscapeUnderTheTree from "@/public/landscape_poster=UnderTheTree.webp";
import landscapeBakekok from "@/public/landscape_poster=Bakekok.webp";

import { FaArrowDownLong, FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
interface Hero {
  title: string;
  desc: string;
  secondesc: string | null;
  tagline: string | null;
  button: string;
  link: string;
  type: string;
  image: StaticImageData;
  image_2: StaticImageData | string;
}
const data: Hero[] = [
  {
    title: "Retorika Film",
    secondesc: "We believe that audio visual is a powerful tool",
    desc: "We are here to help you improve your company branding or products through audio visual media.",
    tagline: "We believe that audio visual is a powerful tool",
    button: "Contact Us",
    link: "/contact",
    type: "hero",
    image: heroImage,
    image_2: "",
  },
  {
    title: "Imsak",
    type: "showcast",
    secondesc: null,
    tagline: null,
    desc: "Menceritakan seorang perempuan bernama Naura yang akan sahur, ia tinggal sendiri dirumah karena ibunya sedang bekerja keluar kota, Selin teman...",
    button: "Play Now",
    link: "/imsak",
    image: landscapeImsak,
    image_2: potraitImsak,
  },
  {
    title: "Kromoloe",
    type: "showcast",
    secondesc: null,
    tagline: null,
    desc: "Seorang pemotor yang hendak pulang dipertemukan dengan peristiwa mistis. Dia bertemu dengan sekelompok orang yang sedang mengatarkan....",
    button: "Play Now",
    link: "/kromoloe",
    image: landscapeKromoloe,
    image_2: potraitKromoloe,
  },
  {
    title: "Under The Tree",
    type: "showcast",
    secondesc: null,
    tagline: null,
    desc: "Tiga remaja yang pergi untuk mendaki gunung Tampomas menemui berbagai hal yang tertuga. Mereka mengalami kejadian aneh setelah melakukan..",
    button: "Play Now",
    link: "/under-the-tree",
    image: landscapeUnderTheTree,
    image_2: potraitUnderTheTree,
  },
  {
    title: "Bakekok",
    type: "showcast",
    secondesc: null,
    tagline: null,
    desc: "Sepulang kerja, seorang wanita menemukan berbagai peristiwa ganjil. terlebih ketika dia berusaha untuk menemui adiknya yang sedang tertidur dengan... ",
    button: "Play Now",
    link: "/bakekok",
    image: landscapeBakekok,
    image_2: potraitBakekok,
  },
];
export default function HeroSection() {
  const [heroActive, setHeroActive] = useState(0);
  const handleNext = (e: any) => {
    e.preventDefault();
    if (heroActive === data.length - 1) {
      setHeroActive(0);
    } else {
      setHeroActive(heroActive + 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (heroActive === data.length - 1) {
        setHeroActive(0);
      } else {
        setHeroActive(heroActive + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [heroActive]);
  return (
    <div className="px-4 pt-24 pb-2 md:aspect-video w-full h-[750px] md:h-auto ">
      <AnimatePresence mode="wait">
        <div className="h-full w-full  rounded-[32px]  relative bg-black">
          <motion.div
            key={heroActive}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full rounded-[32px] overflow-hidden relative"
          >
            <Image
              src={data[heroActive].image}
              alt="hero"
              className="w-full h-full object-cover "
              width={1920}
              height={1080}
              priority
            />
          </motion.div>
          <div
            // key={heroActive}
            // initial={{ opacity: 0.7 }}
            // animate={{ opacity: 1 }}
            // // exit={{ y: -10, opacity: 0 }}
            // transition={{ duration: 2 }}
            className="w-full h-full bg-black/60 z-10 absolute top-0 right-0 rounded-[32px]"
          >
            <div className="flex flex-col pb-16 gap-6 justify-end md:flex-row md:justify-between md:items-end h-full px-10  relative">
              <motion.div
                key={heroActive}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="space-y-4 md:my-20"
              >
                <h2 className="text-[32px] md:text-[72px] font-semibold text-white">
                  {data[heroActive].title}
                </h2>
                {data[heroActive].type === "showcast" ? null : (
                  <p className="text-2xl md:text-[32px] text-white ">
                    {data[heroActive].tagline}
                  </p>
                )}
                <div className="pb-6">
                  <p
                    className={`text-base md:text-2xl text-[#d3d3d4] line-clamp-3 ${
                      data[heroActive].image_2
                        ? "2xl:max-w-[650px] lg:max-w-[550px]"
                        : "max-w-[800px]"
                    } `}
                  >
                    {data[heroActive].desc}
                  </p>
                  <Link
                    href={`${data[heroActive].link}`}
                    className="text-white md:text-2xl font-bold"
                  >
                    Read more
                  </Link>
                </div>
                <button className="mt-10 flex gap-2 px-6 py-4  md:px-8 md:py-5 font-medium  md:text-2xl bg-white rounded-[44px] items-center ">
                  <FaPlay /> <span>{data[heroActive].button}</span>
                </button>
              </motion.div>
              {data[heroActive].type != "showcast" ? null : (
                <motion.div
                  key={`${heroActive}-1`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  className="hidden md:block absolute h-full  top-0 bottom-0 z-20 right-36 w-auto"
                >
                  <Image
                    src={data[heroActive].image_2}
                    alt="hero"
                    width={700}
                    height={400}
                    className="h-full w-auto object-cover"
                  />
                </motion.div>
              )}

              <div className="flex gap-6 items-center md:bottom-16 md:right-20 z-50 md:absolute">
                <div className="space-x-2 flex ">
                  {data.map((_, index) => (
                    <button
                      key={index}
                      className={`${
                        heroActive == index ? "w-8 bg-white" : "w-3 bg-gray-300"
                      } h-3  rounded-full transition-all ease-linear duration-500`}
                      onClick={() => setHeroActive(index)}
                    ></button>
                  ))}
                </div>
                <button
                  className="h-[60px] w-[60px] rounded-full bg-white/40 flex items-center justify-center"
                  onClick={(e) => handleNext(e)}
                >
                  <FaArrowRightLong size={32} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-12 right-1/2 translate-x-1/2 bg-white border-2 aspect-[7/10] z-10 rounded-full p-2  h-24 flex flex-col items-center justify-center gap-2">
            <p className="text-[8px] font-medium">Scroll Down</p>
            <FaArrowDownLong size={24} className="text-black" />
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}