import React from "react";
import { animate } from "animejs";
import { namedColors } from "../utils";

class Bar extends React.Component {
  rectRef = React.createRef();

  lastColor = "#bada55";
  lastValue = 0;
  tween1 = undefined;
  tween2 = undefined;

  animate() {
    const { index, item, pick, values } = this.props;
    const color = namedColors[pick];
    const value = values[index] || 0;

    if (color !== this.lastColor) {
      this.lastColor = color;
      if (this.tween1) this.tween1.pause();
      // NOTE: animate fill color directly on the DOM element
      this.tween1 = animate(this.rectRef.current, {
        fill: color,
        duration: 800,
        ease: "inOutCubic",
      });
    }

    if (value !== this.lastValue) {
      this.lastValue = value;
      if (this.tween2) this.tween2.pause();
      // NOTE: values are 0-100 (percentage)
      this.tween2 = animate(this.rectRef.current, {
        y: item.height * (1 - value / 100),
        duration: 1000,
        ease: "inOutCubic",
      });
    }
  }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate() {
    this.animate();
  }

  render() {
    const { item, stroke } = this.props;
    return (
      <rect
        ref={this.rectRef}
        x="0"
        y={item.height}
        width={item.width}
        height={item.height}
        fill="#bada55"
        stroke={stroke}
        mask={item.maskUri}
      />
    );
  }
}

export { Bar };
export default Bar;
