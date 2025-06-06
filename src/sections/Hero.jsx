import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Profile";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      className="relative w-full h-screen overflow-hidden z-10 flex flex-col md:flex-row items-center justify-between px-6"
      id="hero"
    >
      <ParallaxBackground />
      <HeroText />

      <div
        className="flex-1 flex justify-center items-center md:justify-end"
        style={{
          width: isMobile ? "100%" : "50%",
          height: "100%",
        }}
      >
        <Astronaut />
      </div>
    </section>
  );
};

export default Hero;
