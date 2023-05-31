import React from "react";

export default function FilterBar() {
  return (
    <nav className="h-8w-full sm:justify-center items-center flex gap-4 overflow-x-scroll scrollbar-hide px-4 my-4">
      <button className="w-20 h-6 px-4 border border-fuchsia-950 rounded-xl">
        All
      </button>
      <button className="w-20 h-6 px-4 border border-fuchsia-950 rounded-xl">
        New
      </button>
      <button className="w-20 h-6 px-4 border border-fuchsia-950 rounded-xl">
        Music
      </button>{" "}
      <button className="w-20 h-6 px-4 border border-fuchsia-950 rounded-xl">
        Blog
      </button>{" "}
      <button className="w-20 h-6 px-4 border border-fuchsia-950 rounded-xl">
        Live
      </button>{" "}
      <button className="w-20 h-6 px-4 border border-fuchsia-950 rounded-xl">
        Mixes
      </button>{" "}
      <button className="w-25 h-6 px-4 border border-fuchsia-950 rounded-xl">
        Sports
      </button>{" "}
      <button className="w-20 h-6 px-4 border border-fuchsia-950 rounded-xl">
        Art
      </button>{" "}
      <button className="w-24 h-6 px-4 border border-fuchsia-950 rounded-xl">
        Travel
      </button>
    </nav>
  );
}
