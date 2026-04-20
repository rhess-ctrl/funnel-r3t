import React from "react"

const Trapezoid = ({ item, stroke }) => {
  return <polygon points={item.points} fill="#ffffff" stroke={stroke} />
}

export { Trapezoid }
export default Trapezoid
