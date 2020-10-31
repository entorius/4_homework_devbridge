import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NotesPage.styles.css';

export default function NotesPage({
  notes, saveNote
}) {

  const [inputValue, setInputValue] = useState(notes.notes);
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    saveNote(inputValue);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea rows="25" cols="50" value={inputValue} onChange={handleInputChange} />
        <button
          className='btn-save'
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );}

  NotesPage.propTypes = {
    notes: PropTypes.object.isRequired,
    saveNote: PropTypes.func.isRequired
  };
