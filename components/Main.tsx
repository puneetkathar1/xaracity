import React, { useRef } from "react";
import { CustomContentProgressbar } from "./customCircularProgress";
export const Main = (props: any) => {
  return (
    <section className=" w-[100vw] flex laptop:flex-col flex-col sm:py-16 justify-center items-center -mt-4">
      <div id="home" className="w-full">
        <div className="navbar-line" />
        <div className="flex flex-1 flex-row  items-start justify-center xl:px-0 sm:py-16  whitespace-nowrap ">
          <div className="flex flex-col justify-between items-start  p-40 -mt-10 ml-1">
            <h1
              className="
            flex-1
            ss:text-[72px]
            ss:leading-[100px]
           
            text-6xl
            font-extrabold 
            tracking-tight 
            leading-[75px]
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            "
            >
              WELCOME TO
            </h1>
            <span
              className="
            mb-4 
            text-8xl 
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text"
            >
              XARA CITY
            </span>

            <span
              className="
            mb-2
            font-extrabold 
            text-[25px]
            text-gray-900 lg:text-lg sm:px-16 xl:px-1
            dark:text-gray-400
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text"
            >
              Fully immerasive, Decentralized Ecosystem
            </span>
            <p
              className=" 
            font-semibold 
            text-gray-500 
            dark:text-gray-400
            text-lg
            "
            >
              Onboarding assets backend, Web2.0 companies{" "}
            </p>
            <p
              className="
            mb-3 
            font-semibold 
            text-gray-500 
            dark:text-gray-400
            text-lg
            "
            >
              and products into Web3.0
            </p>
            <button
              className="
                inline-flex 
                justify-center 
                items-center 
                py-3 
                px-5
                text-base 
                font-medium 
                text-center 
                w-32
                text-white 
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900
                rounded
                mt-8
                "
            >
              Whitepaper
            </button>
          </div>

          <div className="h-[100%] relative z-[5] mt-10 ">
            <video width="500" autoPlay muted controls={false} loop>
              <source src="/xara_card.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div id="home2" className="w-[100vw] p-20">
      <figure style={{margin: 'auto'}} className="md:flex bg-[#000] rounded-xl mx-auto p-3 mt-5 md:p-0 dark:bg-slate-800 items-center w-[60vw] flex flex-row ml-5">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
          <div
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <CustomContentProgressbar color="#3e98c7">
              <img
                className="w-28 h-28 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/market.jpeg"
                alt=""
              />
            </CustomContentProgressbar>
          </div>
          <blockquote>
            <p className="text-2xl font-bold text-blue-400">Market Place</p>
          </blockquote>
        </div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
          <div
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <CustomContentProgressbar color="#3e98c7">
              <img
                className="w-28 h-28 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/play_to_earn.jpg"
                alt=""
                width="384"
                height="512"
              />
            </CustomContentProgressbar>
          </div>
          <blockquote>
            <p className="text-2xl font-bold text-blue-700">Play-To-Earn</p>
          </blockquote>
        </div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
          <div
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <CustomContentProgressbar color="#3e98c7">
              <img
                className="w-28 h-28 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/metaverse.png"
                alt=""
                width="384"
                height="512"
              />
            </CustomContentProgressbar>
          </div>
          <blockquote>
            <p className="text-2xl font-bold text-violet-800">Metaverse</p>
          </blockquote>
        </div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
          <div
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <CustomContentProgressbar color="#3e98c7">
              <img
                className="w-28 h-28 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/trade.png"
                alt=""
                width="384"
                height="512"
              />
            </CustomContentProgressbar>
          </div>
          <blockquote>
            <p className="text-2xl font-bold text-fuchsia-700">Trade</p>
          </blockquote>
        </div>
      </figure></div>
    </section>
  );
};
