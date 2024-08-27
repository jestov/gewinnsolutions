import React from "react";

interface PlayIconProps {
  className: string;
  color: string;
}

const PlayIcon: React.FC<PlayIconProps> = ({ className, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM29.7545 26.4169C29.7545 24.6458 31.6818 23.5476 33.2054 24.4505L56.1269 38.0336C57.6209 38.9189 57.6209 41.0811 56.1269 41.9664L33.2054 55.5495C31.6818 56.4524 29.7545 55.3542 29.7545 53.5831V26.4169Z"
        fill="white"
      />
    </svg>
  );
};

export default PlayIcon;
