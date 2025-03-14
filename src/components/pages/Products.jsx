import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
  const productItems = [
    {
      title: "Arqitel",
      live: true,
      case: false,
      description:
        "Arqitel is a cutting-edge telecommunications solution designed to enhance connectivity and streamline communication for businesses of all sizes. With its advanced features, Arqitel offers seamless integration with existing systems, ensuring that teams can collaborate effectively regardless of their location. The platform supports a variety of communication methods, including voice, video, and messaging, making it an essential tool for modern enterprises looking to improve their operational efficiency and foster better relationships with clients and partners.",
      videoUrl:
        "https://media.istockphoto.com/id/1291909312/video/close-up-macro-man-browsing-tablet-computer-with-finger-person-using-smartphone-browsing.mp4?s=mp4-640x640-is&k=20&c=qQas4OrQUhyhvD5sxyWHqIp7SuBRXSe22ZVAwSdilpA=",
    },
    {
      title: "YIR 2024",
      live: true,
      case: false,
      description:
        "YIR 2024 is an innovative reporting tool that provides comprehensive insights and analytics for organizations to track their performance over the year. Designed with user-friendly interfaces and powerful data visualization capabilities, YIR 2024 allows businesses to easily generate reports that highlight key performance indicators, trends, and areas for improvement. This tool not only aids in strategic planning but also empowers teams to make data-driven decisions that can lead to increased productivity and growth.",
      videoUrl:
        "https://media.istockphoto.com/id/1405993999/video/vfx-animated-background-with-virtual-social-media-reality-interconnected-by-internet-into.mp4?s=mp4-640x640-is&k=20&c=Q3nrs4Qg5FKhGlp2cvh25cTZW-PJsVZ79LvtExk_4XA=",
    },
    {
      title: "Yahoo",
      live: true,
      case: true,
      description:
        "Yahoo is a well-known web services provider that has been a staple of the internet for decades. Offering a diverse range of services including email, news, finance, and search functionalities, Yahoo caters to millions of users worldwide. The platform is designed to provide a personalized experience, allowing users to customize their news feeds, manage their emails efficiently, and access a wealth of information at their fingertips. With a commitment to innovation, Yahoo continues to evolve, integrating new technologies to enhance user engagement and satisfaction.",
      videoUrl:
        "https://media.istockphoto.com/id/1344233712/video/young-man-watching-and-read-news-on-smart-phone-close-up-casual-male-browse-web-page-or-app.mp4?s=mp4-640x640-is&k=20&c=0jHE_E1VkF9tLeWehBX0X5w_5R1tCKdWn88NfmxwLC8=",
    },
    {
      title: "TTR",
      live: true,
      case: false,
      description:
        "TTR is a robust project management tool that helps teams collaborate effectively, manage tasks, and track progress in real-time. With features such as task assignment, deadline tracking, and progress visualization, TTR empowers teams to stay organized and focused on their goals. The platform also includes communication tools that facilitate discussions and updates, ensuring that everyone is on the same page. Whether for small projects or large-scale initiatives, TTR is designed to enhance productivity and foster a culture of accountability within teams.",
      videoUrl:
        "https://media.istockphoto.com/id/1226413184/video/4k-programming-and-coding.mp4?s=mp4-640x640-is&k=20&c=Uu7sn3mivjmxgroqhndD678IyPV33OYT2jcaWFCSJH4=",
    },
    {
      title: "Jungle",
      live: true,
      case: true,
      description:
        "Jungle is an immersive gaming platform that transports players into a vibrant world filled with adventure, challenges, and social interaction. With stunning graphics and engaging gameplay, Jungle offers a variety of game genres, catering to different interests and skill levels. Players can explore vast landscapes, complete quests, and connect with friends or other gamers from around the globe. The platform also features regular updates and events, ensuring that the gaming experience remains fresh and exciting, making it a favorite among gaming enthusiasts.",
      videoUrl:
        "https://media.istockphoto.com/id/1470824392/video/computer-code-scrolling.mp4?s=mp4-640x640-is&k=20&c=pOBdMCE7uwM-cRqd5oDHchx3EFVSzlzMQ8oyXg4uLsg=",
    },
    {
      title: "Silvr",
      live: true,
      case: true,
      description:
        "Silvr is a modern financial app that simplifies personal finance management, allowing users to track expenses, set budgets, and achieve their financial goals with ease. The app features intuitive tools for monitoring spending habits, creating savings plans, and generating financial reports that provide insights into users' financial health. With its secure platform and user-friendly design, Silvr empowers individuals to take control of their finances, make informed decisions, and work towards a more stable financial future.",
      videoUrl:
        "https://media.istockphoto.com/id/1971180836/video/social-network-videos-on-multiscreen-background-featuring-reels-viral-clips-ai-networking-and.mp4?s=mp4-640x640-is&k=20&c=z6TqstWm4pLIt5xA03qS5ljiaqC0WwJ7DLD2p7pkvX4=",
    },
    {
      title: "Remind",
      live: true,
      case: true,
      description:
        "Remind is an educational communication platform that connects teachers, students, and parents, facilitating effective communication and collaboration in the learning process. The platform allows educators to send announcements, share resources, and provide feedback in real-time, ensuring that everyone involved in a student's education is informed and engaged. With features such as group messaging and assignment tracking, Remind fosters a supportive learning environment that enhances student success and encourages parental involvement.",
      videoUrl:
        "https://media.istockphoto.com/id/1459585081/video/digital-abstract-network-grid-over-the-earth-artificial-intelligence-neural-network-growing.mp4?s=mp4-640x640-is&k=20&c=-vKDwYFF-onrZVZJR9hdA1V89xkq1pqG6qbKL0s9quo=",
    },
    {
      title: "Rainfall",
      live: true,
      case: true,
      description:
        "Rainfall is a weather tracking application that provides real-time updates and forecasts, helping users stay informed about changing weather conditions. With its intuitive interface and accurate data, Rainfall allows users to check current weather, receive alerts for severe conditions, and plan their activities accordingly. The app also features detailed forecasts, radar maps, and historical weather data, making it an essential tool for outdoor enthusiasts, travelers, and anyone who wants to stay ahead of the weather.",
      videoUrl:
        "https://media.istockphoto.com/id/1452822288/video/digital-network-of-seo-and-related-internet-keywords-fictitious-search-engine-optimization.mp4?s=mp4-640x640-is&k=20&c=DkTiG1KRloX4Zab1VnnIdF3UY1yBBqqye5XAebOakT4=",
    },
  ];

  const [pos, setPos] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered product

  const mover = (value) => {
    setPos(value * 23);
  };

  return (
    <div className="mt-50 relative">
      {productItems.map((item, index) => (
        <Product
          mover={mover}
          val={item}
          count={index}
          key={index}
          setHoveredIndex={setHoveredIndex} // Pass function to set hovered index
        />
      ))}

      {/* Videos for each product */}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[20rem] left-[44%] -translate-x-[50%]"
        >
          {productItems.map((item, index) => (
            <motion.div
              key={index}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }} // Fade in when hovered
              transition={{ duration: 0.5 }}
              className="w-full h-full absolute top-0 left-0" // Absolute positioning inside container
            >
              {/* Display video only for the hovered product */}
              {hoveredIndex === index && (
                <motion.video
                  src={item.videoUrl}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover absolute top-0 left-0 z-10 py-10"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
