"use client";
import React from "react";
import Header from "../components/Header";
import Comment from "../components/Comment";
import Results from "../components/Results";
import Footer from "../components/Footer";
import PhoneFooterMenu from "../components/PhoneFooterMenu";
import VideoPlayer from "../components/VideoPlayer";
import Link from "next/link";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ArrowPathRoundedSquareIcon,
  CurrencyDollarIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
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
              <Link href={"/user"} className="flex gap-2 w-full">
                <img
                  src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/12098.png"
                  className="w-14 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-xl">AlexRG</span>
                  <span className="text-sm">69 Subscribers</span>
                </div>
              </Link>
              <div className="flex gap-8 sm:gap-4 px-4">
                {" "}
                <div className="flex gap-2">
                  <HandThumbUpIcon className="w-6 h-6" />
                  <span className="hidden sm:flex">Like</span>
                </div>{" "}
                <div className="flex gap-2">
                  {" "}
                  <HandThumbDownIcon className="w-6 h-6" />
                  <span className="hidden sm:flex">Dislike</span>
                </div>{" "}
                <div className="flex gap-2">
                  {" "}
                  <ArrowPathRoundedSquareIcon className="w-6 h-6" />
                  <span className="hidden sm:flex">Amplify</span>
                </div>{" "}
                <div className="flex gap-2">
                  {" "}
                  <CurrencyDollarIcon className="w-6 h-6" />
                  <span className="hidden sm:flex">Tip</span>
                </div>
                <div className="flex gap-2">
                  {" "}
                  <ShareIcon className="w-6 h-6" />
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
