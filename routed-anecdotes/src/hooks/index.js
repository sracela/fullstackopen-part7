import { useState, useRef } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
      console.log("event", event.target);
      event.preventDefault();
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    type,
    value,
    reset,
    onChange
  };
};

// // modules can have several named exports
// export const useAnotherHook = () => {
//   // ...
// }
