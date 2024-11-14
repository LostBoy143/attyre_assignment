import React, {
  useContext,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  ToastContainer,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImgContext from "../context/ImgContext";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { setImage } = useContext(ImgContext);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmitImg = () => {
    if (file) {
      navigate("/choose");
    } else {
      toast.warn("You have to upload an image");
    }
  };

  const handleImage = (file) => {
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setFile(file);
      setImage(imgURL); // Set the image URL in the context
      toast.success(
        "Image uploaded successfully!"
      );
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 flex flex-col sm:flex-row md:items-center md:justify-between">
        {/* Text Section */}
        <motion.div
          className="text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[42px] leading-tight md:leading-loose md:text-5xl font-bold text-gray-900 mb-4 pt-[100px] sm:pt-[100px]">
            Personal Color Analysis
          </h1>
          <p className="text-gray-600 mb-4">
            Our{" "}
            <span className="text-[#F63D68] font-semibold">
              AI-powered color analysis tool
            </span>{" "}
            helps you discover the colors that
            enhance your natural beauty, match
            your unique features, and fit your
            personal style.
          </p>
          <p className="text-gray-600 mb-8">
            Upload your photo to get instant
            recommendations for your perfect color
            palette.
          </p>

          {/* Upload Section with Drag and Drop */}
          <div
            className="border border-gray-200 rounded-lg px-6 py-2 mb-6 bg-white flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() =>
              document
                .getElementById("fileInput")
                .click()
            }
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {/* Icon */}
            <div className="bg-[#F8F7F4] p-2 rounded-full text-gray-400">
              <img
                src="./src/assets/send_icon.png"
                alt=""
              />
            </div>

            <label className="text-[#F63D68] text-center">
              Click or drag and drop to upload
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </label>

            <p className="text-gray-500 text-center text-sm">
              SVG, PNG, JPG, or GIF
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleSubmitImg}
            className="bg-[#F63D68] text-white w-full py-3 px-6 rounded-lg font-semibold"
          >
            Create your Palette
          </button>
        </motion.div>

        {/* Image Section (for Desktop) */}
        <motion.div
          className="md:w-1/2 h-full md:pl-8 pt-8 md:pt-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <img
            src="./src/assets/hero-img.png"
            alt="Color palettes"
            className="shadow-lg"
          />
        </motion.div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default HeroSection;
