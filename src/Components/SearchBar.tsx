import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { BiRevision } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex items-center space-x-4 m-2">
      <HiArrowLeft className="text-slate-400 text-2xl font-medium" onClick={()=>Navigate(-1)} />
      <HiArrowRight className="text-slate-400 text-2xl font-medium" onClick={()=>Navigate(1)} />
      <BiRevision className="text-slate-700 text-2xl font-medium" onClick={()=>window.location.reload()} />
      <label className="relative block w-full ">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FcGoogle />
        </span>
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm bg-zinc-200 focus:bg-white"
          placeholder="Search Google or type a URL"
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default SearchBar;
