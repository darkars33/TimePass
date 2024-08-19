import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface data {
  title: string;
  content: string;
  tags: string[];
  userId: string;
}

interface AddNoteProps {
  user: any;
  setShowAddNote?: any;
}

const AddNote: React.FC<AddNoteProps> = ({ user, setShowAddNote }) => {
  const [tag, setTag] = useState<string>("");

  const [data, setData] = useState<data>({
    title: "",
    content: "",
    tags: [],
    userId: user._id,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  

  const handleAddNote = async (e:any) =>{
    e.preventDefault();
    e.stopPropagation();
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/note/createNote`;
    try {
      const res = await axios({
        method: "POST",
        url: URL,
        data: data,
        withCredentials: true,
      })
      console.log(res);
      if(res.data.success){
        toast.success(res.data.message);
        setShowAddNote(false);
        setData({
          title: "",
          content: "",
          tags: [],
          userId: user._id,
        })
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="relative p-1 pt-2 w-[30rem] flex">
      <form action="" className="w-full flex flex-col gap-5" onSubmit={handleAddNote}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="p-2 rounded outline-none bg-gray-100"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            className="bg-gray-100 outline-none p-2"
            placeholder="Content"
            value={data.content}
            onChange={handleChange}
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
            <button
              type="button"
              className="p-2 rounded-sm border-[2px] border-blue-400 max-h-10"
            >
              <FaPlus
                className="text-xl text-blue-500"
                onClick={() => {
                  if (tag === "") return toast.error("Please enter a tag");
                  setData((prevData: any) => {
                    return {
                      ...prevData,
                      tags: [...prevData.tags, tag],
                    };
                  });
                  setTag("");
                }}
              />
            </button>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-blue-500 text-white py-1 px-2 rounded-md cursor-pointer"
                    onClick={() => {
                      const newTags = [...data.tags];
                      newTags.splice(index, 1);
                      setData((prevData) => {
                        return {
                          ...prevData,
                          tags: newTags,
                        };
                      });
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md fonts-semibold text-xl"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddNote;
