import axios from "axios";

const connectApi = {
  doLogin: (data) => {
    return axios.post("http://localhost:4000/user/login", data);
  },

  saveForm: (data) => {
    console.log("data", data);
  },
};

export default connectApi;
