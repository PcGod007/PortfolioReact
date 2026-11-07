import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Data Science", "Machine Learning", "Agentic AI Frameworks"];
  const wordsmob = ["Data\nScience", "Machine\nLearning", "Agentic\nAI\nFrameworks"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-8 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium text-neutral-800"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Pranav C
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-700"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Specializing in
          </motion.p>
          <motion.div
            className="min-h-48"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-neutral-800 text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            {/*ENTER ANY TEXT HERE IF NEEDED*/}
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-2 sm:space-y-6 md:hidden">
        <motion.p
          className="text-2xl sm:text-4xl font-medium text-neutral-800"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Pranav C
        </motion.p>
        <div>
          <motion.p
            className="text-3xl sm:text-5xl font-black text-neutral-700"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Specializing in
          </motion.p>
          <motion.div
            className="min-h-30 sm:min-h-54"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={wordsmob}
              className="font-bold text-neutral-800 text-4xl sm:text-7xl text-center whitespace-pre-line"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-100"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            {/*BLEH BLEH BLEH*/}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
