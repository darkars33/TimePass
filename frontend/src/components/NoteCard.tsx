import React from "react";

interface NoteCardProps {
  note: any;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }: NoteCardProps) => {
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
    </div>
  );
};

export default NoteCard;
