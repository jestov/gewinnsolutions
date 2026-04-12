import Link from "next/link";
import { ReactNode } from "react";
import ArrowIcon from "../components/icons/ArrowIcon";

interface ButtonWithArrowProps {
  children: ReactNode;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  dark?: boolean;
}

export default function ButtonWithArrow({
  children,
  href,
  className = "",
  fullWidth = false,
  target = "_self",
  onClick,
  type = "button",
  dark = false,
}: ButtonWithArrowProps) {
  const baseClasses =
    "border flex font-medium justify-between items-center cursor-pointer transition font-clash text-sm tracking-wide duration-300 rounded-r-full h-[48px] hover:opacity-80";

  const fullWidthClass = fullWidth ? "w-full" : "";

  const lightClasses = "bg-transparent border-primary text-primary";
  const darkClasses = "bg-transparent border-white text-white";

  const combinedClasses = `${baseClasses} ${dark ? darkClasses : lightClasses} ${fullWidthClass} ${className}`;

  const content = (
    <>
      <span className="pl-5 pr-4">{children}</span>
      <div
        className={`w-[46px] h-[46px] rounded-r-full flex items-center justify-center ${dark ? "bg-white" : "bg-primary"}`}
      >
        <ArrowIcon dark={dark} className="w-5 h-5" />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
}
