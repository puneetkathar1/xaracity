import { Button } from "flowbite-react";
import React, { useRef } from "react";
import { CustomContentProgressbar } from "./customCircularProgress";
export const Team = () => {
  return (
    <section
      id="team"
      className=" w-full  flex flex-col sm:py-16  justify-center items-center "
    >
      <div id="home2" className="w-full p-14">
        <div className="flex flex-row mx-auto w-full laptop:w-2/3">
          <h1
            className="
            text-4xl
            font-bold 
            laptop:text-6xl 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            text-transparent
            bg-clip-text
            laptop:mr-16
            laptop:w-[60%]
            "
          >
            Join Our Community
          </h1>
          <button className="mx-auto font-bold p-4 items-start text-lg laptop:text-xl text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg laptop:mt-10 ">
            <img
              alt=""
              src="/discord.svg"
              className=" h-6 w-6 laptop:h-8 laptop:w-8"
            />{" "}
            <p className="-mt-8 ml-12">Join Discord</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center w-full pt-20 bg-[#020117] pt-20">
        <h1
          className="
            text-6xl
            font-bold 
            text-gray-900 md:text-5xl lg:text-6xl 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            text-transparent
            bg-clip-text
            mt-14
            pb-10
            "
        >
          Core Team
        </h1>
        <figure className="rounded-xl p-3  md:p-0 dark:bg-slate-800  items-center w-[90%] h-fit flex flex-row  grid grid-cols-3 laptop:grid-cols-5">
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
          <div className="pt-6 text-center space-y-4 m-auto">
            <div
              style={{
                width: "150px",
                height: "150px",
                margin: "auto",
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
                Creative Manager
              </p>
            </blockquote>
          </div>
          <div className="pt-6 text-center space-y-4 m-auto">
            <div
              style={{
                width: "150px",
                height: "150px",
                margin: "auto",
              }}
            >
              <CustomContentProgressbar percentage={70} color="#A21B9F">
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto "
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
        <div className="flex flex-col mt-10 w-[90%] laptop:w-2/3">
          <p className="text-[#7B8B9C] text-lg text-center font-semibold">
            Xara City has been created by an established Property Development
            company and team of MBA’S, <br></br> Actuaries, Architects, Artists,
            3D VR Developers, Blockchain Developers and Marketers.
          </p>
        </div>
      </div>
    </section>
  );
};
