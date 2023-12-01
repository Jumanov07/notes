import { MouseEvent } from "react";
import { INote } from "../interfaces";
import AddNote from "./AddNote";
import Note from "./Note";

interface Props {
  notes: INote[];
  onAddNote: (text: string) => void;
  onDeleteNote: (e: MouseEvent<SVGElement>) => void;
}

const NoteList = ({ notes, onAddNote, onDeleteNote }: Props) => {
  return (
    <div className="notes-list">
      <AddNote onAddNote={onAddNote} />

      {notes.map((note: INote) => (
        <Note key={note.id} {...note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
