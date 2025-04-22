import React from "react";
import { counterItems } from "../assets/constants";
import { div } from "three/tsl";
import CountUp from "react-countup";
type Props = {};

const AnimatedCounter = (props: Props) => {
  return (
    <section id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((c, i) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={c.label}
              className="counter-number text-white-50 text-5xl font-bold mb-2"
            >
              {/* 0 {c.suffix} */}
              <CountUp suffix={c.suffix} end={c.value} />
            </div>
            <div className="text-white-50 text-lg">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;
