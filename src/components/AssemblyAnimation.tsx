import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AssemblyAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Each part animates from exploded position to assembled (0 = exploded, 1 = assembled)
  // We map scroll progress so assembly happens in the first 60% of scroll
  const progress = useTransform(scrollYProgress, [0.05, 0.65], [0, 1]);

  // Left side panel
  const leftX = useTransform(progress, [0, 1], [-120, 0]);
  const leftRotate = useTransform(progress, [0, 1], [-8, 0]);

  // Right side panel
  const rightX = useTransform(progress, [0, 1], [120, 0]);
  const rightRotate = useTransform(progress, [0, 1], [8, 0]);

  // Top panel
  const topY = useTransform(progress, [0, 1], [-80, 0]);
  const topRotate = useTransform(progress, [0, 1], [5, 0]);

  // Bottom panel
  const bottomY = useTransform(progress, [0, 1], [80, 0]);

  // Back panel
  const backScale = useTransform(progress, [0, 0.5], [0.85, 1]);
  const backOpacity = useTransform(progress, [0, 0.4], [0.3, 1]);

  // Shelves
  const shelf1X = useTransform(progress, [0.2, 0.8], [60, 0]);
  const shelf2X = useTransform(progress, [0.3, 0.85], [-50, 0]);
  const shelf3X = useTransform(progress, [0.25, 0.82], [40, 0]);
  const shelfOpacity = useTransform(progress, [0.15, 0.5], [0, 1]);

  // Left door
  const doorLeftX = useTransform(progress, [0.4, 1], [-100, 0]);
  const doorLeftRotateY = useTransform(progress, [0.4, 1], [-25, 0]);
  const doorLeftOpacity = useTransform(progress, [0.35, 0.6], [0, 1]);

  // Right door
  const doorRightX = useTransform(progress, [0.5, 1], [100, 0]);
  const doorRightRotateY = useTransform(progress, [0.5, 1], [25, 0]);
  const doorRightOpacity = useTransform(progress, [0.45, 0.65], [0, 1]);

  // Hardware / hinges opacity
  const hardwareOpacity = useTransform(progress, [0.6, 0.9], [0, 1]);
  const hardwareScale = useTransform(progress, [0.6, 0.9], [0.5, 1]);

  // Overall container opacity
  const containerOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  // Text
  const textOpacity = useTransform(progress, [0.7, 1], [0, 1]);
  const textY = useTransform(progress, [0.7, 1], [20, 0]);

  const woodColor = "hsl(30, 40%, 72%)";
  const woodDark = "hsl(25, 30%, 55%)";
  const woodLight = "hsl(35, 45%, 82%)";
  const metalColor = "hsl(220, 8%, 50%)";

  return (
    <section ref={containerRef} className="relative h-[200vh]" aria-hidden="true">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-graphite">
        <motion.div
          style={{ opacity: containerOpacity }}
          className="relative flex flex-col items-center"
        >
          {/* Assembly label */}
          <motion.p
            style={{ opacity: textOpacity, y: textY }}
            className="text-tool-yellow font-heading text-sm sm:text-base tracking-widest uppercase mb-8"
          >
            Precizna montaža, komad po komad
          </motion.p>

          {/* Wardrobe assembly container */}
          <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] md:w-[400px] md:h-[500px]"
            style={{ perspective: "800px" }}
          >
            {/* Back panel */}
            <motion.div
              style={{ scale: backScale, opacity: backOpacity }}
              className="absolute inset-[8%] rounded-sm"
              aria-hidden="true"
            >
              <div className="w-full h-full rounded-sm" style={{ backgroundColor: woodLight, border: `1px solid ${woodDark}` }} />
            </motion.div>

            {/* Left side panel */}
            <motion.div
              style={{ x: leftX, rotate: leftRotate }}
              className="absolute left-0 top-0 w-[10%] h-full"
            >
              <div className="w-full h-full rounded-sm shadow-lg" style={{
                background: `linear-gradient(135deg, ${woodColor}, ${woodDark})`,
                border: `1px solid ${woodDark}`,
              }} />
            </motion.div>

            {/* Right side panel */}
            <motion.div
              style={{ x: rightX, rotate: rightRotate }}
              className="absolute right-0 top-0 w-[10%] h-full"
            >
              <div className="w-full h-full rounded-sm shadow-lg" style={{
                background: `linear-gradient(225deg, ${woodColor}, ${woodDark})`,
                border: `1px solid ${woodDark}`,
              }} />
            </motion.div>

            {/* Top panel */}
            <motion.div
              style={{ y: topY, rotate: topRotate }}
              className="absolute top-0 left-[5%] right-[5%] h-[6%]"
            >
              <div className="w-full h-full rounded-sm shadow-lg" style={{
                background: `linear-gradient(180deg, ${woodLight}, ${woodColor})`,
                border: `1px solid ${woodDark}`,
              }} />
            </motion.div>

            {/* Bottom panel */}
            <motion.div
              style={{ y: bottomY }}
              className="absolute bottom-0 left-[5%] right-[5%] h-[6%]"
            >
              <div className="w-full h-full rounded-sm shadow-lg" style={{
                background: `linear-gradient(0deg, ${woodDark}, ${woodColor})`,
                border: `1px solid ${woodDark}`,
              }} />
            </motion.div>

            {/* Shelves */}
            {[
              { top: "25%", x: shelf1X },
              { top: "48%", x: shelf2X },
              { top: "71%", x: shelf3X },
            ].map((shelf, i) => (
              <motion.div
                key={i}
                style={{ x: shelf.x, opacity: shelfOpacity }}
                className="absolute left-[12%] right-[12%] h-[3%]"
                data-top={shelf.top}
              >
                <div
                  className="w-full h-full rounded-sm shadow-md absolute"
                  style={{
                    top: shelf.top,
                    backgroundColor: woodColor,
                    border: `1px solid ${woodDark}`,
                    position: "absolute",
                  }}
                />
              </motion.div>
            ))}

            {/* Actual positioned shelves */}
            <motion.div style={{ x: shelf1X, opacity: shelfOpacity }} className="absolute left-[12%] right-[12%] h-[3%] top-[25%]">
              <div className="w-full h-full rounded-sm shadow-md" style={{ backgroundColor: woodColor, border: `1px solid ${woodDark}` }} />
            </motion.div>
            <motion.div style={{ x: shelf2X, opacity: shelfOpacity }} className="absolute left-[12%] right-[12%] h-[3%] top-[48%]">
              <div className="w-full h-full rounded-sm shadow-md" style={{ backgroundColor: woodColor, border: `1px solid ${woodDark}` }} />
            </motion.div>
            <motion.div style={{ x: shelf3X, opacity: shelfOpacity }} className="absolute left-[12%] right-[12%] h-[3%] top-[71%]">
              <div className="w-full h-full rounded-sm shadow-md" style={{ backgroundColor: woodColor, border: `1px solid ${woodDark}` }} />
            </motion.div>

            {/* Left door */}
            <motion.div
              style={{
                x: doorLeftX,
                rotateY: doorLeftRotateY,
                opacity: doorLeftOpacity,
                transformOrigin: "left center",
              }}
              className="absolute left-[2%] top-[4%] w-[38%] h-[92%]"
            >
              <div className="w-full h-full rounded-sm shadow-xl" style={{
                background: `linear-gradient(135deg, ${woodLight} 0%, ${woodColor} 50%, ${woodDark} 100%)`,
                border: `2px solid ${woodDark}`,
              }}>
                {/* Door handle */}
                <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[6%] h-[8%] rounded-full" style={{ backgroundColor: metalColor, boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }} />
              </div>
            </motion.div>

            {/* Right door */}
            <motion.div
              style={{
                x: doorRightX,
                rotateY: doorRightRotateY,
                opacity: doorRightOpacity,
                transformOrigin: "right center",
              }}
              className="absolute right-[2%] top-[4%] w-[38%] h-[92%]"
            >
              <div className="w-full h-full rounded-sm shadow-xl" style={{
                background: `linear-gradient(225deg, ${woodLight} 0%, ${woodColor} 50%, ${woodDark} 100%)`,
                border: `2px solid ${woodDark}`,
              }}>
                {/* Door handle */}
                <div className="absolute left-[12%] top-1/2 -translate-y-1/2 w-[6%] h-[8%] rounded-full" style={{ backgroundColor: metalColor, boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }} />
              </div>
            </motion.div>

            {/* Hinges - left */}
            {[20, 50, 80].map((top) => (
              <motion.div
                key={`hinge-l-${top}`}
                style={{ opacity: hardwareOpacity, scale: hardwareScale }}
                className="absolute left-[7%] w-[5%] h-[3%]"
                data-top={`${top}%`}
              >
                <div className="absolute w-full h-full rounded-sm" style={{
                  top: `${top}%`,
                  backgroundColor: metalColor,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
                  position: "absolute",
                }} />
              </motion.div>
            ))}

            {/* Hinges - right */}
            {[20, 50, 80].map((top) => (
              <motion.div
                key={`hinge-r-${top}`}
                style={{ opacity: hardwareOpacity, scale: hardwareScale }}
                className="absolute right-[7%] w-[5%] h-[3%]"
                data-top={`${top}%`}
              >
                <div className="absolute w-full h-full rounded-sm" style={{
                  top: `${top}%`,
                  backgroundColor: metalColor,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
                  position: "absolute",
                }} />
              </motion.div>
            ))}
          </div>

          {/* Bottom text */}
          <motion.p
            style={{ opacity: textOpacity, y: textY }}
            className="text-primary-foreground/50 text-sm sm:text-base mt-8 max-w-md text-center"
          >
            Od pojedinačnih delova do gotovog komada — brzo, precizno i uredno.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AssemblyAnimation;
