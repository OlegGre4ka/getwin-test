import axios from "../axios";

export const postRegister = payload => axios.post("registration/ HTTP/1.1", payload);