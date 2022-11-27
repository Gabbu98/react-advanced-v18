import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0); // useState triggers re render -> useEffect kicks in

  // runs after every render
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]); // [] -> will run on initial render only

  useEffect(() => {
    console.log("intial render only");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
