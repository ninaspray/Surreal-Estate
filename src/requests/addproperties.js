import axios from "axios";

const getTheProperties = async () => {
  const response = axios.get("http://localhost:3001/add-property");
  // eslint-disable-next-line no-console
  console.log(response.body);
  return response;
};

export default getTheProperties;
