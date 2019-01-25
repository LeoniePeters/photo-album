import { SET_PHOTOS} from "../actions/photos";

export default (state = [], action = {}) => {
    switch (action.type) {
    case SET_PHOTOS:
    let newState = action.payload
    return newState

    default:
    return state
    }
}
