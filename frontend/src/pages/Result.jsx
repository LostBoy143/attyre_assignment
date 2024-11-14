import React, { useContext } from "react";
import { motion } from "framer-motion";
import ImgContext from "../context/ImgContext";

function Result() {
  const { data } = useContext(ImgContext);
  console.log(data);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="mt-[100px] px-[20px] md:px-[150px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        id="heading"
        className="flex flex-col gap-[20px]"
        variants={itemVariants}
      >
        <h1 className="text-2xl md:text-3xl font-bold">
          Your Personalized Palette
        </h1>
        <h2 className="text-[#F63D68] text-2xl">
          {data.palette_Name}
        </h2>
        <p>{data.palette_Description}</p>
        <h2 className="text-2xl font-semibold">
          Recommended Colors
        </h2>
      </motion.div>
      <motion.div
        id="pallete_container"
        className="grid grid-cols-2 gap-[20px] md:grid-cols-4 mt-[30px]"
        variants={containerVariants}
      >
        {data.recommended_colors.map(
          (item, idx) => (
            <motion.div
              key={idx}
              className="min-w-[128px] min-h-[322px] flex flex-col gap-[5px]"
              variants={itemVariants}
            >
              <div
                className="w-full h-[200px]"
                style={{
                  backgroundColor: item.hex_code,
                }}
              ></div>
              <div id="text">
                <h3 className="font-semibold">
                  {item.color_name}
                </h3>
                <p>{item.usage}</p>
                <p className="text-[#475467] mt-[5px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
      <motion.h2
        className="text-2xl mt-4 font-semibold"
        variants={itemVariants}
      >
        Colors to Avoid
      </motion.h2>
      <motion.div
        id="pallete_container"
        className="grid grid-cols-2 gap-[20px] md:grid-cols-4 mt-[30px]"
        variants={containerVariants}
      >
        {data.colors_to_avoid.map((item, idx) => (
          <motion.div
            key={idx}
            className="min-w-[128px] min-h-[322px] flex flex-col gap-[5px]"
            variants={itemVariants}
          >
            <div
              className="w-full h-[200px]"
              style={{
                backgroundColor: item.hex_code,
              }}
            ></div>
            <div id="text">
              <h3 className="font-semibold">
                {item.color_name}
              </h3>
              <p>{item.usage}</p>
              <p className="text-[#475467] mt-[5px]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Result;
