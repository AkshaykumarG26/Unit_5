import { useEffect, useState } from "react";
import { Dummy } from "./Dummy";

export const From = () => {
  // useEffect can not be async .... effects call backs are syncronous .... u can write async inside useeffect

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return <Dummy />;
  }, [counter]);

  return (
    <div>
      <input type="text" name="" id="" />
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};
