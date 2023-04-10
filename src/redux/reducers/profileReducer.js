import { SET_NAME, SET_LNAME, SET_SNAME, SET_PHONE, SET_EMAIL, SET_BIRDTH_DATE, SET_GENDER_ID, SET_PROFILE } from "../actions/profileActions";

const defaultState = {
    sname: "",
    name: "",
    lname: "",
    birth_date: "",
    gender_id: undefined,
    phone: "",
    email: ""
}


const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SNAME:
            return { ...state, sname: action.payload };
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_LNAME:
            return { ...state, lname: action.payload };
        case SET_BIRDTH_DATE:
            return { ...state, birth_date: action.payload };
        case SET_GENDER_ID:
            return { ...state, gender_id: action.payload };
        case SET_PHONE:
            return { ...state, phone: action.payload };
        case SET_EMAIL:
            return { ...state, email: action.payload }
        case SET_PROFILE:
            return {
                ...state, sname: action.payload.sname, name: action.payload.name, lname: action.payload.lnamem,
                birth_date: action.payload.birth_date, gender_id: action.payload.gender_id, phone: action.payload.phone,
                email: action.payload.email
            }
        default:
            return state
    }
}

export default profileReducer