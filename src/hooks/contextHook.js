import { useContext, useReducer, useState } from "react";
import StateContext from "../context/StateContext";

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useContextHook = () => useContext(StateContext);
