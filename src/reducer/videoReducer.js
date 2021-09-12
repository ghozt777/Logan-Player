import axios from "axios"
export function reducer(prevState , action){
    switch(action.type){
        case "GET_VIDEOS":
        console.log(action.payload)
        return action.payload
        default:
            break;
    }

}