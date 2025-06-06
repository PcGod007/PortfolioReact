import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section id="exp">
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
    </section>
  );
};

export default Experiences;
