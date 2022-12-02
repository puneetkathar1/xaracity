import { Button } from "flowbite-react";
import React, { useRef } from "react";
import { CustomContentProgressbar } from "./customCircularProgress";
export const Team = () => {
  return (
    <section
      id="team"
      className=" w-[100vw]  flex flex-col sm:py-16  justify-center items-center "
    >
        <div id="home2" className="w-full p-14">
        <div className="flex flex-row mx-auto w-1/2">
        <h1
          className="
            ss:text-[72px]
            ss:leading-[100px]
            text-6xl
            font-bold 
            tracking-tight 
            leading-[75px]
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            w-1/2
            mr-16
            "
        >
          Join Our Community
        </h1>
        <button className="mx-auto h-20 w-60 font-bold p-4 items-center justify-items-center text-xl text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg mt-10 " ><img alt="" src="/discord.svg" className="h-8 w-8 ml-4"  /> <p className="-mt-8 ml-10">Join Discord</p></button>
      </div>
        </div>
      
      <div className="flex flex-col justify-center items-center w-full pt-20 bg-[#020117] pt-20">
        <h1
          className="
            ss:text-[72px]
            ss:leading-[100px]
            text-6xl
            font-bold 
            tracking-tight 
            leading-[75px]
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            mt-14
            "
        >
          Core Team
        </h1>
        <figure className="rounded-xl p-3  md:p-0 dark:bg-slate-800  items-center w-[80vw] h-[470px] flex flex-row ">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <CustomContentProgressbar percentage={70} color="#A21B9F">
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src="/Xara_O.png"
                  alt=""
                  width="384"
                  height="512"
                />
              </CustomContentProgressbar>
            </div>
            <blockquote>
              <p className="text-lg font-bold text-white">XARA_O</p>
              <p className="text-lg font-bold text-slate-600">
                Xara City Visionary <br></br> Founder & Creator
              </p>
            </blockquote>
          </div>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <CustomContentProgressbar percentage={70} color="#A21B9F">
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src="/JonRof.png"
                  alt=""
                  width="384"
                  height="512"
                />
              </CustomContentProgressbar>
            </div>
            <blockquote>
              <p className="text-lg font-bold text-white">JONROF</p>
              <p className="text-lg font-bold text-slate-600">
                Project & Marketing <br></br> Manager
              </p>
            </blockquote>
          </div>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <CustomContentProgressbar percentage={70} color="#A21B9F">
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src="/Brandon_VN.png"
                  alt=""
                  width="384"
                  height="512"
                />
              </CustomContentProgressbar>
            </div>
            <blockquote>
              <p className="text-lg font-bold text-white">BRANDON-VN</p>
              <p className="text-lg font-bold text-slate-600">
                I.T. Development <br></br> Manager
              </p>
            </blockquote>
          </div>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <CustomContentProgressbar percentage={70} color="#A21B9F">
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src="/MSD_II.png"
                  alt=""
                  width="384"
                  height="512"
                />
              </CustomContentProgressbar>
            </div>
            <blockquote>
              <p className="text-lg font-bold text-white">Creative</p>
              <p className="text-lg font-bold text-slate-600">
                Creative Manager <br></br> Manager
              </p>
            </blockquote>
          </div>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <CustomContentProgressbar percentage={70} color="#A21B9F">
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src="/Emvedee.png"
                  alt=""
                  width="384"
                  height="512"
                />
              </CustomContentProgressbar>
            </div>
            <blockquote>
              <p className="text-lg font-bold text-white">EMVEDEE</p>
              <p className="text-lg font-bold text-slate-600">
                Community <br></br> Manager
              </p>
            </blockquote>
          </div>
        </figure>
        <div className="flex flex-col mt-28">
          <p className="text-white -mt-32 text-center font-bold">
            Xara City has been created by an established Property Development
            company <br></br> and team of MBA’S, Actuaries, Architects, Artists,
            3D VR Developers, <br></br> Blockchain Developers and Marketers.
          </p>
        </div>
      </div>
    </section>
  );
};
