import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap';
import SingleNote from './SingleNote';

import notesData from '../../../helpers/data/notesData';

class Notes extends React.Component {
  state = {
    notes: [],
    isOpen: false,
    label: '',
    noteID: null,
    updating: false,
  }

 getNoteData = () => {
   notesData.getAllNotes()
     .then((res) => this.setState({ notes: res.data }))
     .catch((err) => console.error(err));
 }

 componentDidMount() {
   this.getNoteData();
 }

  noteUpdate = (e) => {
    e.preventDefault();
    this.setState({ label: e.target.value });
  }

  submitNote = (e) => {
    e.preventDefault();
    const { label, updating, noteID } = this.state;
    const Note = { label };
    const jsonNote = JSON.stringify(Note);

    if (updating) {
      notesData.updateNote(jsonNote, noteID)
        .then(() => {
          this.setState({ isOpen: false, label: '' });
          this.getNoteData();
        })
        .catch((err) => console.error(err));
    } else {
      notesData.addNote(jsonNote)
        .then(() => {
          this.setState({ isOpen: false, label: '' });
          this.getNoteData();
        })
        .catch((err) => console.error(err));
    }
  }

  updateNote = (label, noteID) => {
    this.setState({
      label, noteID, isOpen: true, updating: true,
    });
  }

  deleteNotes = (id) => {
    notesData.deleteNote(id)
      .then(() => { this.getNoteData(); })
      .catch((err) => console.error(err));
  }

  render() {
    const { notes, isOpen, label } = this.state;
    const { history } = this.props;
    const buildNotes = notes.map((Note) => <SingleNote Note={Note} updateNote={this.updateNote} deleteNotes={this.deleteNotes} history={history} key={Note.id} />);

    const toggle = () => this.setState({ isOpen: !isOpen });

    return (
      <Table>
          <TableHead>
            <h1>To Remember:</h1>
          </TableHead>
          <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Add Note</Button>
              <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                <form>
                    <div className="form-group">
                      <label htmlFor="NoteName">Note:</label>
                      <input type="NoteName" onChange={this.noteUpdate} className="form-control" aria-describedby="emailHelp" value={label} />
                    </div>
                    <button onClick={this.submitNote} className="btn btn-primary">Submit</button>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
          </div>
            { buildNotes }
      </Table>
    );
  }
}

export default Notes;
