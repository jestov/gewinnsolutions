interface ArrowIconProps {
  dark?: boolean; // Add dark mode prop
  className?: string;
}

export default function ArrowIcon({ dark = false, className }: ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      class={className}
    >
      <path
        stroke={dark ? "black" : "white"} // Conditionally set the stroke color
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 12h14M12 19l7-7-7-7"
      ></path>
    </svg>
  );
}
