import { IoIosSearch } from "react-icons/io";

const Filter = () => {
  return (
    <div className="relative w-[20rem] flex items-center">
      <input type="text" placeholder="Search" className="w-full p-2 border bg-gray-200 rounded-md focus:outline-none" />
      <div className="absolute right-5">
          <IoIosSearch className="text-2xl text-gray-500" />
      </div>
    </div>
  )
}

export default Filter
