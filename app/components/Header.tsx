import Link from "next/link";
import React from "react";
import {
  BookmarkSquareIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  BellIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
export default function Header() {
  return (
    <div className="flex w-full px-4 justify-between max-w-[1600px] items-center gap-1 mt-2">
      <div className="gap-4 flex items-center">
        <Link href={"/"}>
          <img
            src="https://cdn.discordapp.com/attachments/1073616425203273778/1110495007363829810/A_letter_tech_logo.png"
            className="w-10 rounded-full"
            alt=""
          />
        </Link>
        <BookmarkSquareIcon className="w-6 h-6" />
        <CloudIcon className="w-6 h-6" />
      </div>
      <div className="w-2/3 hidden md:px-4 max-w-lg items-center h-8 rounded-2xl sm:flex bg-black/20 text-sm border border-fuchsia-900/50 tracking-tight px-1.5 font-normal gap-2 justify-between">
        <span className="truncate w-full">Search video or channel</span>
        <MagnifyingGlassIcon className="w-5 h-5" />
      </div>
      <div className="flex w-fit justify-end items-center gap-5 md:gap-4">
        <MagnifyingGlassIcon className="w-6 h-6 sm:hidden" />
        <VideoCameraIcon className="w-6 h-6" />

        <BellIcon className="w-6 h-6" />
        <img
          src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/12098.png"
          className="w-8 rounded-full"
        />
      </div>
    </div>
  );
}
