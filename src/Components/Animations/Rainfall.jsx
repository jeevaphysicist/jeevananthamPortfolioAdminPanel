import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const RainfallAnimation = () => {
  // The raindrop component will be reused for each raindrop
  const Raindrop = (props) => (
    <motion.div
      className="absolute w-2 h-2 bg-blue-500 rounded-full"
      {...props}
    />
  );

  // Create an array of raindrops with random starting positions
  const raindrops = useRef([]);

  // Define motion variants for the raindrops
  const dropVariants = {
    initial: {
      y: -10,
      opacity: 1,
      scale: 1,
    },
    animate: {
      y: window.innerHeight + 10,
      opacity: 0,
      scale: 2,
      transition: {
        duration: Math.random() * 5 + 3, // Randomized duration between 3 and 8 seconds
        ease: "easeInOut",
      },
    },
  };

  // Add a useEffect to create a loop for generating new raindrops
  useEffect(() => {
    const interval = setInterval(() => {
      raindrops.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * -10,
        scale: 1,
        opacity: 1,
        width: Math.random() * 4 + 1, // Randomized width between 1 and 5 pixels
      });
    }, 50); // Generate raindrops more frequently

    return () => clearInterval(interval);
  }, []);

  // Map over the raindrops array to create motion.div elements
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {raindrops.current.map((drop, index) => (
        <Raindrop
          key={index}
          variants={dropVariants}
          animate="animate"
          initial="initial"
          custom={{ x: drop.x, y: drop.y, scale: drop.scale, width: drop.width }}
        />
      ))}
    </div>
  );
};

export default RainfallAnimation;