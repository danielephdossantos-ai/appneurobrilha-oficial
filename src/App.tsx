import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { modularRouter } from './routes/modular-router';

function App() {
  return (
    <RouterProvider router={modularRouter} />
  );
}

export default App;
