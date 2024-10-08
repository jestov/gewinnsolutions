interface ChevronIconProps {
  dark?: boolean; // Add dark mode prop
  className?: string;
}

export default function ChevronIcon({
  dark = false,
  className,
}: ChevronIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.8839 9.11612C26.372 9.60427 26.372 10.3957 25.8839 10.8839L16.7678 20L25.8839 29.1161C26.372 29.6043 26.372 30.3957 25.8839 30.8839C25.3957 31.372 24.6043 31.372 24.1161 30.8839L14.1161 20.8839C13.628 20.3957 13.628 19.6043 14.1161 19.1161L24.1161 9.11612C24.6043 8.62796 25.3957 8.62796 25.8839 9.11612Z"
        fill="white"
      />
    </svg>
  );
}
