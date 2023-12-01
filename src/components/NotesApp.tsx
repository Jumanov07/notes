import { MouseEvent, useState } from "react";
import { INote } from "../interfaces";
import Header from "./Header";
import Search from "./Search";
import NoteList from "./NoteList";

const NotesApp = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  const [searchText, setSearchText] = useState<string>("");

  const [darkMode, setDarkMode] = useState<boolean>(false);

  const addNote = (text: string): void => {
    const date: Date = new Date();

    const newNote: INote = {
      id: Math.random().toString(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes: INote[] = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (e: MouseEvent<SVGElement>): void => {
    const target = e.target as SVGElement;

    const unremovedNotes: INote[] = notes.filter(
      (note: INote) => note.id !== target.id
    );

    setNotes(unremovedNotes);
  };

  const filteredNotes: INote[] = notes.filter((note: INote) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />

        <Search setSearchText={setSearchText} />

        <NoteList
          notes={filteredNotes}
          onAddNote={addNote}
          onDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default NotesApp;
