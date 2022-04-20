import axios from "axios";
import { REST_URL_SERVER } from "../constants/constants";

const httpMainService = {

  getBooks: async () => {
  const { data } = await axios.get('/catalog');
   return data 
  }
};

export default httpMainService