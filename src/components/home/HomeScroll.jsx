/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { homeData } from "../../data/homeData";
import { motion } from "framer-motion";

const HomeScroll = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentItem < homeData.length - 1) {
        setCurrentItem((prevItem) => (prevItem + 1) % homeData.length);
      } else {
        clearInterval(intervalId);
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [homeData]);

  return (
    <div>
      <motion.div
        key={currentItem}
        style={{ overflow: "hidden", width: "100%" }}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-gray-400 text-xl sm:text-3xl font-semibold mb-2">
          {homeData[currentItem]}
        </h1>
      </motion.div>
    </div>
  );
};

export default HomeScroll;
