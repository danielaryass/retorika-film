import { GiFilmProjector } from "react-icons/gi";
import IconPro from "./atom/IconPro";
import IconCollaboration from "./atom/IconCollaboration";
import IconEfficient from "./atom/IconEfficient";

export default function WhyUs() {
  return (
    <section className=" px-8 md:px16 py-3 flex flex-col items-center  gap-8 md:gap-12" id="why-us">
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="block">
          <GiFilmProjector className="text-[60px]" />
        </span>
        <h2 className="text-[52px] font-semibold">Why Us</h2>
        <p className="text-xl text-[#4E4E4E] text-center">
          Your satisfaction is our commitment in every production.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex  gap-4">
          <div className="">
            <IconPro />
          </div>
          <div className="space-y-3">
            <p className="text-lg font-medium">
              Professional <br /> Team
            </p>
            <p className="text-[#4E4E4E]">
              We have a team with professional experience in their respective
              fields.
            </p>
          </div>
        </div>
        <div className="flex  gap-4">
          <div className="">
            <IconCollaboration />
          </div>
          <div className="space-y-3">
            <p className="text-lg font-medium">
              Collaboration <br /> Centered
            </p>
            <p className="text-[#4E4E4E]">
  We prioritize collaborative to meet client&apos;s expectations and
  satisfaction.
</p>
          </div>
        </div>
        <div className="flex  gap-4">
          <div className="">
            <IconEfficient />
          </div>
          <div className="space-y-3">
            <p className="text-lg font-medium">
              Efficient <br /> Production
            </p>
            <p className="text-[#4E4E4E]">
              Ensuring efficient project management is paramount to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
