import { getFormControlUnstyledUtilityClasses } from '@mui/base';
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Box = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 5px 0;
  p {
    margin: 0;
  }
`;

export const Item = ({ item: { id, item, price, quantity, web } }) => {
  console.log('Dentro del ItemList');
  return (
    <Box>
      <p>
        <b>Item name:</b> {item} (id:{(id = uuidv4())})
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
      <button onClick={() => console.log(`delete ${id}`)}>
        Delete this item
      </button>
    </Box>
  );
};

export const ItemsList = ({ onAddItem }) => {
  return (
    <div>
      <button type="button" onClick={() => console.log('clear list')}>
        Clear List
      </button>
      <p>There are 0 items in the list</p>
      <Item item={onAddItem} />
    </div>
  );
};
