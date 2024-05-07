import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaInstagram, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

interface Team {
  name: string;
  position: string;
  instagram: string;
  linkedin: string | URL;
  image: string;
}
export default async function OurTeams() {
  const Teams: Team[] = [
    {
      name: "Nabil Surya",
      position: "Founder",
      instagram: "https://www.instagram.com/nabilsurya/",
      linkedin: "https://www.linkedin.com/in/nabil-surya-9b3b8b1a5/",
      image: "/nabil.png",
    },
    {
      name: "Alam Nur Rizky",
      position: "Director of Photography",
      instagram: "https://www.instagram.com/alammnrzk/",
      linkedin: "https://www.linkedin.com/in/alam-nur-rizky-7b1b1b1b1/",
      image: "/alam.png",
    },
    {
      name: "Haris Akbar",
      position: "Talent",
      instagram: "https://www.instagram.com/harisakbar/",
      linkedin: "https://www.linkedin.com/in/haris-akbar-7b1b1b1b1/",
      image: "/haris.png",
    },
    {
      name: "Farhan Rusdiyanto",
      position: "Talent",
      instagram: "https://www.instagram.com/farhanrusdiyanto/",
      linkedin: "https://www.linkedin.com/in/farhan-rusdiyanto-7b1b1b1b1/",
      image: "/farhan.png",
    },
    {
      name: "Rangga Meinandi",
      position: "Director of Photography",
      instagram: "https://www.instagram.com/ranggameinandi/",
      linkedin: "https://www.linkedin.com/in/rangga-meinandi-7b1b1b1b1/",
      image: "/rangga.png",
    },
  ];
  return (
    <section className="flex flex-col-reverse md:grid px-8 md:px-16 py-3 grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
      <div className="flex overflow-x-scroll  hide-scroll-bar w-full px-4 ">
        <div className="flex flex-nowrap gap-6 ">
          {Teams.map((member, index) => (
            <div
              className="aspect-[42/54] h-[275px] md:h-[520px] w-auto bg-blue-200 relative rounded-xl overflow-hidden"
              key={member.name}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={420}
                height={540}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 md:bottom-7 left-1/2 -translate-x-1/2 bg-[#999999] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 aspect-[36/15] w-full max-w-[180px] md:max-w-[360px] h-auto p-3 flex flex-col items-center justify-center ">
                <p className="text-white text-[12px] md:text-2xl font-semibold">
                  {member.name}
                </p>
                <p className="text-white text-[9px] md:text-lg font-medium">
                  {member.position}
                </p>
                <div className="flex text-lg gap-2 md:gap-4 md:text-3xl text-white mt-1">
                
                  <Link
                    href={member.instagram}
                    aria-label={`Instagram ${member.name}`}
                  >
                    <FaSquareInstagram  />
                  </Link>
                  <Link
                    href={member.linkedin}
                    aria-label={`Linkedin ${member.name}`}
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" md:text-end flex flex-col items-start md:items-end gap-6">
        <h2 className="text-2xl font-medium text-[#4e4e4e]">Meet Our Team</h2>
        <p className="text-[42px] md:text-[52px] font-semibold max-w-[350px] md:max-w-[550px] ">
          Creativity is Inherent in Every Individual
        </p>
        <p className="md:text-xl max-w-[550px] leading-[1.6] text-[#4e4e4e]">
          We encourage close collaboration to spark unique ideas and explore
          uncharted concepts.
        </p>
        <button className="flex bg-black text-white py-2 px-4 md:px-6 md:py-4 rounded-full items-center gap-2 text-lg mt-4">
          See more <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
}
