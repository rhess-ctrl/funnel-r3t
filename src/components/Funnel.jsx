import React from "react";
import { Bar } from "./Bar";
import { Masks } from "./Masks";
import { Trapezoid } from "./Trapezoid";
import { funnelDefs, useStore } from "../utils";

const createFunnel = ({ id, height, width, x, y, drop }) => {
  const obj = {
    name: id,
    height,
    width,
    x,
    y,
    maskId: `mask-${id}`,
    maskUri: `url('#mask-${id}')`,
    mask: `0.5,0.5,0.5,${height - 0.5},${width - 0.5},${height - drop - 0.5},${
      width - 0.5
    },${drop + 0.5}`,
    matrix: `matrix(1,0,0,1,${x},${y})`,
    points: `0,0,0,${height},${width},${height - drop},${width},${drop}`,
  };
  return obj;
};

const generateBars = () => {
  return funnelDefs.map((item) => {
    return createFunnel(item);
  });
};

const Funnel = () => {
  const { pick, values } = useStore();
  const bars = generateBars();
  const stroke = "currentColor";

  return (
    <div className="funnel">
      <svg viewBox="0 0 600 420">
        <desc>Created with Snap</desc>
        <Masks bars={bars} />
        {bars.map((item, index) => {
          return (
            <g key={`group-${item.name}`} transform={item.matrix}>
              <Trapezoid
                key={`trapezoid-${item.name}`}
                item={item}
                stroke={stroke}
              />
              <Bar
                key={`bar-${item.name}`}
                index={index}
                item={item}
                stroke={stroke}
                pick={pick}
                values={values}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export { Funnel };
export default Funnel;
