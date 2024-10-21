import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculation = ()=>{
    try{
        if(input === ""){
            setOutput("Error");
            return;
        }
    
        if(input === "0/0"){
            setOutput("NaN");
            return;
        }
    
        if(input !== ""){
            let result = eval(input);
            
            if(result === Infinity){
                setOutput("Infinity");
                return;
            }
            setOutput(result);
            return;
        }
    }catch(err){
        setOutput("Error");
    }
  }

  const handleClear = () => {
    setInput("");
    setOutput("");
  };
  return (
    <div className="calci">
      <h1>React Calculator</h1>
      <input type="text" value={input} />
      <div className="result">{output}</div>
      <div className="btn">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleCalculation}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
