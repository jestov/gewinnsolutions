"use client";

import ArrowSmallIcon from "./icons/ArrowSmallIcon";
import Link from "next/link";

function ContactSmall() {
  return (
    <div className="flex flex-col md:flex-row w-full relative z-30 max-w-5xl items-center gap-4 md:gap-0 bg-secondary p-8 md:p-12 rounded-[32px]">
      <div className="w-full flex flex-col gap-2 md:mr-4">
        <h4 className="text-3xl">Let&apos;s make it possible!</h4>
        <p className="text-base !leading-">
          <span className="text-greenLighter">Unlock exclusive insights</span>{" "}
          by contacting our sales team.
        </p>
      </div>
      <Link
        href="#contact"
        className="min-w-[200px] flex justify-between items-center gap-4 px-5 md:px-5.5 py-4 md:py-5 rounded-full cursor-pointer bg-greenLighter hover:bg-greenLight text-secondary transition duration-500"
      >
        <div>Contact Us</div>
        <span className="inline-block ml-2 rotate-90">
          <ArrowSmallIcon />
        </span>
      </Link>
    </div>
  );
}

export default ContactSmall;
