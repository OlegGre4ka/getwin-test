import axios from "axios";

export default axios.create({
    baseURL: 'https://api.prof.world/v2.0/profile/',
    timeout: 1000,
    headers: {'content-type': 'application/json'}
  });