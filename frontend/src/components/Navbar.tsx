import Filter from "./Filter";
import LogOut from "./LogOut";

const Navbar = () => {
  return (
    <nav className="w-screen fixed top-0 p-5 px-10 shadow-lg flex items-center justify-between z-10">
      <h1 className="text-xl font-semibold">Notes</h1>
      <Filter />
      <LogOut />
    </nav>
  );
};

export default Navbar;
