import React, { useState } from "react";
const App = () => {
  return (
    <div className="container">
      <form>
        <input placeholder="First name" />
        <br />
        <input placeholder="Last name" />
        <br />
        <select>
          <option value="">Choose City</option>
          <option value="">Dhaka</option>
          <option value="">Chittagong</option>
        </select>
        <br />
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
