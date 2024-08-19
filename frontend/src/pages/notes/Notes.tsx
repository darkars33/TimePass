import AddNote from "../../components/AddNote";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import NoteCard from "../../components/NoteCard";

const Notes = () => {

          const token = localStorage.getItem("token");
          const navigate = useNavigate();
          const user = useSelector((state:any) => state?.user);
          const [notes, setNotes] = useState<any[]>([]);
          useEffect(() =>{
                    if(!token){
                              navigate("/logIn");
                    }
          })

          const [showAddNote, setShowAddNote] = useState<boolean>(false);
          const fetchNotes = async () =>{
            const URL = `${import.meta.env.VITE_BACKEND_URL}/api/note/getNotes`;

            try {
                const res= await axios.get(URL, {withCredentials: true});
                console.log(res);
                if(res.data.success){
                  setNotes(res.data.data);
                }
            } catch (error) {
              console.log(error);
              toast.error("Something went wrong");
            }
          }

          useEffect(() =>{
            fetchNotes();
          },[showAddNote])

          console.log("notes",notes)

  return (
    <div className="w-screen p-5 py-10 z-0">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {notes.map((note) => (
          <NoteCard note={note} key={note._id}/>
        ))}
        </div>

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
            <AddNote user={user} setShowAddNote={setShowAddNote} />
          </div>
        </>
      )}
    </div>
  );
};

export default Notes;
