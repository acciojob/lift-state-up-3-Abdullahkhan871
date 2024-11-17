import React from "react";

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <div>
      <h2>ChildComponent 2</h2>
      <button
        value={"Option 2"}
        onClick={(eve) => setSelectedOption(eve.target.value)}
      >
        Option 2
      </button>
    </div>
  );
};

export default ChildComponent2;
