import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { OrbitingCircles } from "./OrbitingCircles";

const techNotes = {
  python: {
    name: "Python",
    note: "My go-to language since school, used for everything from PAC-MAN to ML models, data testing and the BOSCH chatbot.",
  },
  mysql: {
    name: "MySQL",
    note: "Used it for query-based validation in the data testing framework I built during my internship.",
  },
  java: {
    name: "Java",
    note: "Picked it up in my coding club to practise competitive programming and faster problem-solving.",
  },
  LLM1: {
    name: "LLMs",
    note: "Built the BOSCH chatbot, StockAI and MyMacros' AI food lookup on top of large language models.",
  },
  nlp: {
    name: "NLP",
    note: "Used NLTK, spaCy and Scikit-learn for Botify and the BOSCH chatbot to understand user queries.",
  },
  grok1: {
    name: "Grok",
    note: "Powered the text and video responses of the BOSCH employee chatbot.",
  },
  html5: {
    name: "HTML5",
    note: "The base of every website I've built, including this portfolio.",
  },
  css3: {
    name: "CSS3",
    note: "Used for styling and animating my web projects and this portfolio.",
  },
  javascript: {
    name: "JavaScript",
    note: "Wrote MyMacros entirely in vanilla JS, and use it across CricBros and this portfolio.",
  },
  react: {
    name: "React",
    note: "Built this portfolio, CricBros and the Poker game's interface with it.",
  },
  mssql: {
    name: "MS SQL Server",
    note: "Used as one of the databases in my data validation and testing framework.",
  },
  snowflake: {
    name: "Snowflake",
    note: "Worked with it during my internship to run cloud-based data validation at scale.",
  },
  gitlab: {
    name: "GitLab",
    note: "Used for version control and collaboration while building the data testing framework.",
  },
  microsoft: {
    name: "Microsoft Azure Data",
    note: "Earned the DP-900 certification to understand core data concepts and Azure data services.",
  },
  git: {
    name: "Git",
    note: "Use it daily to version all my projects, from PAC-MAN to the traffic controller.",
  },
  cplusplus: {
    name: "C++",
    note: "Used for problem-solving and strengthening my programming fundamentals.",
  },
  figma: {
    name: "Figma",
    note: "Used for UI/UX design, planning website layouts before building them.",
  },
  yolo: {
    name: "YOLO",
    note: "Used YOLOv7 for real-time vehicle detection in my Automatic Traffic Controller.",
  },
  opencv1: {
    name: "OpenCV",
    note: "Used for video processing in the traffic controller and image preprocessing in the fingerprint system.",
  },
  c: {
    name: "C",
    note: "Programmed my Arduino-based Earthquake Detector in it.",
  },
  sap: {
    name: "SAP",
    note: "Work with it at Deloitte, and hold two SAP certifications.",
  },
  antigravity: {
    name: "Antigravity",
    note: "Used it to build the Bugatti La Voiture Noire webpage with AI.",
  },
  Flow: {
    name: "Flow",
    note: "Generated the engine-opening and car animations for the Bugatti project.",
  },
  whisk: {
    name: "Whisk",
    note: "Used it to generate the AI visuals for the Bugatti project.",
  },
};

const skills = Object.keys(techNotes);

export function Frameworks({ selected, onSelect }) {
  const [paused, setPaused] = useState(false);

  const renderIcon = (skill) => (
    <Icon
      key={skill}
      skill={skill}
      active={selected === skill}
      onHover={setPaused}
      onSelect={() => onSelect(selected === skill ? null : skill)}
    />
  );

  return (
    <div className="relative flex h-[550px] w-[230px] flex-col items-center justify-center">
      <OrbitingCircles iconSize={36} radius={180} paused={paused}>
        {skills.map(renderIcon)}
      </OrbitingCircles>

      <OrbitingCircles
        iconSize={24}
        radius={120}
        reverse
        speed={2}
        paused={paused}
      >
        {skills.slice().reverse().map(renderIcon)}
      </OrbitingCircles>

    </div>
  );
}

export const TechNote = ({ skill, onClose }) => {
  useEffect(() => {
    if (!skill) return;
    const timer = setTimeout(onClose, 10000);
    return () => clearTimeout(timer);
  }, [skill, onClose]);

  return (
    <AnimatePresence mode="wait">
      {skill && (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute bottom-6 left-6 z-20 w-[34%] min-w-52 max-w-sm rounded-xl bg-[#06091f]/80 p-3 backdrop-blur md:p-4"
        >
          <div className="flex items-center gap-2">
            <img
              src={`assets/logos/${skill}.svg`}
              alt=""
              className="size-6 object-contain"
            />
            <p className="text-base font-semibold text-white md:text-lg">
              {techNotes[skill].name}
            </p>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="ml-auto text-neutral-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <p className="mt-2 text-xs text-neutral-300 md:text-sm">
            {techNotes[skill].note}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Icon = ({ skill, active, onHover, onSelect }) => (
  <button
    type="button"
    aria-label={techNotes[skill].name}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
    onClick={onSelect}
    className={`size-full cursor-pointer rounded-sm duration-200 hover:scale-110 ${
      active ? "scale-125 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" : ""
    }`}
  >
    <img
      src={`assets/logos/${skill}.svg`}
      alt=""
      className="size-full object-contain"
    />
  </button>
);
