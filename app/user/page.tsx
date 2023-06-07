import React from "react";
import Header from "../components/Header";
import PhoneFooterMenu from "../components/PhoneFooterMenu";
import Footer from "../components/Footer";
import Results from "../components/Results";
import {
  VideoCameraIcon,
  ArrowPathRoundedSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

function page() {
  return (
    <main className="flex min-h-screen text-zinc-500 flex-col items-center bg-black font-mono">
      <div className="flex  w-full h-full flex-col items-center min-w-screen min-h-screen from-black via-zinc-600/20 to-black bg-gradient-to-tl">
        <Header />
        <div className="w-full justify-center mt-4 h-px block bg-gradient-to-r from-zinc-300/0 via-fuchsia-950 to-zinc-300/0" />{" "}
        <div className="bg-[url('https://c4.wallpaperflare.com/wallpaper/37/315/751/the-simpsons-homer-simpson-bart-simpson-wallpaper-thumb.jpg')] w-full h-44 mt-4 bg-center"></div>
        <div className="flex w-full mt-4 gap-4 px-2 max-w-[1600px]">
          <div className="flex flex-col w-full h-fit justify-center gap-2">
            <div className="flex justify-between w-full  items-center cursor-pointer self-center gap-2">
              <div className="flex gap-2 w-full">
                <img
                  src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/12098.png"
                  className="w-14 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-xl">AlexRG</span>
                  <span className="text-sm">69 Subscribers</span>
                </div>
              </div>
              <button className="px-6 py-0.5 border border-fuchsia-950 rounded-2xl">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 md:gap-6 px-4 my-4">
              {" "}
              <button className="flex gap-2">
                {" "}
                <VideoCameraIcon className="w-6 h-6" />
                <span className="">Videos</span>
              </button>{" "}
              <button className="flex gap-2">
                {" "}
                <ArrowPathRoundedSquareIcon className="w-6 h-6" />
                <span className="">Amplified</span>
              </button>{" "}
              <button className="flex gap-2">
                <InformationCircleIcon className="w-6 h-6" />
                <span className="">About</span>
              </button>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="flex w-full">
          <Results />
        </div>
        <Footer />
        <PhoneFooterMenu />
      </div>
    </main>
  );
}

export default page;
