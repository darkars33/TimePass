import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";


const AddNote = () => {

          const [tag, setTag]= useState<string>("");
          const [allTags, setAllTags] = useState<string[]>([]);

  return (
    <div className="relative p-1 pt-2 w-[30rem] flex">
    
      <form action="" className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="p-2 rounded outline-none bg-gray-100"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            className="bg-gray-100"
          ></textarea>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="tags">Tags</label>
          <div className="flex gap-3">
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="Tags"
              className="bg-gray-100 p-2 max-h-10 outline-none"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <button type="button" className="p-2 rounded-sm border-[2px] border-blue-400 max-h-10"><FaPlus className="text-xl text-blue-500" onClick={() =>{
                    if(tag === "") return toast.error("Please enter a tag");
                    setAllTags([...allTags, tag]);
                    setTag("");
            }} /></button>
            <div className="flex flex-wrap gap-2">
            {allTags.map((item, index) =>{
                    return(
                              <div key={index} className="bg-blue-500 text-white py-1 px-2 rounded-md" onClick={() =>{
                                        const newTags = allTags.filter((tag) => tag !== item);
                                        setAllTags(newTags);
                              }} >{item}</div>
                    )
            })}
            </div>
          </div>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md fonts-semibold text-xl">ADD</button>
      </form>
    </div>
  );
};

export default AddNote;
