// components/VideoPlayer.js

import React, { useRef, useState, useEffect } from "react";
import PlayIcon from "@/components/icons/PlayIcon";
import CloseIcon from "@/components/icons/CloseIcon";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
      setIsFullscreen(true);
    }
  };

  const handleClose = () => {
    setIsFullscreen(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
    }
  }, []);

  return (
    <div className={`relative ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className={`w-full object-cover ${isFullscreen ? "h-full object-cover" : "h-screen"}`}
      >
        <source src="/videos/2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isFullscreen && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-primary bg-opacity-30">
          <button
            onClick={handlePlay}
            className="hover:scale-105 transition duration-500"
          >
            <PlayIcon className="w-8 h-8" color="#ffffff" />
          </button>
        </div>
      )}
      {isFullscreen && (
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-primary bg-opacity-50 p-2 rounded-full hover:translate-y-2 hover:bg-opacity-100 transition duration-500"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
