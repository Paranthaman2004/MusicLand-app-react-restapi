import React from "react";
import SearchFilters from "../Components/SearchFilters";
import SearchSong from "../Components/SearchSong";
import TopResult from "../Components/TopResult";
import { useStates } from "../States";

const Search = () => {
  const { search, setSearch } = useStates();
  return (
    <div className="flex">
      <form className="group absolute top-0 left-96 w-4/12">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 -mt-1.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
          aria-hidden="true"
        >
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input
          className="focus:ring-[2px] focus:ring-mp-violet focus:outline-none appearance-none w-full text-base leading-6 text-slate-900 placeholder-slate-400 rounded-2xl py-1.5 pl-10 ring-1 ring-slate-200 shadow-sm indent-2 font-semibold "
          type="text"
          aria-label="Filter projects"
          placeholder="Search Song..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="ml-72 w-[80vw] max-xl:ml-40">
        {search ? (
          <>
            <div className="flex mt-3 ml-3 w-full">
              <TopResult />
              <SearchSong />
            </div>
            <div className="">
              <SearchFilters />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
