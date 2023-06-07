import React from "react";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
function Coment({
  name,
  img,
  time,
  comment,
  likes,
}: {
  name: string;
  img: string;
  time: string;
  comment: string;
  likes: string;
}) {
  return (
    <div className="flex gap-4 w-full items-start">
      <img src={img} className="w-10 rounded-full" />
      <div className="w-full">
        <div className="flex w-full justify-between items-center">
          <span className="font-semibold">{name}</span>
          <span className="text-xs">{time}</span>
        </div>
        <span className="text-sm">{comment}</span>
        <div className="flex gap-8 sm:gap-4 py-2">
          {" "}
          <div className="flex gap-2">
            <HandThumbUpIcon className="w-4 h-4" />
            <span className="flex text-xs">{likes}</span>
          </div>{" "}
          <div className="flex gap-2">
            <HandThumbDownIcon className="w-4 h-4" />
            <span className="flex text-xs">0</span>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Coment;
