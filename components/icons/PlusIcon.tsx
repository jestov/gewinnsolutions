interface PlusIconProps {
  dark?: boolean; // Add dark mode prop
  className?: string;
}

export default function PlusIcon({ dark = false, className }: PlusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      className={className}
    >
      <path
        d="M1 17H17M33 17H17M17 17V1M17 17V33"
        stroke={dark ? "black" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
