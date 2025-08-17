import { useEffect, useState } from "react";

interface IntroProps {
  onFinish: () => void;
}

const Intro: React.FC<IntroProps> = ({ onFinish }) => {
  const [displayText, setDisplayText] = useState("");
  const [isFading, setIsFading] = useState(false);
  const text = "Welcome to my portfolio!";

  useEffect(() => {
    // typing effect
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(typing);
    }, 100);

    
    const fadeTimer = setTimeout(() => setIsFading(true), 5000);
    const finishTimer = setTimeout(() => onFinish(), 6000);

    return () => {
      clearInterval(typing);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/intro.jpg')",
          zIndex: 0, 
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <h1 className="relative text-6xl md:text-8xl font-bold text-white">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};

export default Intro;
