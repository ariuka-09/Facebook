import { Balloon } from "@/components/Balloon";
export default function Home() {
  const balloons = [
    { ungu: "Red" },
    { ungu: "Blue" },
    { ungu: "Green" },
    { ungu: "Yellow" },
    { ungu: "Orange" },
    { ungu: "Purple" },
    { ungu: "Pink" },
    { ungu: "Brown" },
    { ungu: "Black" },
    { ungu: "White" },
  ];
  return (
    <div className="flex flex-wrap wrap">
      {balloons.map((balloon) => {
        return <Balloon color={balloon.ungu}></Balloon>;
      })}
    </div>
  );
}
