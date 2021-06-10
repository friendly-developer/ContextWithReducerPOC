import { ADD_ITEM } from "../constants/ItemsConstants";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const items = state.items;
      const newItem = action.payload;
      items.push(newItem);
      return { ...state, items };
    }
    case "EDIT_ITEMS": {
      console.log(state);
      const items = state.items;
      const newItem = action.payload;
      items.push(newItem);
      return { ...state, items };
    }
    case "DELETE_ITEMS": {
      console.log(state);
      const items = state.items;
      const newItem = action.payload;
      items.push(newItem);
      return { ...state, items };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
