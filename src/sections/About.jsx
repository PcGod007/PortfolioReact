import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-me.png"
            className="absolute scale-[1.00] -right-[8rem] -top-[0rem] md:scale-[2] md:left-22 md:inset-y-40 lg:scale-[1.30] lg:top-10"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Pranav C</p>
            <p className="subtext">
              I am passionate about <b>Data Logistics</b> that create intuitive, reliable, and easily accessible data interfaces while ensuring strong data validation practices. I work at the intersection of <b>SAP, Generative AI, and Agentic AI</b>, designing intelligent systems and chatbots tailored to solve specific enterprise goals. I focus on integrating <b>Deep Learning and LLM-driven architectures</b> into enterprise applications, bridging traditional platforms with modern AI capabilities. I am also an enthusiastic <b>UI/UX Developer</b> who enjoys crafting clean, interactive web experiences that make complex systems simple for users.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500 text-center">
              while(!(succeed = try()));
            </p>
            <Card
              style={{ rotate: "45deg", top: "30%", left: "20%" }}
              text="SELECT *"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="public class"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "50deg", bottom: "50%", left: "70%" }}
              text="CREATE TABLE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="scanf()"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "30%", left: "48%" }}
              text="print"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/new/java.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/new/python.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/new/sql.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Any Enquiries ?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              help me build functional and efficient applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-dark-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              I'm based in India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
