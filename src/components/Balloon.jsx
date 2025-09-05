import { motion } from "framer-motion";
export const Balloon = (props) => {
  return (
    <div
      className={"w-50 h-60 rounded-[50%] relative m-4 animate-balloonMotion "}
      style={{ backgroundColor: props.color }}
    >
      <div className="glaze h-20 w-8 rounded-[50%] bg-white opacity-10 absolute top-2 left-10 rotate-50 "></div>
      <div className="glaze h-10 w-5 rounded-[50%] bg-white opacity-10 absolute top-22 left-4 rotate-  "></div>
      <p
        className={"absolute top-[233] left-23 "}
        style={{ color: props.color }}
      >
        ▲
      </p>
      <div
        className={"string absolute w-1 h-50 left-24.5 top-62.5"}
        style={{ backgroundColor: props.color }}
      ></div>
    </div>
  );
};
