import { motion } from "motion/react";
import { useState } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  playHref,
  closeModal,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
      onClick={handleClose}
    >
      <motion.div
        className="relative max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isClosing ? { opacity: 0, scale: 0.65 } : { opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        onAnimationComplete={() => {
          if (isClosing) closeModal();
        }}
      >
        <button
          onClick={handleClose}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>

        <img src={image} alt={title} className="w-full rounded-t-2xl" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            <div className="flex flex-col items-end gap-2">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  View Project <img src="assets/arrow-up.svg" className="size-4" />
                </a>
              )}

              {playHref && (
                <a
                  href={playHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  Play <img src="assets/controller.svg" className="size-9" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
