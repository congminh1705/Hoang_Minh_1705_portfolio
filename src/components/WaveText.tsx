import React from "react";
import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
}

const WaveText: React.FC<WaveTextProps> = ({ text, className }) => {
  return (
    <div className={`flex flex-wrap ${className || ""}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }} // nhấp nhô lên xuống
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.12, // delay theo index để tạo hiệu ứng chạy lần lượt
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default WaveText;
