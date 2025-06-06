import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  playHref,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <button
            onClick={() => setIsHidden(true)}
            className="flex items-center gap-1 cursor-pointer hover-animation"
          >
            Read More
            <img src="assets/arrow-right.svg" className="w-5" />
          </button>

          {/* ✅ Play link with matching style and animation */}
          {playHref && (
            <a
              href={playHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 cursor-pointer hover-animation"
            >
              Play
              <img src="assets/controller.svg" className="w-10" />
            </a>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          playHref={playHref}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
