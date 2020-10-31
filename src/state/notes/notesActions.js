import { SAVE_NOTE, EDIT_NOTE } from './notesActionTypes';

export const saveNote = (content) => ({
  type: SAVE_NOTE,
  payload: {
    content,
  },
});
export const editNote = (content) =>({
  type: EDIT_NOTE,
  payload: {
    content,
  },
});