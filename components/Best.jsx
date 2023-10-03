import React from "react";
import Image from "next/image";

const Best = () => {
  const backgroundStyles = {
    backgroundImage: `url(${"assets/best.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    zIndex: 1,
  };

  const overlayStyles = {
    backgroundColor: "rgba(10,27,55, 0.8)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const headingStyles = {
    wordSpacing: "5px",
    lineHeight: "45px",
  };

  return (
    <div className="text-white" style={backgroundStyles}>
      <div style={overlayStyles}></div>
      <div className="w-full justify-center relative">
        <div className="py-16 px-4 flex flex-col items-center justify-center">
          <h2
            className="text-3xl md:text-3xl font-bold text-center mb-4"
            style={headingStyles}
          >
            Download the India’s best <br /> Maternity website
          </h2>
          <p className="font-semibold mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image src="/assets/app.png" alt="app" width={480} height={85} />
        </div>
      </div>
    </div>
  );
};

export default Best;
