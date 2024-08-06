
import ReactDOM from 'react-dom/client';
import './App.css';
import React, { createContext, useState } from "react";
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));


export const Context = createContext({
  isAuthenticated: false,
});

console.log(process.env.REACT_APP_API_URL);

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);