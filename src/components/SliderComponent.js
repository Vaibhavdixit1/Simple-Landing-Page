"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

const SliderComponent = ({ model }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const updateProgress = () => {
      if (video && video.duration) {
        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
      }
    };

    video?.addEventListener("timeupdate", updateProgress);

    return () => {
      video?.removeEventListener("timeupdate", updateProgress);
    };
  }, [activeIndex]);

  const handlePauseClick = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    setIsPaused(false);
    setProgress(0);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
    >
      {/* Main Video */}
      <motion.video
        key={model[activeIndex].video}
        ref={videoRef}
        src={model[activeIndex].video}
        className="object-cover h-40 md:h-60 w-full"
        autoPlay
        muted
        loop={false}
      />

      {/* Thumbnails */}
      <div className="flex flex-wrap gap-4 sm:gap-8 text-white items-center justify-center mt-4">
        {model.map((item, index) => (
          <div
            key={index}
            className="flex text-sm flex-col items-center w-20 sm:w-auto"
          >
            <img
              src={item.thumbnail}
              alt={`Thumbnail ${index}`}
              className="w-16 sm:w-20 cursor-pointer"
              onClick={() => handleThumbnailClick(index)}
            />
            <span className="text-center text-xs sm:text-sm mt-1">
              {item.title}
            </span>
          </div>
        ))}

        {/* Progress Circle Button */}
        <div
          onClick={handlePauseClick}
          className="relative w-12 h-12 rounded-full flex items-center text-white justify-center cursor-pointer mt-4 sm:mt-0"
          style={{
            background: `conic-gradient(#fff ${
              progress * 3.6
            }deg, #ffffff22 0deg)`,
          }}
        >
          <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center z-10">
            {isPaused ? (
              <FaPlay className="text-white text-lg" />
            ) : (
              <FaPause className="text-white text-lg" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderComponent;
