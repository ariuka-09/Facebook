import { Balloon } from "@/components/Balloon";
export default function Home() {
  const balloons = [
    { color: "Red" },
    { color: "Blue" },
    { color: "Green" },
    { color: "Yellow" },
    { color: "Orange" },

    // { color: "Purple" },
    // { color: "Pink" },
    // { color: "Brown" },
    // { color: "Black" },
    // { color: "White" },
  ];
  return (
    <div className="flex">
      {balloons.map((balloon, index) => {
        return (
          <Balloon
            top={Math.random() * 400}
            left={Math.random() * 400}
            nums={index + 1}
            color={balloon.color}
            key={index + Math.random}
          ></Balloon>
        );
      })}
    </div>
  );
}
