import React, { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import Countdown from "react-countdown";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const LandsitesCarousel = (interval) => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      transitionTime={1}
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      autoPlay
    >
      <div data-interval={interval}>
        <img alt="" src="/landsite1.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/landsite2.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/landsite3.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/landsite4.png" />
      </div>
    </Carousel>
  );
};

const BuildingCarousel = (interval) => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      transitionTime={1}
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      autoPlay
    >
      <div data-interval={interval}>
        <img alt="" src="/b1.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b2.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b3.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b4.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b5.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b6.png" />
      </div>
    </Carousel>
  );
};

const MixCarousel = (interval) => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      transitionTime={1}
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      autoPlay
    >
      <div data-interval={interval}>
        <img alt="" src="/b1.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/landsite1.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b2.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/landsite2.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b3.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/landsite3.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b4.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/landsite4.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b5.png" />
      </div>
      <div data-interval={interval}>
        <img alt="" src="/b6.png" />
      </div>
    </Carousel>
  );
};
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return "Mint is Live!";
  } else {
    // Render a countdown
    return (
      <span>
        {days}d : {hours}h : {minutes}m : {seconds}s
      </span>
    );
  }
};

export const NFT = (props) => {
  const [interval, setInterval] = useState(0);
  useEffect(() => {
    setInterval(5000);
  }, []);
  return (
    <div className="w-[100vw]  bg-[#0A091B] items-center -mt-4 flex flex-col ">
      <div className="container flex flex-col  justify-start items-center ">
        <h1
          className="
            -mb-4
            text-6xl
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
 leading-snug
 p-24
            
            "
        >
          Upcoming NFT Mint
        </h1>

        <div className=" w-4/5 h-fit p-4 flex flex-row rounded-lg ml-5 mr-5 items-center relative bg-[#030116]">
          <div className="flex-col w-full md:w-48 md:h-auto rounded-lg ml-5 mr-5 mx-auto">
            <div className="h-96 w-full md:w-48 md:h-auto md:rounded-none  mr-5 mx-auto">
              <img
                src="/mint_preview2.png"
                alt=""
                className="h-96 w-96 md:w-48 md:h-48 md:rounded-none mx-auto shadow-2xl shadow-black"
              />
            </div>
            <div className="h-20 w-96 md:w-48 md:h-auto text-center text-2xl text-white font-bold p-2 rounded-b-lg  mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Whitelist mint
              <p>
                <Countdown date={new Date("12/7/2022")} renderer={renderer} />
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col ">
              <h1
                className="
            m-4 
            text-5xl
            font-semibold
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
 leading-snug
            "
              >
                Xarian Citizens
              </h1>
              <p
                className="
                m-4 
                text-lg
                font-semibold
                tracking-tight 
                leading-none 
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
 leading-snug
 pr-4
                
                "
              >
                The Xarian NFTs are made up of 10,000 avatars, each belong to 1
                of 5 tribes (DAO's)
              </p>

              <p
                className="
                m-4 
                -mt-1
                text-lg
                font-semibold
                tracking-tight 
                leading-none 
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
 leading-snug
 pr-4
                
                "
              >
                Earn up to 92 XARA per month through staking
              </p>

              <p
                className="
                m-4 
                -mt-1
                text-lg
                font-semibold
                tracking-tight 
                leading-none 
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                dark:text-white         
                inline-block
                bg-clip-text
 leading-snug
                pr-4
                "
              >
                Collect XARA City Land Site and Building NFTs to become the Head
                Council (DAO) and earn additional XARA
              </p>

              <div className="flex flex-col">
                <div className="flex flex-row -mt-4 pb-1">
                  <p
                    className="
                m-4 
                mt-6
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                text-left
                "
                  >
                    Mint Date:
                  </p>
                  <p
                    className="mt-6
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                flex-1
                pr-4
                m-4
                text-right"
                  >
                    7 Dec 2022
                  </p>
                </div>
                <div className="flex flex-row pb-1">
                  <p
                    className="
                m-4
                -mt-4
                -mr-2
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl
                
                "
                  >
                    Whitelist Mint Price:
                  </p>
                  <p
                    className="-mt-4
                text-lg
                font-semibold
                pr-4
                m-4
                flex-1
                text-[#7B8B9C] md:text-5xl lg:text-6xl  text-right"
                  >
                    0.07 ETH
                  </p>
                </div>
                <div className="flex flex-row pb-4">
                  <p
                    className="
                m-4 
                -mt-4
                -mr-2
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                bg-clip-text
                
                "
                  >
                    Public Mint Price:
                  </p>
                  <p
                    className="pr-4
                m-4
                flex-1 
                -mt-4
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl text-right"
                  >
                    0.08 ETH
                  </p>
                </div>
                <div className="flex flex-row gap-10 mt-6">
                  <p
                    className="
                m-4 
                -mt-1
                -mr-2
                text-lg
                font-semibold
                w-fit
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                "
                  >
                    Whitelist mint - coming soon
                  </p>
                  <button className="w-[6rem] flex-1 m-4 mr-8 text-white border-3 text-2xl font-bold  h-14 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 -mt-5">
                    Mint
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1
          className="
            m-10 
            pt-20
            text-6xl
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
 leading-snug
            
            "
        >
          P2E - NFT collections
        </h1>
        <br />
        <p
          className="
            m-10 
            -mt-12
            mb-16
            text-lg
            font-semibold 
            tracking-tight 
            leading-none 
            text-[#7B8B9C]
            dark:text-white 
            
            inline-block
            text-transparent
            bg-clip-text
 leading-snug
            
            "
        >
          Become a Metaverse Property Tycoon and earn XARA token as rent through
          staking
        </p>
      </div>
      <div className=" flex flex-row sm:flex-col">
        <div className="w-[450px] h-[680px]  bg-[#1E0F2F] rounded-lg ml-10 items-center justify-between ">
          <div className="w-4/5 md:w-48 md:h-auto md:rounded-none m-5 rounded  mx-auto">
            <LandsitesCarousel interval={interval} />
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Land Site NFTs
            </span>
            <span className="text-[#7B8B9C] text-lg">
              Earn 60 XARA per month through staking
            </span>
          </p>

          <div className="flex flex-col m-10 -mt-4 -mb-4">
            <p>
              <span className="text-[#7B8B9C] font-normal text-lg mr-48">
                ETH Price:
              </span>
              <span className="text-[#7B8B9C] text-lg">0.20 ETH</span>
            </p>

            <p>
              <span className="text-[#7B8B9C] font-normal text-lg mr-44">
                XARA Price:
              </span>
              <span className="text-[#7B8B9C] text-lg">250 XARA</span>
            </p>
          </div>

          <div className="flex flex-row m-10 justify-between text-lg items-center">
            <Dropdown
              label="Currency"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #8840C4",
              }}
            >
              <Dropdown.Item>Ethereum</Dropdown.Item>
              <Dropdown.Item>$XARA</Dropdown.Item>
            </Dropdown>

            <button className="w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Buy
            </button>
          </div>
        </div>

        <div className=" w-[450px] h-[680px]  bg-[#1E0F2F] rounded-lg ml-10 items-center">
          <div className="w-4/5 md:w-48 md:h-auto md:rounded-none m-5 rounded  mx-auto">
            <BuildingCarousel interval={interval} />
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Building NFTs
            </span>
            <span className="text-[#7B8B9C] text-lg">
              Earn 80 XARA per month through staking
            </span>
          </p>

          <div className="flex flex-col m-10 -mt-4 -mb-4">
            <p>
              <span className="text-[#7B8B9C] font-normal text-lg mr-48">
                ETH Price:
              </span>
              <span className="text-[#7B8B9C] text-lg">0.25 ETH</span>
            </p>

            <p>
              <span className="text-[#7B8B9C] font-normal text-lg mr-44">
                XARA Price:
              </span>
              <span className="text-[#7B8B9C] text-lg">300 XARA</span>
            </p>
          </div>

          <div className="flex flex-row m-10 justify-between text-lg items-center">
            <Dropdown
              label="Currency"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #8840C4",
              }}
            >
              <Dropdown.Item>Ethereum</Dropdown.Item>
              <Dropdown.Item>$XARA</Dropdown.Item>
            </Dropdown>

            <button className="w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Buy
            </button>
          </div>
        </div>

        <div className=" w-[450px] h-[680px]  bg-[#1E0F2F] rounded-lg ml-10 items-center">
          <div className="w-4/5 md:w-48 md:h-auto md:rounded-none m-5 rounded  mx-auto">
            <MixCarousel interval={interval} />
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Land & Building NFTs
            </span>
            <span className="text-[#7B8B9C] text-lg">
              Earn 185 XARA per month through staking
            </span>
          </p>

          <div className="flex flex-col m-10 -mt-4 -mb-4">
            <p>
              <span className="text-[#7B8B9C] font-normal text-lg mr-48">
                ETH Price:
              </span>
              <span className="text-[#7B8B9C] text-lg">0.40 ETH</span>
            </p>

            <p>
              <span className="text-[#7B8B9C] font-normal text-lg mr-44">
                XARA Price:
              </span>
              <span className="text-[#7B8B9C] text-lg">500 XARA</span>
            </p>
          </div>

          <div className="flex flex-row m-10 justify-between text-lg items-center ">
            <Dropdown
              label="Currency"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #8840C4",
              }}
            >
              <Dropdown.Item>Ethereum</Dropdown.Item>
              <Dropdown.Item>$XARA</Dropdown.Item>
            </Dropdown>

            <button className="w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Buy
            </button>
          </div>
        </div>
      </div>
      <p className="text-[#7B8B9C] m-10 text-xl">
        Purchase a Land Site and Building Combo for a 10% discount and earn 25%
        more XARA from staking
      </p>
      <div className="flex flex-row mb-10 pb-32 pt-20">
        <img
          src="/eth.svg"
          style={{ color: "grey" }}
          className="h-16 mt-14 m-10 -mb-10"
        />
        <img
          src="/binance.svg"
          style={{ color: "white" }}
          className="h-48 m-10 -mb-10 -mt-1"
        />
        <img
          src="/openSea.svg"
          style={{ color: "grey" }}
          className="h-12 m-10 -mb-10 mt-16"
        />
      </div>
    </div>
  );
};
