import React, { useEffect, useState } from "react";

const App = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("dummyjson.com/products").then((res) =>
      res.json().then((json) => setData(json))
    );
  }, []);
  return <div className="container">{JSON.stringify(data)}</div>;
};

export default App;
