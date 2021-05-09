import axios from "axios";
import initialState from "../components/AddProperty";

axios.post("localhost:3000/api/v1/PropertyListing", { initialState }).then(
  (response) => {
    // eslint-disable-next-line no-console
    console.log(response.data);
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  }
);
