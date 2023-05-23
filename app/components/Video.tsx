import React from "react";
type Props = {
  img: string;
  user: string;
  title: string;
  likes: string;
  date: string;
  pro: boolean;
};
function Video({ img, user, title, likes, date, pro }: Props) {
  return (
    <div className="flex flex-col w-full border-t-0 sm:max-w-sm rounded-xl h-60 border border-fuchsia-900/50 cursor-pointer">
      {pro && (
        <div className="w-full px-2 flex justify-end">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute text-fuchsia-500 animate-pulse"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <img src={img} className="rounded-t-xl h-[80%] object-cover" />
      <div className="flex w-full items-center h-full px-2 gap-2">
        <img src={user} className="w-8 rounded-full" />
        <div className="flex w-[90%] flex-col">
          {" "}
          <span className="truncate">{title}</span>
          <span className="text-xs flex gap-2">
            <span>{likes} likes</span>
            <span className="text-fuchsia-900">•</span>
            <span>{date} days ago</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Video;
