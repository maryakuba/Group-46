import React, { ReactNode, createContext, useContext, useReducer } from "react";

import reducer from "./reducer";
import { initialState } from "./initialStates";

// Define the shape of the user context
type BMIContextType = {
  state: any;
  dispatch: any;
};

// Create the context with initial values
export const BMIContext = createContext<BMIContextType>({
  state: initialState,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

export const BMIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BMIContext.Provider value={{ state, dispatch }}>
      {children}
    </BMIContext.Provider>
  );
};
// Custom hook to use the user context
export const useBMI = (): any => {
  return useContext<BMIContextType>(BMIContext);
};
