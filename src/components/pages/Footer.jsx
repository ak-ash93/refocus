import React from "react";

const Footer = () => {
  const socialLinks = ["instagram", "Twitter", "LinkedIn"];
  const siteMap = ["Home", "Work", "Careers", "Contact"];
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex gap-20">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold tracking-wider">
            refocus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-3">
          <div className="basis-1/3">
            <h4 className="mb-10 text-2xl font-semibold capitalize">Socials</h4>
            {socialLinks.map((link, index) => (
              <a
                className="block mt-3 text-lg hover:underline hover:text-blue-700 cursor-pointer text-zinc-600"
                key={index}
                href="#"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="basis-1/3">
            <h4 className="mb-10 text-2xl font-semibold capitalize">
              Site map
            </h4>
            {siteMap.map((link, index) => (
              <a
                className="block mt-3 text-lg hover:underline hover:text-blue-700 cursor-pointer text-zinc-600"
                key={index}
                href="#"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Refocus is a pioneering digital agency dedicated to
              revolutionizing the way businesses engage with their audience.
            </p>
            <img
              src="https://static.ethicaljobs.com.au/media/1531718964_Cc8iY_.jpeg"
              alt="footer-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
