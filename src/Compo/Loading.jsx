import React, { useEffect, useState, useRef } from "react";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = async () => {
      try {
        audio.muted = false;
        await audio.play();
      } catch {
        audio.muted = true;
        try {
          await audio.play();
        } catch {
          console.warn("Audio autoplay failed.");
        }
      }
    };

    tryPlay();

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [onComplete]);

  const hexToRgb = (hex) => {
    const cleaned = hex.replace("#", "");
    const bigint = parseInt(cleaned, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const getInterpolatedColor = (progress) => {
    const start = hexToRgb("#3F0AFF"); // Deep blue-purple
    const end = hexToRgb("#FFFFFF"); // White

    const r = Math.round(start.r + ((end.r - start.r) * progress) / 100);
    const g = Math.round(start.g + ((end.g - start.g) * progress) / 100);
    const b = Math.round(start.b + ((end.b - start.b) * progress) / 100);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900 overflow-hidden relative">
      <audio ref={audioRef} src="/Intro.mp3" preload="auto" />

      {/* Main Loading Content */}
      <div className="relative w-96 h-64 z-10">
        <img
          src="/tech_surya_logo-removebg-preview 3.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-16 left-[58%] transform -translate-x-1/2 w-64 h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              backgroundColor: getInterpolatedColor(progress),
            }}
          ></div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 right-1 w-96 h-96 rounded-full flex justify-end text-end z-0">
        <img src="/load.png" alt="loading visual" />
      </div>
    </div>
  );
};

export default Loading;
