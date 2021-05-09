import axios from "axios";

const AddTheProperties = async () => {
  await axios
    .post("http://localhost:3000/api/v1/PropertyListing", {
      fields: {
        title: "string",
        city: "string",
        Type: "string",
        Bedrooms: "number",
        Bathrooms: "number",
        Price: "number",
        Email: "string",
      },
    })
    .then(
      (response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
};

export default AddTheProperties;
