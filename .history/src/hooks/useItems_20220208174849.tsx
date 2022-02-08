import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'; // IMPORTANTE

const ItemsContext = React.createContext();

export const useItems = () => {
  const { items, addItem } = useContext(ItemsContext);
  // //  const hasItem = (itm) => {
  // //   items.filter((e) => e.item === itm).length > 0;
  // // };
  const add_item = (item) => {
    addItem([...items, item]);
  };
  const clear = () => {
    items = [];
  };
  const delete_item = (id: string) => {};
  return {
    items,
    add_item,
    clear,
    delete_item,
  };
};

export const ItemsProvider: React.FC<{ children: React.Node }> = ({
  children,
}) => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    console.log('Adding item', item);
    setItems([...items, item]);
  };

  return (
    <ItemsContext.Provider value={{ items, addItem }}>
      {children}
    </ItemsContext.Provider>
  );
};
