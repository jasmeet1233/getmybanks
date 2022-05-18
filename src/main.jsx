import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";
import { FilterProvider } from './context/context';
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
