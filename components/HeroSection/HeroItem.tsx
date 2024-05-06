import Image from "next/image";
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

interface HeroItemProps {
  hero: Hero;
}

const HeroItem: React.FC<HeroItemProps> = ({ hero }) => {
  return (
    <div className="w-full h-full rounded-[32px] overflow-hidden relative md:aspect-video md:h-auto">
      <Image
        src={hero.image}
        alt="hero"
        className=" w-full h-full md:aspect-video md:h-auto object-cover"
        width={600}
        height={600}
        priority
      />
    </div>
  );
};

export default HeroItem;
