import React from "react";
import ReactDOM from "react-dom/client"
//React.createElement => Object => HTMLElement(render)

// JSX
/*JSX stands for JavaScript XML. It’s a syntax extension for JavaScript that lets developers write HTML-like code 
directly within JavaScript. Primarily used with React, JSX makes it easier to visualize the UI structure while allowing
you to embed dynamic data and expressions. Under the hood, the JSX code is transpiled (typically by Babel)
into standard JavaScript function calls, which then create the React elements that form the user interface. 
This approach simplifies component creation and enhances readability by closely aligning markup with the logic that drives it.*/

// JSX is not html in JS. JSX is html like syntax
// const jsxheading = <h1 id="heading">Namaste React Using JSX </h1>

//BABLE(a js compiler)
//take the jsx and convert to js

// JSX =>React.createElement => ReactElement-JS Object => HTMLELement(render)

// React Element
const heading = (
    <h1 className="head"> {/*Wrap with this () if u r writing jsx in multiple line*/}
        Namaste React using JSX 
    </h1>
)

// React Component 
// Two Types of component 
// 1. Class Based Component - OLD
// 2. Functional Component - NEW      => Just a normal JS function. If a function returning a react elements.It's become component

const Title = ()=>(
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX
    </h1>
);


const Headingcomposition = () => (
    <div id="container">
        <Title/> {/* Component Composition = to add one or more component under the component use this -->  </>*/}
        <h1 className="heading">Namaste React Functional Component</h1>
        {/* Inside this currly bracket we can write any JS code */}
        {heading}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomposition/>);