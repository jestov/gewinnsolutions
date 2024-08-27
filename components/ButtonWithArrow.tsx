import Link from "next/link";
import { ReactNode } from "react";
import ArrowIcon from "../components/icons/ArrowIcon"; // Adjust the import path as needed

interface ButtonWithArrowProps {
  children: ReactNode;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
  type?: "link" | "submit" | "button" | "reset";
  dark?: boolean; // Add dark mode prop
}

export default function ButtonWithArrow({
  children,
  href,
  className = "",
  fullWidth = false,
  target = "_self",
  onClick,
  type = "link",
  dark = false, // Default to false
}: ButtonWithArrowProps) {
  const baseClasses =
    "border-2 flex font-medium justify-between items-center cursor-pointer transition font-clash text-base tracking-wide duration-300  rounded-r-[26px] !leading-5";

  const fullWidthClass = fullWidth ? "w-full" : "";

  const lightClasses = "bg-white border-primary text-primary";
  const darkClasses = "bg-transparent border-white text-white";

  const combinedClasses = `${baseClasses} ${dark ? darkClasses : lightClasses} ${fullWidthClass} ${className}`;

  if (type === "link" && href) {
    return (
      <Link href={href} target={target}>
        <div className={combinedClasses}>
          <div className="py-4 px-5">{children}</div>
          <div
            className={`aspect-square min-h-full  rounded-r-[24px] p-4 ${dark ? "bg-white" : "bg-primary"}`}
          >
            <ArrowIcon dark={dark} />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      <div className="py-4 px-5">{children}</div>
      <div
        className={`aspect-square min-h-full  rounded-r-[24px] p-4 ${dark ? "bg-white" : "bg-primary"}`}
      >
        <ArrowIcon dark={dark} />
      </div>
    </button>
  );
}
