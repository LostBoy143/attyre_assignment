import React, { useState } from "react";
import ImgContext from "./ImgContext";

const UserContextProvider = ({ children }) => {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState({
    skin: "#F2CDA0",
    hair: "#2B2322",
    eye: "#8B5A3C",
  });
  const [data, setData] = useState(null);

  return (
    <ImgContext.Provider
      value={{
        image,
        setImage,
        colors,
        setColors,
        data,
        setData,
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};

export default UserContextProvider;
