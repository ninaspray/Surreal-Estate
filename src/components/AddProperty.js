import React, { useState } from "react";

// Styles
import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
  },
};

const AddProperties = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="Add-Properties">
      Add Properties Page
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddProperties;
