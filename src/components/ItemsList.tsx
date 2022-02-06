import React from "react";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 5px 0;
  p {
    margin: 0;
  }
`;

export const Item = ({ item: { id, item, price, quantity, web } }) => {
  return (
    <Box>
      <p>
        <b>Item name:</b> {item} (id:{id})
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
      <button onClick={() => console.log(`delete ${id}`)}>Delete this item</button>
    </Box>
  );
};

export const ItemsList = (items) => {
  console.log(items)
  return (
    <div>
      <button type="button" onClick={()=> console.log('clear list')}>Clear List</button>
      <p>There are 0 items in the list</p>
      <p>{Item}</p>
      {/* <Item  /> */}
    </div>
  );
};
