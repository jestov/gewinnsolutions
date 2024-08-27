"use client";

import CalendarIcon from "./icons/CalendarIcon";
import Link from "next/link";

function ContactFooter() {
  return (
    <div className="flex flex-col md:flex-row w-full relative z-10 md:min-w-[780px] max-w-5xl items-center bg-secondary p-8 md:p-12 gap-6 md:gap-0 rounded-[32px]">
      <div className="w-full flex flex-col gap-2 md:mr-8">
        <h4 className="text-xl md:text-2xl">
          Ready to grow the value of your company?
        </h4>
        <p className="text-base !leading-snug">
          <span className="text-greenLighter">Unlock exclusive insights</span>{" "}
          by contacting our sales team.
        </p>
      </div>
      <Link
        href="https://calendar.app.google/Cfa8NYHBW5LzbVAf8"
        target="_blank"
        className="min-w-[200px] -mt-2 md:-mt-0 flex justify-between items-center gap-1.5 px-5 md:px-5.5 py-4 md:py-5 rounded-full cursor-pointer bg-greenLighter hover:bg-greenLight text-secondary transition duration-500"
      >
        <div>Schedule a Call</div>
        <span className="inline-block">
          <CalendarIcon />
        </span>
      </Link>
    </div>
  );
}

export default ContactFooter;
