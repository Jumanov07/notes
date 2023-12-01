import { MdDeleteForever } from "react-icons/md";
import { INote } from "../interfaces";
import { MouseEvent } from "react";

interface Props extends INote {
  onDeleteNote: (e: MouseEvent<SVGElement>) => void;
}

const Note = ({ id, text, date, onDeleteNote }: Props) => {
  return (
    <div className="note">
      <span className="text">{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={onDeleteNote}
          id={id}
        />
      </div>
    </div>
  );
};

export default Note;
