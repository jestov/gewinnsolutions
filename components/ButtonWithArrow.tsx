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
  type?: "submit" | "button" | "reset"; // Se eliminó "link" de aquí
  dark?: boolean;
}

export default function ButtonWithArrow({
  children,
  href,
  className = "",
  fullWidth = false,
  target = "_self",
  onClick,
  type = "button", // Cambiado el valor por defecto a "button"
  dark = false,
}: ButtonWithArrowProps) {
  const baseClasses =
    "border-2 flex font-medium justify-between items-center cursor-pointer transition font-clash text-base tracking-wide duration-300 rounded-r-[26px] !leading-5";

  const fullWidthClass = fullWidth ? "w-full" : "";

  const lightClasses = "bg-transparent border-primary text-primary";
  const darkClasses = "bg-transparent border-white text-white";

  const combinedClasses = `${baseClasses} ${dark ? darkClasses : lightClasses} ${fullWidthClass} ${className}`;

  if (href) {
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
