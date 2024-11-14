import React, {
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ImgContext from "../context/ImgContext";
import { useNavigate } from "react-router-dom";

const ColorPickerComponent = () => {
  const { colors, setColors } =
    useContext(ImgContext);
  const { image } = useContext(ImgContext);
  const { data, setData } =
    useContext(ImgContext);
  const handleColorChange = (type, color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [type]: color,
    }));
  };
  const navigate = useNavigate();
  const generatePallete = async () => {
    try {
      const response = await axios.post(
        "https://run.mocky.io/v3/bca419b3-a10c-4ba5-900e-e6a6002965c5",

        {
          skin_color: colors.skin,
          hair_color: colors.hair,
          eye_color: colors.eye,
        }
      );
      setData(response.data);
      if (response.status === 200) {
        navigate("/result");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="bg-[#F8F7F4] w-full min-h-screen flex md:px-[250px] px-[20px] py-8">
      <div className="container mx-auto flex flex-col items-center md:items-start gap-[30px] md:gap-[50px] py-[50px] md:py-[80px]">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-center md:text-left mb-6 md:mb-0"
        >
          <h2 className="text-left text-4xl font-bold text-[#0C111D] mb-4">
            Select Your Colors
          </h2>
          <p className="text-gray-600 text-left">
            Use the color picker tool to identify
            your hair, skin, and eye colors. For
            hair and skin, choose the primary
            tones without focusing on highlights
            or shadows. For eyes, select the most
            prominent color, typically found in
            the center of the iris.
          </p>
        </motion.div>

        {/* Image and Color Picker Section */}
        <div className="flex flex-col items-center md:min-w-[770px] md:h-[560px]">
          {/* Image with animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex gap-[20px] md:gap-[60px]"
          >
            <img
              src={image}
              alt="User"
              className="w-[266px] h-[322px] md:w-[770px] md:h-[500px] object-cover aspect-auto mb-4"
            />

            {/* Color Pickers with smooth transition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              {["skin", "hair", "eye"].map(
                (type, index) => (
                  <motion.div
                    key={type}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center"
                  >
                    <motion.input
                      type="color"
                      value={colors[type]}
                      onChange={(e) =>
                        handleColorChange(
                          type,
                          e.target.value
                        )
                      }
                      className="w-10 h-10 rounded-full appearance-none p-0 cursor-pointer"
                      style={{
                        backgroundColor:
                          colors[type],
                        border: "none",
                      }}
                      aria-label={`${
                        type
                          .charAt(0)
                          .toUpperCase() +
                        type.slice(1)
                      } Color Picker`}
                    />
                    <span className="text-gray-700 text-sm capitalize">
                      {type}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Generate Palette Button with animation */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="mt-6 bg-[#F63D68] text-white py-3 px-6 rounded-lg font-semibold w-full md:w-1/2"
            onClick={generatePallete}
          >
            Generate Palette
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerComponent;
