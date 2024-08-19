import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";

interface NoteCardProps {
  note: any;
  handleDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, handleDelete }: NoteCardProps) => {

  
  return (
    <div key={note._id} className="bg-white p-5 rounded-xl shadow-lg">
      <h1 className="text-xl font-semibold">{note.title}</h1>
      <p>{note.content}</p>
      <div className="flex gap-2 mt-3">
        {note.tags.map((tag: string) => (
          <span key={tag} className="bg-gray-200 p-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-end mt-3 gap-4">
        <button className="text-red-500 text-xl" onClick={() => handleDelete(note._id)}>
          <MdOutlineDelete />
        </button>
        <button className="text-green-500 text-xl">
          <MdOutlineModeEdit />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
