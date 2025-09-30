import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
    <div className="flex justify-center">
      <h3>Contador {counter}</h3>
      <br/>
      <button  className="w-30 h-12 bg-blue-500 text-white rounded-sm flex items-center justify-center" onClick={() => setCounter(counter + 1)}>
        Incrementar
      </button>
      </div>
    </>
  );
};

export default Counter;
