import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const layer1Y = useTransform(x, [0, 0.5], ["0%", "50%"]);
  const layer2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const layer3Y = useTransform(x, [0, 0.5], ["0%", "10%"]);
  const layer4Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section
      className="absolute inset-0 w-full h-full -z-10"
      style={{ filter: "brightness(1.0)" }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Layer 1 */}
        <div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/PortfolioReact/assets/Packs/Ocean/1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer1Y,
          }}
        />
        {/* Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/PortfolioReact/assets/Packs/Ocean/2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer2Y,
          }}
        />
        {/* Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/PortfolioReact/assets/Packs/Ocean/3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer3Y,
          }}
        />
        {/* Layer 4 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/PortfolioReact/assets/Packs/Ocean/4.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y,
          }}
        />
      </div>
    </section>

  );
};

export default ParallaxBackground;
