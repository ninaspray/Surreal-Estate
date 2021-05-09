import React, { useState } from "react";
import getTheProperties from "../requests/addproperties";

// Styles
import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
    Type: "",
    Bedrooms: "",
    Bathrooms: "",
    Price: "",
    Email: "",
  },
};

const AddProperties = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(getTheProperties);
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
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
        <button type="submit">Add</button>
      </form>
      <div>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Leeds">Leeds</option>
            <option value="York">York</option>
            <option value="Manchester">Manchester</option>
            <option value="Newcastle">Newcastle</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="Type">
          Type Of Property
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End-of-Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="Bedrooms">
          No. of bedrooms
          <select
            id="bedrooms"
            name="bedrooms"
            value={fields.Bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">3</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="5+">5 +</option>
            <option value="Studio">Studio</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="Bathrooms">
          No. of Bathrooms
          <select
            id="Bathrooms"
            name="Bathrooms"
            value={fields.Bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">3</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="5+">5 +</option>
          </select>
        </label>
      </div>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="Price">
          Price
          <input
            id="Price"
            name="Price"
            value={fields.Price}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="Email">
          Contact Email
          <input
            id="Email"
            name="Email"
            value={fields.Email}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperties;
