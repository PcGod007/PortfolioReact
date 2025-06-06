import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "python",
    "mysql",
    "java",
    "LLM1",
    "nlp",
    "grok1",
    "html5",
    "css3",
    "javascript",
    "react",
    "mssql",
    "snowflake",
    "gitlab",
    "microsoft",
    "git",
    "cplusplus",
    "figma",
    "yolo",
    "opencv1",
    "c"
  ];

  return (
    <div className="relative flex h-[550px] w-[230px] flex-col items-center justify-center">
      <OrbitingCircles iconSize={42} radius={180}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={28} radius={120} reverse speed={2} startAngle={15}>
        {skills.slice().reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
