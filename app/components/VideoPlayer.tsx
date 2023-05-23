import React from "react";

export default function VideoPlayer() {
  return (
    <div className="flex w-full border-t-0 sm:max-w-4xl rounded-xl h-full border border-fuchsia-900/50 justify-center cursor-pointer self-center">
      <img
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        className="rounded-xl object-cover"
      />
    </div>
  );
}
