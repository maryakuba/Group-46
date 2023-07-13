import React, { Fragment } from "react";
import { AppNavigator } from "./src/navigation";
import { BMIProvider } from "./src/services/context";

const App = () => {
  return (
    <Fragment>
      <BMIProvider>
        <AppNavigator />
      </BMIProvider>
    </Fragment>
  );
};

export default App;
