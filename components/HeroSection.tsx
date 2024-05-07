"use client";
import Image from "next/image";

import { FaArrowDownLong, FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroItem from "./HeroSection/HeroItem";
interface Hero {
  title: string;
  desc: string;
  secondesc?: string | null;
  tagline?: string | null;
  button: string;
  link: string;
  type: string;
  image: string;
  image_2?: string;
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
    image: "/image 1.jpg",
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
    image: "/landscape_poster=Imsak.webp",
    image_2: "/potraitImsak.webp",
  },
  {
    title: "Kromoloe",
    type: "showcast",
    secondesc: null,
    tagline: null,
    desc: "Seorang pemotor yang hendak pulang dipertemukan dengan peristiwa mistis. Dia bertemu dengan sekelompok orang yang sedang mengatarkan....",
    button: "Play Now",
    link: "/kromoloe",
    image: "/landscape_poster=Kromoloe.webp",
    image_2: "/potraitKromoloe.webp",
  },
  {
    title: "Under The Tree",
    type: "showcast",
    secondesc: null,
    tagline: null,
    desc: "Tiga remaja yang pergi untuk mendaki gunung Tampomas menemui berbagai hal yang tertuga. Mereka mengalami kejadian aneh setelah melakukan..",
    button: "Play Now",
    link: "/under-the-tree",
    image: "/landscape_poster=UnderTheTree.webp",
    image_2: "/potraitUnderTheTree.webp",
  },
  {
    title: "Bakekok",
    type: "showcast",
    secondesc: null,
    tagline: null,
    desc: "Sepulang kerja, seorang wanita menemukan berbagai peristiwa ganjil. terlebih ketika dia berusaha untuk menemui adiknya yang sedang tertidur dengan... ",
    button: "Play Now",
    link: "/bakekok",
    image: "/landscape_poster=Bakekok.webp",
    image_2: "/potraitBakekok.webp",
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
    }, 7000);
    return () => clearInterval(interval);
  }, [heroActive]);
  return (
    <div className="px-4 pt-24  pb-2 md:aspect-video w-full h-screen  ">
      <AnimatePresence mode="wait">
        <motion.div
          className="h-full w-full  rounded-[32px]  relative  bg-black "
          key={heroActive}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn" }}
        >
          {heroActive === 0 ? (
            <div className="w-full h-full rounded-[32px] overflow-hidden relative ">
              <Image
                src={data[heroActive].image}
                alt="hero"
                className=" w-full h-full lg:aspect-video lg:h-auto object-cover"
                width={600}
                height={600}
                priority
              />
            </div>
          ) : (
            <HeroItem hero={data[heroActive]} />
          )}
          <div className="w-full h-full bg-black/60 z-10 absolute top-0 right-0 rounded-[32px]">
            <div className="flex flex-col pb-16 gap-6 justify-end md:flex-row md:justify-between md:items-end h-full px-10  relative">
              <div
                // key={heroActive}
                // initial={{ opacity: 0.4 }}
                // animate={{ opacity: 1 }}
                // // exit={{ opacity: 0 }}
                // transition={{ duration: 2 }}
                className="space-y-4 lg:my-20"
              >
                <h2 className="text-[32px] lg:text-[62px] font-semibold text-white">
                  {data[heroActive].title}
                </h2>
                {data[heroActive].type === "showcast" ? null : (
                  <p className="text-2xl lg:text-3xl text-white ">
                    {data[heroActive].tagline}
                  </p>
                )}
                <div className="pb-6">
                  <p
                    className={`text-base md:text-xl text-[#d3d3d4] line-clamp-3 ${
                      data[heroActive].image_2
                        ? "2xl:max-w-[650px] lg:max-w-[550px]"
                        : "max-w-[800px]"
                    } `}
                  >
                    {data[heroActive].desc}
                  </p>
                  <a
                    href={`${data[heroActive].link}`}
                    className="text-white md:text-xl font-bold"
                  >
                    Read more
                  </a>
                </div>
                <button
                  aria-label="Play Now"
                  className="mt-10 flex gap-2 px-6 py-4  md:px-8 md:py-5 font-medium  md:text-2xl bg-white rounded-[44px] items-center "
                >
                  <FaPlay /> <span>{data[heroActive].button}</span>
                </button>
              </div>
              {data[heroActive].type != "showcast" ||
              !data[heroActive].image_2 ? null : (
                <div
                  // key={`${heroActive}-1`}
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // // exit={{ opacity: 0 }}
                  // transition={{ duration: 2 }}
                  className="hidden lg:block absolute h-full  top-0 bottom-0 z-20 right-36 w-auto"
                >
                  <Image
                    src={data[heroActive].image_2 || "/image 1.jpg"}
                    alt="hero"
                    width={700}
                    height={400}
                    className="h-full w-auto object-cover"
                  />
                </div>
              )}

              <div className="flex gap-6 items-center md:bottom-16 md:right-20 z-50 md:absolute">
                <div className="space-x-2 flex ">
                  {data.map((_, index) => (
                    <button
                      key={index}
                      className={`${
                        heroActive == index
                          ? "w-12 bg-white"
                          : "w-6 bg-gray-300"
                      } h-6  rounded-full transition-all ease-linear duration-500`}
                      onClick={() => setHeroActive(index)}
                      aria-label={`Go to item ${index + 1}`}
                      aria-current={heroActive == index}
                    ></button>
                  ))}
                </div>
                <button
                  className="h-[60px] w-[60px] rounded-full bg-white/40 flex items-center justify-center"
                  aria-label="Next"
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
