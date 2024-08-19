import AddNote from "../../components/AddNote";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Notes = () => {
  const [showAddNote, setShowAddNote] = useState<boolean>(false);
  return (
    <div className="w-screen p-5 py-10 z-0">
      <div className="fixed bottom-10 right-10">
        <button className="p-4 bg-blue-600 rounded-xl" onClick={() =>setShowAddNote(true)}>
          <FaPlus className="text-3xl text-white" />
        </button>
      </div>
      {showAddNote && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
          <div className="absolute top-[10%] left-[35%] z-50 bg-white p-5 rounded ">
            <button className="absolute top-0 right-0 p-2 text-2xl" onClick={() =>setShowAddNote(false)}>
              <IoClose className="text-gray-400" />
            </button>
            <AddNote />
          </div>
        </>
      )}
    </div>
  );
};

export default Notes;
