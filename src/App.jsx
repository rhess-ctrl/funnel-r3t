import React from "react";
import { Colors, Controls, Eswat2, Funnel, Values } from "./components";

const App = () => {
  return (
    <main className="ds1-main">
      <Eswat2 />
      <Funnel />
      <Controls />
      <Colors />
      <hr className="ml-0 mr-0" />
      <Values />
    </main>
  );
};

export default App;
