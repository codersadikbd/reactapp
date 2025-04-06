import React, { useState } from "react";
const App = () => {
  let [FormObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const OnInputChange = () => {
    setFormObj((prevObj) => ({
      ...prevObj,
      fName: "",
      lName: "",
      city: "",
      gender: "",
    }));
  };
  return (
    <div className="container">
      <form>
        <input
          onChange={(e) => {
            OnInputChange("fName", e.target.value);
          }}
          value={FormObj.fName}
          placeholder="First name"
        />
        <br />
        <input value={FormObj.lName} placeholder="Last name" />
        <br />
        <select value={FormObj.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
        </select>
        <br />
        <input
          checked={FormObj.gender === "Male"}
          type="radio"
          name="gender"
        />{" "}
        Male
        <input
          checked={FormObj.gender === "Female"}
          type="radio"
          name="gender"
        />{" "}
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
