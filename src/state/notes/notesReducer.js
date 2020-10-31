import { SAVE_NOTE, EDIT_NOTE } from './notesActionTypes';

export default function notesReducer(state = {notes:""}, action = {}) {
  switch (action.type) {
    case SAVE_NOTE:
      return {
        notes: action.payload.content
      }
    case EDIT_NOTE:
    return {
      notes: action.payload
    }
    default:
      return state;
  }
}