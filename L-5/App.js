import React from "react";
import ReactDOM from "react-dom/client";
import  Body  from "./components/Body.js";
import  Header from "./components/Header.js";

/*
Two types of Export/Import

- Default Export/Import
 
 export default Component;
 import Component from "path";


- Named Export/Import
 
 export const Component
 import {Component} from "path";
*/

const AppLayout = () => {
  return (
    <div className="app">
<Header />
      <Body />
    </div>
  );
};

// Render the AppLayout into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
