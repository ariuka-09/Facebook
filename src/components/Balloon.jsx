import { motion } from "framer-motion";
export const Balloon = ({ color, nums, top, left }) => {
  return (
    <div
      className={"absolute"}
      style={{
        left: left,
        top: top,
      }}
    >
      <div
        className={
          "w-50 h-60 rounded-[50%] relative m-4 animate-balloonMotion flex justify-center items-center"
        }
        style={{
          backgroundColor: color,
          animation: "balloonMotion 3s infinite",
        }}
      >
        <div className="bg-white/30 text-black p-5 rounded-[50%]">{nums}</div>
        <div className="glaze h-20 w-8 rounded-[50%] bg-white opacity-10 absolute top-2 left-10 rotate-50 "></div>
        <div className="glaze h-10 w-5 rounded-[50%] bg-white opacity-10 absolute top-22 left-4 rotate-  "></div>
        <p className={"absolute top-[229] left-23 "} style={{ color: color }}>
          ▲
        </p>
        <div
          className={"string absolute w-1 h-50 left-24.5 top-60.5"}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};
