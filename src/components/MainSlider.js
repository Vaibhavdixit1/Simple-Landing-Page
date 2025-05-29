"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../constants/data.json";
import SliderComponent from "./SliderComponent";

const MainSlider = () => {
  const [slider, setSlider] = useState(true);
  const model = slider ? data.passengers : data.commercial;

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-4">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h1
          className="text-xl md:text-5xl text-center leading-normal font-light mb-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }} // animation plays every time in view
        >
          Evolving the drive with{" "}
          <span className="font-semibold">360-degree </span>
          <br />
          comprehensive solutions
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="flex items-center flex-col w-full lg:w-[45%] mb-8 lg:mb-0">
            <div className="w-full sm:w-[80%]">
              <div
                className={`py-4 border-l-2 cursor-pointer pl-6 sm:pl-16 w-full ${
                  slider ? "border-white" : "border-gray-600 text-gray-600"
                }`}
                onClick={() => setSlider(true)}
              >
                <h2 className="text-2xl sm:text-[28px] my-2 sm:my-3">
                  Passenger vehicles
                </h2>
                <span className="inline-block max-w-[90%] font-light">
                  Revving up innovation from interior to exterior.
                </span>
              </div>
              <div
                className={`py-4 border-l-2 cursor-pointer pl-6 sm:pl-16 w-full ${
                  slider ? "border-gray-600 text-gray-600" : "border-white"
                }`}
                onClick={() => setSlider(false)}
              >
                <h2 className="text-2xl sm:text-[28px] my-2 sm:my-3">
                  Commercial vehicles
                </h2>
                <span className="inline-block max-w-[90%] font-light">
                  Advancing engineering for heavy-duty vehicles.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%] flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] mt-8 md:mt-0">
            <SliderComponent model={model} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
