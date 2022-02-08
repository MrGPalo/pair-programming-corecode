import React from 'react';
import { AddItemForm } from './forms/AddItemForm';
import { ItemsProvider } from '../hooks/useItems';
import { ItemsList } from './ItemsList';

export const App = () => {
  return (
    <div>
      <h2>CORE Wishlist</h2>
      <ItemsProvider>
        <AddItemForm />
        <ItemsList />
      </ItemsProvider>
    </div>
  );
};