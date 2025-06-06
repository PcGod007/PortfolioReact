import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const layer1Y = useTransform(x, [0, 0.5], ["0%", "50%"]);
  const layer2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const layer3Y = useTransform(x, [0, 0.5], ["0%", "10%"]);
  const layer4Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Layer 1: Digital Grid */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/Packs/The_Dawn/Layers/1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer1Y,
          }}
        />
        {/* Layer 2: Wireframe Landscape */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/Packs/The_Dawn/Layers/2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer2Y,
          }}
        />
        {/* Layer 3: Geometric Shapes */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/Packs/The_Dawn/Layers/3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer3Y,
          }}
        />
        {/* Layer 4: Data Streams */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/Packs/The_Dawn/Layers/4.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y,
          }}
        />
        {/* Layer 5: Data Streams */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/Packs/The_Dawn/Layers/5.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y,
          }}
        />
        {/* Layer 6: Data Streams */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/Packs/The_Dawn/Layers/6.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y,
          }}
        />
        {/* Layer 7: Data Streams */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/Packs/The_Dawn/Layers/7.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y,
          }}
        />
        {/* Layer 8: Data Streams */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/Packs/The_Dawn/Layers/8.png)",
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
