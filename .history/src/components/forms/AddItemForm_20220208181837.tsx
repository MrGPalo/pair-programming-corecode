import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { ItemsList } from '../ItemsList';
import { validate_url } from '../../lib/validate_url';
import { useItems } from '../../hooks/useItems';

const GridForm = styled.div`
  display: flex;
  & > div {
    padding: 0 5px;
    p {
      margin: 0 0 5px 0;
    }
  }
`;

const ErrorMessageText = styled.p`
  margin: 0;
  color: red;
`;

const ErrorMessage = ({ field, state }) => {
  if (state.errors[field]) {
    return <ErrorMessageText>{state.errors[field].message}</ErrorMessageText>;
  } else {
    return <></>;
  }
};

export const AddItemForm = () => {
  const { register, handleSubmit, formState, reset, getValues } = useForm();

  const submit = handleSubmit(async (data) => {
    console.log('SUBMITING FORM', data);
    //reset()
  });
  console.log('Hola');
  const { items, add_item } = useItems();
  return (
    <form onSubmit={submit}>
      <GridForm>
        <div>
          <p>Wishlist Item Name</p>
          <input
            type="text"
            {...register('item', { required: 'Indica el nombre del artículo' })}
          />
          <ErrorMessage state={formState} field="item" />
        </div>
        <div>
          <p>Price</p>
          <input
            type="number"
            {...register('price', {
              required: 'Indica el precio del artículo',
            })}
          />
          <ErrorMessage state={formState} field="price" />
        </div>
        <div>
          <p>Quantity</p>
          <input
            type="number"
            {...register('quantity', {
              required: 'Indica la cantidad del artículo',
            })}
          />
          <ErrorMessage state={formState} field="quantity" />
        </div>
        <div>
          <p>Sitio web</p>
          <input
            type="url"
            {...register('web', { required: 'Indica la web del artículo' })}
          />
          <ErrorMessage state={formState} field="web" />
        </div>
      </GridForm>
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => {
            const values = getValues();
            validate_url(values.web);
            add_item(items);
          }}
        >
          Save data
        </button>
      </div>
    </form>
  );
};
