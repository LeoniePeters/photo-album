import { ADD_ALBUM, SET_ALBUMS} from "../actions/albums";

export default (state = [], action = {}) => {
    switch (action.type) {
    case ADD_ALBUM:
      return [
        ...state, 
        action.payload
      ]
    case SET_ALBUMS:
    let newState = action.payload
    return newState

    default:
    return state
    }
}
