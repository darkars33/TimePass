

const LogOut = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="w-11 h-11 bg-gray-300 flex justify-center items-center rounded-full">
          <h1>TU</h1>
      </div>
      <div>
          <h1 className="text-sm font-semibold">Test User</h1>
          <button className="underline text-gray-400 hover:text-black">LogOut</button>
      </div>
    </div>
  )
}

export default LogOut
