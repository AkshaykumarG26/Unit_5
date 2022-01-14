import { useEffect, useState } from "react";

export const Timer = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const id =  setInterval(() => {
      setCounter((p) => {
          if (p === 0){
              clearInterval(id)
              return 0
          }
          return p - 1
      });
    }, 1000);

    // this line is of unmounting phase this line is used for unmount if u dont use this below line then the intervl is still working in background
    return () => {
        clearInterval(id)
    }
  }, []);

  return <div>Count is: {counter}</div>;
};
