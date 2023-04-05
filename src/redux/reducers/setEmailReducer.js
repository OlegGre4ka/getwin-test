import {SET_EMAIL} from "./../actions/emailAction";
// interface IEmail {
//     email: string;
// }

const defaultState = {
    email:""
}


 const setEmailReducer = (state=defaultState, action) =>{
    switch(action.type){
        case SET_EMAIL: 
        return {...state, email: action.payload}

        default:
            return state
    }
}

export default setEmailReducer