import React from "react";

export default function FilterBar() {
  return (
    <nav className="h-8 w-full sm:justify-center items-center flex gap-4 overflow-x-scroll scrollbar-hide px-4 my-4">
      <Button type={"All"} />
      <Button type={"New"} />
      <Button type={"Music"} />
      <Button type={"Blog"} />
      <Button type={"Live"} />
      <Button type={"Mixes"} />
      <Button type={"Sports"} />
      <Button type={"Art"} />
      <Button type={"Travel"} />
    </nav>
  );
}
function Button({ type }: { type: string }) {
  return (
    <button
      className="w-24 h-6 px-4 border border-fuchsia-950 rounded-xl"
      // onClick={() => function()}
    >
      {type}
    </button>
  );
}
