import React from "react";
import NotesCategory from "../components/NotesCategory";
import NotesInput from "../components/NotesInput";
import SearchNavbar from "../components/SearchNavbar";
import { getData } from "../utils/data";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
      search: "",
      editNoteId: "",
    };

    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onSearchNotes = this.onSearchNotes.bind(this);
  }

  onDeleteNote(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNote(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchNotes(search) {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: search,
      };
    });
  }

  render() {
    return (
      <>
        <SearchNavbar searchNotes={this.onSearchNotes} />
        <div className="container my-5">
          <NotesInput addNote={this.onAddNote} />
          <NotesCategory
            notes={
              this.state.search
                ? this.state.notes.filter((note) =>
                    note.title
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase())
                  )
                : this.state.notes
            }
            onDelete={this.onDeleteNote}
            onArchive={this.onArchiveNote}
          />
          <hr />
          <NotesCategory
            type="archive"
            notes={
              this.state.search
                ? this.state.notes.filter((note) =>
                    note.title
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase())
                  )
                : this.state.notes
            }
            onDelete={this.onDeleteNote}
            onArchive={this.onArchiveNote}
          />
        </div>
      </>
    );
  }
}
