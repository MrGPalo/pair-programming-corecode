import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useItems } from '../hooks/useItems';

const Box = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 5px 0;
  p {
    margin: 0;
  }
`;

export const Item = ({ item: { id, item, price, quantity, web } }) => {
  const { delete_item } = useItems()
  const erase = () => {delete_item(id)}
  return (
    <Box>
      <p>
        <b>Item name:</b> {item} (id:{(id)})
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <p>
        <b>Quantity:</b> {quantity}
      </p>
      <p>
        <b>Web:</b> <a href={web}>{web}</a>
      </p>
      <button onClick={() => {
        console.log(`delete ${id}`)
        erase()
      }}>
        Delete this item
      </button>
    </Box>
  );
};

export const ItemsList = ({ onAddItem }) => {
  const { items, add_item } = useItems();
  return (
    <div>
      <button type="button" onClick={() => console.log('clear list')}>
        Clear List
      </button>
      <p>There are 0 items in the list</p>
      {/* Esta seria la funcion para pintar varios elementos de la lista */}
      {/* {items.map(e => { <Item key={e.id } item={onAddItem} />})} */} 
      <Item item={onAddItem} />
    </div>
  );
};
