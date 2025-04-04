import { useRef } from "react";

const App = () => {
  let number = useRef(0);
  function change() {
    number.current++;
    console.log(number.current);
  }
  return (
    <div>
      <button onClick={change}> Hey just click me </button>
    </div>
  );
};

export default App;
