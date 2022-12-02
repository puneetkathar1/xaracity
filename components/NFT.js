import { Dropdown } from "flowbite-react";
import Countdown from "react-countdown";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const LandsitesCarousel = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
      <div>
        <img alt="" src="/landsite1.png" />
      </div>
      <div>
        <img alt="" src="/landsite2.png" />
      </div>
      <div>
        <img alt="" src="/landsite3.png" />
      </div>
      <div>
        <img alt="" src="/landsite4.png" />
      </div>
    </Carousel>
  );
};

const BuildingCarousel = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
      <div>
        <img alt="" src="/b1.png" />
      </div>
      <div>
        <img alt="" src="/b2.png" />
      </div>
      <div>
        <img alt="" src="/b3.png" />
      </div>
      <div>
        <img alt="" src="/b4.png" />
      </div>
      <div>
        <img alt="" src="/b5.png" />
      </div>
      <div>
        <img alt="" src="/b6.png" />
      </div>
    </Carousel>
  );
};

const MixCarousel = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
      <div>
        <img alt="" src="/b1.png" />
      </div>
      <div>
        <img alt="" src="/landsite1.png" />
      </div>
      <div>
        <img alt="" src="/b2.png" />
      </div>
      <div>
        <img alt="" src="/landsite2.png" />
      </div>
      <div>
        <img alt="" src="/b3.png" />
      </div>
      <div>
        <img alt="" src="/landsite3.png" />
      </div>
      <div>
        <img alt="" src="/b4.png" />
      </div>
      <div>
        <img alt="" src="/landsite4.png" />
      </div>
      <div>
        <img alt="" src="/b5.png" />
      </div>
      <div>
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
  return (
    <div className="w-[100vw]  bg-[#0A091B] items-center -mt-4 flex flex-col ">
      <div className="container flex flex-col  justify-start items-center ">
        <h1
          className="
            m-28 
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
          Upcoming NFT Mint
        </h1>

        <div className=" w-4/5 h-[700px] flex flex-row rounded-lg ml-5 mr-5 items-center relative -mt-24">
          <div className="text-white absolute mr-0 top-20 right-10">
            <p
              className="underline-offset-4m-10 
                -mt-6
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
 leading-snug"
            >
              Details
            </p>
          </div>
          <div className="flex-col w-full md:w-48 md:h-auto rounded-lg ml-5 mr-5 mx-auto">
            <div className="h-96 w-full md:w-48 md:h-auto md:rounded-none -ml-1 mr-5 mx-auto">
              <img
                src="/mint_preview2.png"
                alt=""
                className="h-96 w-96 md:w-48 md:h-48 md:rounded-none mx-auto"
              />
            </div>
            <div className="h-20 w-96 md:w-48 md:h-auto text-center text-2xl text-white font-bold p-2 rounded-b-lg ml-14 mr-5 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Whitelist mint
              <p>
                <Countdown date={new Date("12/7/2022")} renderer={renderer} />
              </p>
            </div>
          </div>
          <div className="flex flex-col mr-5">
            <h1
              className="
            m-10 
            text-5xl
            font-thin
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
                m-10 
                -mt-6
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
 leading-snug
                
                "
            >
              The Xarian NFTs are made up of 10,000 avatars, each belong to 1 of
              5 tribes (DAO's)
            </p>

            <p
              className="
                m-10 
                -mt-6
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
 leading-snug
                
                "
            >
              Earn up to 92 XARA per month through staking
            </p>

            <p
              className="
                m-10 
                -mt-6
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white         
                inline-block
                bg-clip-text
 leading-snug
                
                "
            >
              Collect XARA City Land Site and Building NFTs to become the Head
              Council (DAO) and earn additional XARA
            </p>

            <div className="flex flex-col">
              <div className="flex-row -mt-4">
                <p
                  className="
                m-10 
                -mt-6
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
 leading-snug
                
                "
                >
                  Mint Date:
                </p>
                <p
                  className="m-10 
                -mt-6
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                ml-36
 leading-snug text-right"
                >
                  7 Dec 2022
                </p>
              </div>
              <div className="flex-row -mt-8">
                <p
                  className="
                m-10 
                -mt-10
                -mr-2
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white              
                inline-block
                bg-clip-text
 leading-snug
                
                "
                >
                  Whitelist Mint Price:
                </p>
                <p
                  className="m-10 
                -mt-6
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                ml-36
 leading-snug text-right"
                >
                  0.07 ETH
                </p>
              </div>
              <div className="flex-row  -mt-8">
                <p
                  className="
                m-10 
                -mt-10
                -mr-2
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white  
                inline-block
                bg-clip-text
 leading-snug
                
                "
                >
                  Public Mint Price:
                </p>
                <p
                  className="m-10 
                -mt-6
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                ml-40
 leading-snug text-right"
                >
                  0.08 ETH
                </p>
              </div>
              <div className="flex flex-row gap-10">
                <p
                  className="
                m-10 
                -mt-1
                -mr-2
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594] md:text-5xl lg:text-6xl 
                dark:text-white      
                inline-block
                bg-clip-text
 leading-snug
                "
                >
                  Whitelist mint - coming soon
                </p>
                <button className="w-36 text-white border-3 text-2xl font-bold  h-14 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 -mt-5">
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
            mt-18
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
            -mt-6
            mb-16
            text-lg
            font-semibold 
            tracking-tight 
            leading-none 
            text-[#7B8594]
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

      <div className=" flex flex-row sm:flex-col">
        <div className="w-[450px] h-[680px]  bg-[#1E0F2F] rounded-lg ml-10 items-center justify-between ">
          <div className="w-4/5 md:w-48 md:h-auto md:rounded-none m-5 rounded  mx-auto">
            <LandsitesCarousel />
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Land Site NFTs
            </span>
            <span className="text-[#7B8594] text-lg">
              Earn 60 XARA per month through staking
            </span>
          </p>

          <div className="flex flex-col m-10 -mt-4 -mb-4">
            <p>
              <span className="text-[#7B8594] font-normal text-lg mr-48">
                ETH Price:
              </span>
              <span className="text-[#7B8594] text-lg">0.20 ETH</span>
            </p>

            <p>
              <span className="text-[#7B8594] font-normal text-lg mr-44">
                XARA Price:
              </span>
              <span className="text-[#7B8594] text-lg">250 XARA</span>
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
            <BuildingCarousel />
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Building NFTs
            </span>
            <span className="text-[#7B8594] text-lg">
              Earn 80 XARA per month through staking
            </span>
          </p>

          <div className="flex flex-col m-10 -mt-4 -mb-4">
            <p>
              <span className="text-[#7B8594] font-normal text-lg mr-48">
                ETH Price:
              </span>
              <span className="text-[#7B8594] text-lg">0.25 ETH</span>
            </p>

            <p>
              <span className="text-[#7B8594] font-normal text-lg mr-44">
                XARA Price:
              </span>
              <span className="text-[#7B8594] text-lg">300 XARA</span>
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
            <MixCarousel />
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Land & Building NFTs
            </span>
            <span className="text-[#7B8594] text-lg">
              Earn 185 XARA per month through staking
            </span>
          </p>

          <div className="flex flex-col m-10 -mt-4 -mb-4">
            <p>
              <span className="text-[#7B8594] font-normal text-lg mr-48">
                ETH Price:
              </span>
              <span className="text-[#7B8594] text-lg">0.40 ETH</span>
            </p>

            <p>
              <span className="text-[#7B8594] font-normal text-lg mr-44">
                XARA Price:
              </span>
              <span className="text-[#7B8594] text-lg">500 XARA</span>
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
      <p className="text-[#7B8594] m-10 text-xl">
        Purchase a Land Site and Building Combo for a 10% discount and earn 25%
        more XARA from staking
      </p>
      <div className="flex flex-row mb-10 pb-16">
      <img src="/eth.svg" style={{color: 'white'}} className="h-20 m-10 -mb-10" />
      <img src="/binance.svg" className="h-48 m-10 -mb-10 -mt-1" />
      <img src="/openSea.svg" className="h-20 m-10 -mb-10" />
      </div>
    </div>
  );
};
