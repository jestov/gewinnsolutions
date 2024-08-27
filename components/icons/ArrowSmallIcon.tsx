import React from "react";

type ArrowSmallIconProps = {
  className?: string;
};

const ArrowSmallIcon: React.FC<ArrowSmallIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      className={`stroke-current`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h14M12 19l7-7-7-7"
    ></path>
  </svg>
);

export default ArrowSmallIcon;
