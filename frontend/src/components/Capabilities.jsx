import React from "react";
import { motion } from "framer-motion";

const ColorAnalysisTool = () => {
  const features = [
    {
      title: "Customized for Your Natural Beauty",
      description:
        "Tailors recommendations based on your unique skin tone, eye color, and hair color to create a harmonious look.",
      icon: "./src/assets/icon1.png",
    },
    {
      title: "Instantly Curated Palette",
      description:
        "Quickly get a personalized palette with 25 colors to wear and 10 to avoid, complete with names, hex codes, and reasons for easy styling.",
      icon: "./src/assets/icon2.png",
    },
    {
      title: "Flexible to Your Style Preferences",
      description:
        "Choose from options like bold, neutral, minimalist, or vibrant colors, so your palette truly reflects your personal style.",
      icon: "./src/assets/icon3.png",
    },
    {
      title: "Enhances Shopping Confidence",
      description:
        "Know exactly which colors to look for when shopping, making it easier to find pieces you’ll love.",
      icon: "./src/assets/icon4.png",
    },
    {
      title: "Built on Color Science",
      description:
        "Utilizes principles of color theory to ensure each color complements your natural tones and undertones.",
      icon: "./src/assets/icon5.png",
    },
    {
      title: "Save Time and Eliminate Guesswork",
      description:
        "Get instant recommendations that are tailored for you, making shopping easier than ever.",
      icon: "./src/assets/icon6.png",
    },
  ];

  // Animation settings for elements appearing on scroll
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-pink-500 font-semibold text-lg mb-4">
        Our Capabilities
      </h2>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Why Use Our Color Analysis Tool?
      </h1>
      <p className="text-gray-600 mb-12">
        Your personal color palette is more than
        just a range of shades; it’s a path to
        feeling confident, radiant, and truly
        yourself. Our advanced color analysis tool
        reveals colors that harmonize with your
        unique skin tone, eye color, and hair
        color, making it easier to choose tones
        that enhance your natural beauty.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {/* Image placeholder for mobile version */}
            <div className="flex justify-center mb-4">
              <div className="w-16   h-16 bg-[#FFE4E8] rounded-full flex items-center justify-center">
                <div className="w-12  h-12 bg-pink-200 rounded-full flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className=" bg-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ColorAnalysisTool;
