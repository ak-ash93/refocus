import React, { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import gsap from "gsap";

const NavBar = () => {
  const navLinks = ["Home", "About", "Culture", "", "Contact"];
  const [activeIndex, setActiveIndex] = useState(null);
  const linkRefs = useRef([]); //  Store references to links

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Preload the logo image when the component mounts
    const link = document.createElement("link");
    link.rel = "preload";
    link.href =
      "https://arts.wales/system/files/styles/user_image/private/user_img/ReFocus%20%284%29_0.png?itok=mAzaFl0K";
    link.as = "image";
    document.head.appendChild(link);

    // Cleanup when the component is unmounted
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const links = linkRefs.current; // Store in a local variable

    links.forEach((link) => {
      if (link) {
        const underline = link.querySelector(".underline");

        gsap.set(underline, { scaleX: 0 });

        // Store animation in the element's dataset
        const hoverAnim = gsap.to(underline, {
          scaleX: 1,
          duration: 0.4,
          ease: "power2.out",
          paused: true,
        });

        link.addEventListener("mouseenter", () => hoverAnim.play());
        link.addEventListener("mouseleave", () => hoverAnim.reverse());

        // Store cleanup function to remove event listeners
        link.cleanup = () => {
          link.removeEventListener("mouseenter", () => hoverAnim.play());
          link.removeEventListener("mouseleave", () => hoverAnim.reverse());
        };
      }
    });

    return () => {
      links.forEach((link) => link?.cleanup && link.cleanup());
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-3 flex items-center  justify-between border-b-[1px] border-zinc-600">
      <div className="left-content flex items-center mr-30">
        <img
          src="https://arts.wales/system/files/styles/user_image/private/user_img/ReFocus%20%284%29_0.png?itok=mAzaFl0K"
          alt="logo-image"
          className="w-35 h-20"
        />
        <div className="links flex gap-20 ml-25">
          {navLinks.map((navlink, index) =>
            navlink.length === 0 ? (
              <span key={index} className="w-[2px] h-10 bg-zinc-600"></span>
            ) : (
              <a
                ref={(el) => (linkRefs.current[index] = el)}
                onClick={() => handleClick(index)}
                className="text-xl tracking-widest flex items-center gap-2 relative cursor-pointer"
                key={index}
                href={`#${navlink.toLowerCase()}`}
              >
                {activeIndex === index && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {navlink}
                {/* Underline Effect */}
                <span className="underline absolute bottom-[-4px] left-0 w-full h-[2px] bg-white transform scale-x-0 origin-left"></span>
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default NavBar;
