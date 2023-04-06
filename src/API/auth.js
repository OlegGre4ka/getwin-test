import axios from "../axios";

export const postRegister = payload => axios.post("registration/ HTTP/1.1", payload);

export const postCreateProfile = payload => axios.post("profileCreate/", payload,
    { headers: { userToken: localStorage.getItem("user_token") } })