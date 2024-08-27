import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  fullWidth?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default function Button({
  children,
  href,
  className = "",
  fullWidth = false,
  target = "_self",
}: ButtonProps) {
  return (
    <Link href={href} target={target}>
      <div
        className={`flex bg-white font-medium justify-center items-center gap-2 py-3.5 px-3 md:px-8 min-h-[73px] cursor-pointer transition font-clash text-base duration-300 !leading-5 ${
          fullWidth ? "w-full" : ""
        } ${className}`}
      >
        {children}
      </div>
    </Link>
  );
}
