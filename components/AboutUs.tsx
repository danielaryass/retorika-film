import aboutUs1 from "@/public/aboutUs1.png";
import aboutUs2 from "@/public/aboutUs2.png";
import aboutUs3 from "@/public/aboutUs3.png";
import aboutUs4 from "@/public/aboutUs4.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutUs() {
  const aboutUs = [
    { image: aboutUs1, alt: "About Us 1" },
    { image: aboutUs2, alt: "About Us 2" },
    { image: aboutUs3, alt: "About Us 3" },
    { image: aboutUs4, alt: "About Us 4" },
  ];
  return (
    <section
      className=" px-8 md:px-16 py-3 flex flex-col md:grid md:grid-cols-2 justify-between gap-16"
      id="about-us"
    >
      <div className="flex flex-col w-full max-w-[475px]">
        <h2 className="text-3xl text-[#4E4E4E] font-medium mb-8">About Us</h2>
        <p className="text-[52px] font-semibold text-black leading-tight mb-6 max-w-[450px]">
          We Put Our Passion Into Every Frame
        </p>
        <p className="text-2xl text-[#4E4E4E] mb-8">
          We believe that every frame holds magic and power to inspire,
          entertain, and tell stories.
        </p>
        <div className="">
          <button className="flex bg-black text-white py-4 px-6 rounded-full gap-4">
            <span>See more</span>{" "}
            <FaArrowRightLong size={24} className="text-white" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {aboutUs.map((item, index) => (
          <div className="aspect-[36/28] rounded-xl overflow-hidden w-full h-auto"
          key={index}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={400}
              height={600}
              className="w-full h-full  object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
