import React, { useContext } from "react";
import ImgContext from "../context/ImgContext";

function Result() {
  const { data } = useContext(ImgContext);
  console.log(data);
  return (
    <div className="mt-[100px] px-[20px] md:px-[150px]">
      <div
        id="heading"
        className="flex flex-col gap-[20px]"
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
      </div>
      <div
        id="pallete_container"
        className="grid grid-cols-2 gap-[20px] md:grid-cols-4 mt-[30px]"
      >
        {data.recommended_colors.map(
          (item, idx) => {
            return (
              <div
                key={idx}
                className="min-w-[128px] min-h-[322px] flex flex-col gap-[5px]  "
              >
                <div
                  className={`w-full h-[200px] `}
                  style={{
                    backgroundColor:
                      item.hex_code,
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
              </div>
            );
          }
        )}
      </div>
      <h2 className="text-2xl mt-4 font-semibold">
        Colors to Avoid
      </h2>
      <div
        id="pallete_container"
        className="grid grid-cols-2 gap-[20px] md:grid-cols-4 mt-[30px]"
      >
        {data.colors_to_avoid.map((item, idx) => {
          return (
            <div
              key={idx}
              className="min-w-[128px] min-h-[322px] flex flex-col gap-[5px]  "
            >
              <div
                className={`w-full h-[200px] `}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
