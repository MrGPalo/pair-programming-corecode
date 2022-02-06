import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ItemsList } from "../ItemsList"

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
  const { register, handleSubmit, formState, reset } = useForm();

  const submit = handleSubmit(async (data) => {
    console.log("SUBMITING FORM", data);
    reset()
  });

  return (
    <form onSubmit={handleSubmit(submit)}>
      <GridForm>
        <div>
          <p>Wishlist Item Name</p>
          <input
            {...register("item", { required: "Indica el nombre del artículo" })} 
          />
          <ErrorMessage state={formState} field="item" />
        </div>
        <div>
          <p>Price</p>
          <input
            {...register("price", { required: "Indica el precio del artículo" })}
          />
          <ErrorMessage state={formState} field="price" />
        </div>
        <div>
          <p>Quantity</p>
          <input
            {...register("quantity", { required: "Indica la cantidad del artículo" })}
          />
          <ErrorMessage state={formState} field="quantity" />
        </div>
        <div>
          <p>Sitio web</p>
          <input
            {...register("web", { required: "Indica la web del artículo" })}
          />
          <ErrorMessage state={formState} field="web" />
        </div>
      </GridForm>
      <div style={{ marginTop: 20 }}>
        <button onClick={submit}>Save data</button>
      </div>
      <div>
        <ItemsList />
      </div>
    </form>
  );
};
