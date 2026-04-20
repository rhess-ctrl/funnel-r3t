import React from "react"

const Masks = ({ bars }) => {
  return (
    <defs>
      {bars.map((item) => {
        return (
          <mask key={`mask-${item.name}`} id={item.maskId}>
            <polygon points={item.mask} fill="#ffffff" />
          </mask>
        )
      })}
    </defs>
  )
}

export { Masks }
export default Masks
