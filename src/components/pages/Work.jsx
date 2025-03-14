import React, { useState } from "react";
import { useScroll } from "framer-motion";

const Work = () => {
  const { scrollYProgress } = useScroll();

  const [images, setImages] = useState([
    {
      url: "https://www.cssdesignawards.com/cdasites/2022/202204/20220427133337.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://screenshots.webflow.com/sites/60d4936dc6a4eb2166d0f114/20210716184150_42e38ab9d7f1ad6c4017e6c15445140f.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://uploads-ssl.webflow.com/62df9251ae9124d9d726bcb9/635197d3a0771ca45e642e5b_Screen%2BShot%202022-10-20%20at%2020.46.19.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://www.cssdesignawards.com/cdasites/2022/202204/20220503053001.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/5dbfbe5b9bf13e1ebb54e91f/656f3568658d3df1ed145245_hero.webp",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://screenshots.webflow.com/sites/60d4936dc6a4eb2166d0f114/20210716184150_42e38ab9d7f1ad6c4017e6c15445140f.png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  function showImage(arr) {
    setImages((prev) =>
      prev.map((item, index) =>
        arr.includes(index)
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  }

  scrollYProgress.on("change", (value) => {
    const progress = Math.floor(value * 100);

    switch (true) {
      case progress === 0:
        showImage([]);
        break;
      case progress === 1:
        showImage([0]);
        break;
      case progress === 2:
        showImage([0, 1]);
        break;
      case progress === 3:
        showImage([0, 1, 2, 3]);
        break;
      case progress === 4:
        showImage([0, 1, 2, 3, 4]);
        break;
      case progress === 5:
        showImage([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto text-center relative flex items-center justify-center">
        <h1 className="text-[30vw] select-none leading-none font-medium tracking-tight text-center">
          work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (img, index) =>
              img.isActive && (
                <img
                  className="absolute w-60 h-50 rounded-xl -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: img.top, left: img.left }}
                  key={index}
                  src={img.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
