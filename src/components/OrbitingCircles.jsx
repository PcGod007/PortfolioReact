import { twMerge } from "tailwind-merge";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          width={radius * 2}
          height={radius * 2}
        >
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        const baseAngle = (360 / count) * index;
        const angle = reverse ? baseAngle + 180 : baseAngle; // Apply slight offset if reverse
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full ${
                reverse ? "[animation-direction:reverse]" : ""
              }`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
