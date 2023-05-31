"use client";
import React from "react";
import Header from "../components/Header";
import Comment from "../components/Comment";
import Results from "../components/Results";
import Footer from "../components/Footer";
import PhoneFooterMenu from "../components/PhoneFooterMenu";
import VideoPlayer from "../components/VideoPlayer";

function page() {
  return (
    <main className="flex min-h-screen text-zinc-500 flex-col items-center bg-black font-mono">
      <div className="flex w-full h-full flex-col items-center min-w-screen min-h-screen from-black via-zinc-600/20 to-black bg-gradient-to-tl">
        <Header />
        <div className="w-full justify-center mt-4 h-px block bg-gradient-to-r from-zinc-300/0 via-fuchsia-950 to-zinc-300/0" />{" "}
        <div className="flex w-full mt-4 gap-4 px-2 max-w-7xl">
          <div className="flex flex-col w-full h-fit justify-center gap-2">
            <VideoPlayer />
            <div className="flex flex-col w-full sm:max-w-4xl items-start justify-start cursor-pointer self-center gap-2">
              <span className="text-xl">
                {"This is just a test! What you thing?"}
              </span>
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
              <div className="flex gap-8 sm:gap-4 px-4">
                {" "}
                <div className="flex gap-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                  <span className="hidden sm:flex">Like</span>
                </div>{" "}
                <div className="flex gap-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                    />
                  </svg>
                  <span className="hidden sm:flex">Dislike</span>
                </div>{" "}
                <div className="flex gap-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>
                  <span className="hidden sm:flex">Amplify</span>
                </div>{" "}
                <div className="flex gap-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="hidden sm:flex">Tip</span>
                </div>
                <div className="flex gap-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                  <span className="hidden sm:flex">Share</span>
                </div>
              </div>{" "}
            </div>
            <div className="flex flex-col gap-2 px-2">
              <span className="text-xl">Comments</span>
              <div className="w-full flex px-4 mb-2 items-center h-10 rounded-2xl bg-black/20 text-sm border border-fuchsia-900/50 tracking-tight font-normal gap-2 justify-between">
                <span className="truncate w-full">I like this video...</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 -rotate-45"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </div>
              <Comment
                name={"AlexRG"}
                img={
                  "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/12098.png"
                }
                time={"2 days ago"}
                comment={"Yoo what's up???"}
                likes={"15"}
              />{" "}
              <Comment
                name={"AKabugu"}
                img={
                  "https://shuaskdidz7b4dvn4iybdvwilmbnbqr6iwwkvkndonaertcdlwga.arweave.net/kegJKGgefh4OreIwEdbIWwLQwj5FrKqpo3NASMxDXYw?ext=png"
                }
                time={"1 day ago"}
                comment={"LFG Alex, this is f*cking amazing 🚀"}
                likes={"55"}
              />{" "}
              <Comment
                name={"ElonDev"}
                img={
                  "https://images-cdn.exchange.art/otw9EZSzCU73YXabPHRHVPZmN8DNVyo-VJwIBONiLJM?ext=fastly&quality=20&width=300&blur=80&format=pjpg&auto=webp"
                }
                time={"1 day ago"}
                comment={"Nice bro, LFG 🤟"}
                likes={"32"}
              />
              <Comment
                name={"Ivan"}
                img={
                  "https://pbs.twimg.com/profile_images/1654548524472696834/GR4VOP4Y_400x400.png"
                }
                time={"1 day ago"}
                comment={"Pamp Pamp"}
                likes={"1K"}
              />
              <Comment
                name={"G-wizz"}
                img={
                  "https://images-cdn.exchange.art/MMbXKlDKvv9F78YYfuSWJ2lw5IzyCQ5ueD1CRLcXZ54?ext=fastly&quality=20&width=300&blur=80&format=pjpg&auto=webp"
                }
                time={"1 day ago"}
                comment={"My two cents is - it's awesome!"}
                likes={"987"}
              />
            </div>
          </div>

          <div className="hidden lg:flex lg:w-96">
            <Results />
          </div>
        </div>
        <Footer />
        <PhoneFooterMenu />
      </div>
    </main>
  );
}

export default page;
