import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import "./index.css";

// Create the context
export const MyContext = createContext();

// Dummy data for context
const executives = [
  "hossainfarshid@gmail.com",
  "supratim.mukherjee2018@gmail.com",
];
const adminemails = [
  "hossainfarshid@gmail.com",
  "supratim.mukherjee2018@gmail.com",
  "arijit.01paul@gmail.com",
];

// Lazy load the App component
const App = React.lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContext.Provider value={{ adminemails, executives }}>
    <Suspense>
      <App />
    </Suspense>
  </MyContext.Provider>
);
