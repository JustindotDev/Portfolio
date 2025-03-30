import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const IMGS = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
];

const RollingGallery = ({ autoplay = true, pauseOnHover = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerWidth = IMGS.length * 140; // 120px width + 20px gap
  const duplicatedImages = [...IMGS, ...IMGS];

  return (
    <div
      className="relative h-[110px] lg:h-[180px] w-full overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex gap-5 py-[30px]"
          initial={{ x: 0 }}
          animate={{ x: -containerWidth }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            pause: isHovered || !autoplay,
          }}
        >
          {duplicatedImages.map((url, i) => (
            <motion.div
              key={i}
              className="relative h-[50px] min-w-[50px] lg:h-[70px] lg:min-w-[70px] bg-cyan-900 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={url}
                alt={`Tech stack item ${i}`}
                className="h-[35px] w-[35px] lg:h-[50px] lg:w-[50px] object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
