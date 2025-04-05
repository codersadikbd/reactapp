import { useRef } from "react";

const App = () => {
  let APIData = useRef(null);
  let MyPTag = useRef();
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    APIData.current = await response.json();
  };
  const showData = () => {
    MyPTag.current.innerText = JSON.stringify(APIData.current);
  };
  return (
    <div>
      <p ref={MyPTag}></p>
      <button onClick={fetchData}>Call API </button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};
export default App;
