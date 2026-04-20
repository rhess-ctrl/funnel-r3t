import { create } from "zustand"
import { persist, createJSONStorage, devtools } from "zustand/middleware"
import { funnelDefs } from "./funnelDefs"

const useStore = create(
  devtools(
    persist(() => ({ clicks: 0, pick: "bada55", values: [] }), {
      name: "funnel-r3t::app-data",
      storage: createJSONStorage(() => localStorage),
    }),
    { name: "funnel-r3t" },
  ),
)

const refresh = () => {
  const clicks = useStore.getState().clicks + 1
  const values = funnelDefs.map(() => Math.floor(Math.random() * 100))
  useStore.setState({ clicks, values }, false, "refresh")
}

const reset = () => useStore.setState({ clicks: 0, values: [] }, false, "reset")

const setPick = (value) => useStore.setState({ pick: value }, false, "setPick")

const actions = { refresh, reset, setPick }

export { actions, useStore }
export default useStore
