import React from "react";

interface FractionalIconProps {
  className: string;
}

const FractionalIcon: React.FC<FractionalIconProps> = ({ className }) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 57.7027V75.4054H48.9189H57.8378V66.4865V57.5676H66.7568H75.6757V48.7838V40H57.8378H40V57.7027ZM62.1622 70.5405V79.4595H71.0811H80V70.5405V61.6216H71.0811H62.1622V70.5405Z"
        fill="#1B294F"
      />
    </svg>
  );
};

export default FractionalIcon;
