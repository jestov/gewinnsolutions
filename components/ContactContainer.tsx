import PropTypes from "prop-types";
import Link from "next/link";
import Contact from "@/components/Contact";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";

function ContactContainer({ theme = "light" }) {
  return (
    <section
      id="contact"
      className={`flex flex-col justify-end ${
        theme === "dark" ? "bg-black" : "bg-white"
      } items-end gap-12 md:gap-32 pt-4 md:pt-36 pb-12 md:pb-20 px-[30px] md:px-[60px] bg-no-repeat bg-center bg-cover relative text-white before:absolute before:rounded-t-[64px] before:inset-0 before:z-0 z-40`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 max-w-[1400px] mx-auto z-2 relative w-full bg-primary p-28 rounded-[64px]">
        <div className="flex flex-col gap-14 items-center md:items-start">
          <div className="flex gap-8 font-clash ">
            <div className="flex flex-col gap-16 font-normal tracking-wide text-lg justify-between">
              <h1 className="font-clash text-2xl lg:text-3xl relative font-light tracking-normal">
                ¿Estás listo para impulsar tu
                <br />
                <span className="font-medium text-xl lg:text-5xl">
                  Fitness Center?
                </span>
              </h1>
              <div className="flex flex-col gap-3">
                <span className="text-mainGray text-base">
                  ¿Necesitas ayuda personalizada?
                </span>
                <Link
                  href="mailto:contacto@gewinnsolutions.com"
                  className="text-xl lg:text-3xl font-light tracking-wide"
                  target="_blank"
                >
                  contacto@gewinnsolutions.com
                </Link>
                <Link
                  href="https://api.whatsapp.com/send/?phone=523331004726"
                  target="_blank"
                  className="text-xl lg:text-3xl font-light tracking-wide flex gap-3"
                >
                  <WhatsAppIcon /> (+52) 1 33 3100 4726
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </section>
  );
}

ContactContainer.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
};

export default ContactContainer;
