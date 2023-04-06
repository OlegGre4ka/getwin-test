import { SET_PROFILE } from "./../actions/emailAction";

const defaultState = {
    sname: "",
    name: "",
    lname: "",
    birth_date: "",
    gender_id: 0,
    phone: "",
    email: ""
}


const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        // case SET_EMAIL:
        //     return { ...state, email: action.payload }
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