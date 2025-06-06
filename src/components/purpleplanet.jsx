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
            backgroundImage: "url(/assets/Packs/Starry_Night_Itch_Package/Layers_1920x1080/Starry_night_Layer_8.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer1Y,
          }}
        />
        {/* Layer 2: Wireframe Landscape */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/Packs/Starry_Night_Itch_Package/Layers_1920x1080/Starry_night_Layer_6.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer2Y,
          }}
        />
        {/* Layer 3: Geometric Shapes */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/Packs/Starry_Night_Itch_Package/Layers_1920x1080/Starry_night_Layer_5.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer3Y,
          }}
        />
        {/* Layer 4: Data Streams */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/Packs/Starry_Night_Itch_Package/Layers_1920x1080/Starry_night_Layer_2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y,
          }}
        />
        {/* Layer 4: Falling Star*/}
        <motion.div
          className="absolute top-10 right-1/4 w-44 h-44 z-10"
          style={{
            backgroundImage: "url(/assets/Packs/Starry_Night_Itch_Package/Falling_Star/Starry_night_star_1920x1080.gif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            y: layer4Y, // Optional if you still want parallax movement
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
