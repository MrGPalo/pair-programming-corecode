import React from 'react';
import { AddItemForm } from './forms/AddItemForm';
import { ItemsProvider } from '../hooks/useItems';

export const App = () => {
  return (
    <div>
      <h2>CORE Wishlist</h2>
      <ItemsProvider>
        <AddItemForm />
      </ItemsProvider>
    </div>
  );
};
