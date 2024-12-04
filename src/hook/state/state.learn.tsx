import { useState } from "react";

export function ButtonAction() {
  let [state, setState] = useState(0);

  function innerChange() {
    setState(state + 1);
  }

  let inner = () => {
    setState(state - 1);
  };
  return (
    <>
      <button onClick={innerChange} className="button">
        增加:{state}
      </button>

      <button onClick={inner} className="button">
        减少:{state}
      </button>
    </>
  );
}

export default function UseAllState() {
  return (
    <>
      <ButtonAction />
    </>
  );
}
