import React from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <div>
      <h2>ChildComponent 1</h2>
      <button
        value={"Option 1"}
        onClick={(eve) => setSelectedOption(eve.target.value)}
      >
        Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;
