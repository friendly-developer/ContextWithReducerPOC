import React, { useState } from "react";
import { useContextHook } from "../hooks/contextHook";
import { ADD_ITEM } from "../constants/ItemsConstants";

const Items = () => {
  const [newItem, setNewItem] = useState("");
  const [state, dispatch] = useContextHook();

  const onAddHandler = (e) => {
    dispatch({
      type: ADD_ITEM,
      payload: { id: state.items.length, text: newItem }
    });
    setNewItem("");
  };

  return (
    <div>
      All Items:
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            <span style={{ marginRight: "15px" }}>{item.text}</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
      <label>New Item:</label>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={onAddHandler}>Add Item</button>
    </div>
  );
};

export default Items;
