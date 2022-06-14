import React, { useState, useMemo } from "react";

const Counter = () => {
  const [count1, setCountOne] = useState(0);
  const [count2, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(count1 + 1);
  };
  const incrementTwo = () => {
    setCountTwo(count2 + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <>
      <div>
        <button onClick={incrementOne}>Counter One:{count1} </button>
        <span>{isEven ? "Even" : "Odd"}</span>
        <br></br>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two:{count2} </button>
      </div>
    </>
  );
};

export default Counter;
