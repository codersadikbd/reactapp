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
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <input
          onChange={(e) => {
            OnInputChange("fName", e.target.value);
          }}
          value={FormObj.fName}
          placeholder="First name"
        />
        <br />
        <input
          onChange={(e) => {
            OnInputChange("lName", e.target.value);
          }}
          value={FormObj.lName}
          placeholder="Last name"
        />
        <br />
        <select
          value={FormObj.city}
          onChange={(e) => OnInputChange("city", e.target.value)}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
        </select>
        <br />
        <input
          checked={FormObj.gender === "Male"}
          type="radio"
          name="gender"
          onChange={() => OnInputChange("gender", "Male")}
        />{" "}
        Male
        <input
          checked={FormObj.gender === "Female"}
          type="radio"
          name="gender"
          onChange={() => OnInputChange("gender", "Female")}
        />{" "}
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
