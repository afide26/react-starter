import React from "react";
import Counter from "./counter";

const Counters = ({
  onReset,
  onIncrement,
  onDelete,
  counters,
  onDecrement
}) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
