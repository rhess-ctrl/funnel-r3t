import React from "react";
import { ColorPick } from "./ColorPick";
import { actions, useStore } from "../utils";
import { colorNames } from "../utils";

const Colors = () => {
  const { pick } = useStore();

  return (
    <div className="flex flex-wrap" role="radiogroup">
      {colorNames.map((key, indx) => (
        <ColorPick
          key={`pick-${indx}`}
          callback={actions.setPick}
          pick={pick}
          value={key}
        />
      ))}
    </div>
  );
};

export { Colors };
export default Colors;
