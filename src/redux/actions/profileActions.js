export const SET_EMAIL = "SET_EMAIL";
export const SET_PROFILE = "SET_PROFILE";
export const SET_NAME = "SET_NAME";
export const SET_LNAME = "SET_LNAME";
export const SET_SNAME = "SET_SNAME";
export const SET_BIRDTH_DATE = "SET_BIRDTH_DATE";
export const SET_PHONE = "SET_PHONE";
export const SET_GENDER_ID = "SET_GENDER_ID";

export const setEmailAction = (payload) => ({ type: SET_EMAIL, payload });

export const setProfileAction = (payload) => ({ type: SET_PROFILE, payload });

export const setName = (payload) => ({ type: SET_NAME, payload });
export const setLName = (payload) => ({ type: SET_LNAME, payload });
export const setSName = (payload) => ({ type: SET_SNAME, payload });

export const setGenderId = (payload) => ({ type: SET_GENDER_ID, payload });

export const setBirthDate = (payload) => ({ type: SET_BIRDTH_DATE, payload });

export const setPhone = (payload) => ({ type: SET_PHONE, payload });


