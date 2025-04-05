import React, { useState } from "react";
const App = () => {
  let [FormObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  return (
    <div className="container">
      <form>
        <input placeholder="First name" />
        <br />
        <input placeholder="Last name" />
        <br />
        <select></select>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
