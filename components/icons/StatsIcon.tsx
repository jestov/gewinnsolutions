import React from "react";

interface StatsIconProps {
  className: string;
}

const StatsIcon: React.FC<StatsIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="auto"
      viewBox="0 0 120 120"
      fill="none"
      className={className}
    >
      <circle cx="60" cy="60" r="60" fill="#BEFAC1" />
      <path d="M50.9433 77.4024H40V56.9951H50.9433V77.4024Z" fill="#1B294F" />
      <path
        d="M65.4727 77.4025H54.5295V48.5103H65.4727V77.4025Z"
        fill="#1B294F"
      />
      <path d="M80 77.4043H69.0567V42.4043H80V77.4043Z" fill="#1B294F" />
    </svg>
  );
};

export default StatsIcon;
