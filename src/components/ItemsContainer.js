import React, { useReducer } from "react";
import ExampComp from "./ExampComp";
import todoReducer from "../reducer/todoReducer";
import { StateProvider } from "../hooks/contextHook";

const initialState = {
  items: [{ id: 0, text: "Show First Item" }],
  totalItems: 0
};

const ItemsContainer = () => {
  return (
    <div>
      <StateProvider reducer={todoReducer} initialState={initialState}>
        <ExampComp />
      </StateProvider>
    </div>
  );
};

export default ItemsContainer;
