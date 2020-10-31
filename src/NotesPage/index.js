import { connect } from 'react-redux';
import NotesPage from './NotesPage';
import { saveNote } from '../state/notes/notesActions';

const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = {
  saveNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
