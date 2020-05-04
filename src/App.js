import React from "react";
import SignupForm from "./components/SignupForm";
import logo from "./assets/availity-logo.png";
import "./App.css";

// checker that validates the parentheses of a LISP code.
let isBalancedParenthesis = (str) => {
  return !str.split("").reduce((uptoPrevChar, thisChar) => {
    if (thisChar === "(" || thisChar === "{" || thisChar === "[") {
      return ++uptoPrevChar;
    } else if (thisChar === ")" || thisChar === "}" || thisChar === "]") {
      return --uptoPrevChar;
    }

    return uptoPrevChar;
  }, 0);
};
console.log(isBalancedParenthesis("(889.a89/(9209))"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SignupForm />
    </div>
  );
}

export default App;
