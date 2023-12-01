import { ChangeEvent } from "react";
import { useState } from "react";

interface Props {
  onAddNote: (text: string) => void;
}

const AddNote = ({ onAddNote }: Props) => {
  const [noteText, setNoteText] = useState<string>("");

  const characterLimit: number = 200;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const inputValue: string = e.target.value;

    if (characterLimit - inputValue.length >= 0) {
      setNoteText(inputValue);
    }
  };

  const handleSaveClick = (): void => {
    if (noteText.trim().length > 0) {
      onAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Say</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
