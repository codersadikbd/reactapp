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
        <select>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
        </select>
        <br />
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <br />
      </form>
    </div>
  );
};

export default App;
