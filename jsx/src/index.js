// Import the React and ReactDOM libraries
import  React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonValue = { text :'Click Me'};
  const style = { backgroundColor: 'black', color: 'white' };
  return ( <div>
    <label className="label" htmlFor="name">Enter Name : </label>
    <input id="name" type="text" />
    <button style={style}>{buttonValue.text}</button>
    </div>
  );
}

// Take the react component and show it on screen
ReactDOM.render(
  <App />,
  document.getElementById("root")
)
