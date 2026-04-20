import React from "react"
import { useStore } from "../utils"
import { TwLabel } from "./TwLabel"

const Values = () => {
  const { clicks, pick, values } = useStore()

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex">
          <span className="mr-10px font-bold">color:</span>
          <span className="text-clrs-slate4 italic">{pick}</span>
        </div>
        <div className="mt-5px flex">
          <span className="mr-10px font-bold">sample:</span>
          <span className="text-clrs-slate4 italic">{`${
            clicks > 0 ? values : "..."
          }`}</span>
        </div>
      </div>
      <TwLabel />
    </div>
  )
}

export { Values }
export default Values
