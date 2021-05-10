import axios from "axios";
import React, { useState } from "react";
import Alert from "./Alert";

// Styles
import "../styles/AddProperty.css";

const AddProperties = () => {
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      Price: "",
      city: "",
      Email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = async (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    await axios
      .post("http://localhost:3000/api/v1/PropertyListing", fields)
      .then(() => {
        setAlert({
          message: "Property added",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
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
          Title of Property
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
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
              value={fields.bedrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
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
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5+">5 +</option>
            </select>
          </label>
        </div>
        <label htmlFor="Price">
          Price
          <input
            id="Price"
            name="Price"
            value={fields.Price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="Email">
          Contact Email
          <input
            id="Email"
            name="Email"
            value={fields.Email}
            onChange={handleFieldChange}
          />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
    </div>
  );
};

export default AddProperties;
