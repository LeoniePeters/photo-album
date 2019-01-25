
import * as request from 'superagent'
// import { request } from "https";

export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'

export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELLO_WORLD,
    payload: {
      firstName,
      lastName
    }
  }
}

export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  }
}

export const SET_ALBUMS = 'SET_ALBUMS'

export function setAlbums(albums) {
    return {
      type: SET_ALBUMS,
      payload: albums
    }
}

export function getAlbums() {
    return function (dispatch) {
      request('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
          dispatch(setAlbums(response.body))
        })
    }
  }

// export function getAlbums() {
//     request('https://jsonplaceholder.typicode.com/albums')
//       .getHeaderNames(response => {
//           someHowDispatch(setAlbums(response.body))
//       })
// }