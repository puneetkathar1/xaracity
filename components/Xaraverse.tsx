import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Xaraverse = () => {
  const [value, setValue] = React.useState(0);

  return (
    <section className=" w-[100vw] flex md:flex-row flex-col sm:py-16  justify-start items-start pt-18 bg-[#020117]">
      <div className="flex flex-col justify-start items-center">
        <h1
          className="
            flex-1
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
            mb-5
            "
        >
          Enter the Xaraverse
        </h1>
        <p
          className=" 
            font-semibold 
            text-[#7B8594]
            dark:text-gray-400
            text-xl
            m-10
            -mt-4
            "
        >
          A hyper-realistic, digital world with fully Immersive 3D virtual
          experience
        </p>

        <div className="w-[100vw] mb-0 items-start justify-start relative">
          <div className="relative z-[5] w-[100vw] mb-0 items-start justify-start">
            <video width="100%" autoPlay muted controls={false} loop>
              <source
                src="https://media.githubusercontent.com/media/puneetkathar1/xaracity/master/public/xaracity.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <button className="z-10 absolute text-white h-16 w-60 rotate-90 rounded-lg text-2xl bg-[#304AB1] left-0 top-1/2 -ml-20">
            View Map
          </button>
          <button className="z-10 absolute text-white h-16 w-60 -rotate-90 rounded-lg text-2xl bg-[#9E1DA1] right-0 top-1/2 -mr-20">
            Enter Demo
          </button>
        </div>

        <div className="relative flex flex-col bg-[#0b091a] rounded border-t-1 border-slate-500 items-center">
          <Box sx={{ width: "100%" }}>
            <TabPanel value={value} index={0}>
              <div className="flex flex-row">
                <div className=" flex flex-col pt-32 pb-20 ml-10">
                  <h1
                    className="
                    m-2
                    font-bold 
                    text-3xl
                    text-gray-900 md:text-5xl lg:text-6xl 
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                    inline-block
                    text-transparent
                    bg-clip-text
                    mb-5
            "
                  >
                    XARA CITY ECOSYSTEM OVERVIEW
                  </h1>
                  <div className="w-full">
                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                
                "
                    >
                      &#8226; Bid, Buy, and Sell NFTs or Rent Virtual Apartments via
                      the Xara City Market Place
                    </p>

                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                "
                    >
                      &#8226; Stake NFTs in the Xara City Play-To-Earn property
                      development game and earn XARA as a staking reward
                    </p>

                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                "
                    >
                      &#8226; Spend XARA earned from staking in the Xaraverse
                      (metaverse) on VR experience such as shopping, casino,
                      games, educational seminars and trading, theme parks and
                      more...
                    </p>

                    <p
                      className="
                m-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594]
                dark:text-white 
                inline-block
                bg-clip-text
            tracking-tight 
 leading-snug
                "
                    >
                      &#8226; Swap or Trade USD for XARA to spend in-game, funds
                      Liquidity Pools to earn yield on Trading fees, or take a
                      DeFi loan..
                    </p>
                  </div>
                </div>

                <div className="aspect-w-16 aspect-h-9 pt-20 pb-20 rounded-xl m-20 ">
                  <iframe
                    src="https://www.youtube.com/embed/Z_BiOBlOnj8"
                    width="640"
                    height="360"
                    aria-controls="0"
                    frameBorder="0"
                    className="rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="flex flex-row">
                <div className=" flex flex-col pt-32 pb-20 ml-10">
                  <h1
                    className="
            m-2
            font-bold 
            text-3xl
            text-gray-900 md:text-5xl lg:text-6xl 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            mb-5
            pt-4
            "
                  >
                    PLAY-TO-EARN PROPERTY DEVELOPMENT BLOCKCHAIN GAME
                  </h1>
                  <div className="w-full">
                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                
                "
                    >
                      &#8226; Stake Land Site NFTs and Building NFTs to earn up to 185
                      $Xara per month as a staking reward
                    </p>

                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                "
                    >
                      &#8226; Fractionalize a Land Site and Building NFT set into 50,
                      75 or 100 Key NFTs to sell or stake and earn up to 250
                      $Xara per month
                    </p>

                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                "
                    >
                      &#8226; Upgrade Key NFTs into VR NFTS with Virtual Apartments to
                      sell, rent out or stake and earn up to 315 $Xara per month
                    </p>
                  </div>
                </div>

                <div className="aspect-w-16 aspect-h-9 pt-20 pb-20 rounded-xl m-20 ">
                  <iframe
                    src="https://www.youtube.com/embed/p_GDohB4F14"
                    width="640"
                    height="360"
                    aria-controls="0"
                    frameBorder="0"
                    className="rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="flex flex-row">
                <div className=" flex flex-col pt-32 pb-20 ml-10">
                  <h1
                    className="
                    m-2
                    font-bold 
                    text-3xl
                    text-gray-900 md:text-5xl lg:text-6xl 
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                    inline-block
                    text-transparent
                    bg-clip-text
                    mb-5
                    pt-4
            "
                  >
                    ENTER THE XARAVERSE – A FULLY IMMERSIVE 3D VR METAVERSE
                  </h1>
                  <div className="w-full">
                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                
                "
                    >
                      &#8226; The Xaraverse is a Hyper-realistic digital world with
                      fully Immersive 3D Virtual Experiences, coupled with a
                      fully functioning shared economy.
                    </p>

                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                "
                    >
                      &#8226; The Xaraverse is an always-on digital environment where
                      visitors can shop, socialise, train for their jobs, play
                      games, take classes, attend meetings, have cultural
                      experiences and more…
                    </p>

                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                "
                    >
                      &#8226; The Xaraverse is poised to radically change how we work,
                      play and connect. Spend $Xara earned in-game on VR Experiences…
                      
                    </p>
                  </div>
                </div>

                <div className="aspect-w-16 aspect-h-9 pt-20 pb-20 rounded-xl m-20 ">
                  <iframe
                    src="https://www.youtube.com/embed/D8PAF0FzwuM"
                    width="640"
                    height="360"
                    aria-controls="0"
                    frameBorder="0"
                    className="rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="flex flex-row">
                <div className=" flex flex-col pt-32 pb-20 ml-10">
                  <h1
                    className="
                    m-2
                    font-bold 
                    text-3xl
                    text-gray-900 md:text-5xl lg:text-6xl 
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                    inline-block
                    text-transparent
                    bg-clip-text
                    mb-5
            "
                  >
                    XARA CITY MARKET PLACE, EXCHANGE, LIQUIDITY POOLS AND
                    TRADING PLATFORM
                  </h1>
                  <div className="w-full">
                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                
                "
                    >
                      &#8226; Buy or Bid on Xara City NFTS, Fractionalized Assets or
                      Rare One of One NFTS…
                    </p>

                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                "
                    >
                      &#8226; Rent Virtual Apartments in the Xaraverse…
                    </p>

                    <p
                      className="
              m-2
              text-xl
              font-thin
              tracking-tight 
              leading-none 
              text-[#7B8594]
              dark:text-white 
              inline-block
              bg-clip-text
          tracking-tight 
leading-snug
                "
                    >
                      &#8226; Mint Event or Raffle Tickets as NFTS…
                    </p>

                    <p
                      className="
                m-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594]
                dark:text-white 
                inline-block
                bg-clip-text
            tracking-tight 
 leading-snug
                "
                    >
                      &#8226; Get White Listed for Future Projects…
                    </p>
                    <p
                      className="
                m-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594]
                dark:text-white 
                inline-block
                bg-clip-text
            tracking-tight 
 leading-snug
                "
                    >
                      &#8226; Swap USD for $Xara to spend in the Xara City Market
                      Place or Xaraverse
                    </p>
                    <p
                      className="
                m-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594]
                dark:text-white 
                inline-block
                bg-clip-text
            tracking-tight 
 leading-snug
                "
                    >
                      &#8226; Fund Liquidity pools to earn yield on trading fees or
                      stake LP tokens in Farms to earn APR
                    </p>
                    <p
                      className="
                m-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-[#7B8594]
                dark:text-white 
                inline-block
                bg-clip-text
            tracking-tight 
 leading-snug
                "
                    >
                      &#8226; Stake $Xara to earn an APR, take a DeFi loan or trade
                      $Xara on the trading platform
                    </p>
                  </div>
                </div>

                <div className="aspect-w-16 aspect-h-9 pt-32 pb-20 rounded-xl m-20 ">
                  <iframe
                    src="https://www.youtube.com/embed/X_br-ntZqOo"
                    width="640"
                    height="360"
                    aria-controls="0"
                    frameBorder="0"
                    className="rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </TabPanel>
          </Box>
          <span className="absolute right-16 bottom-10 p-10 justify-between">
            <button
              onClick={() => {
                if (value == 0) {
                  setValue(3);
                } else {
                  setValue(value - 1);
                }
              }}
              className=" h-12 w-12 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-4xl rounded-full item-center p-2 m-4"
            >
              <img src="/icons8-forward-100.png" className="rotate-180" />
            </button>
            <button
              onClick={() => {
                if (value == 3) {
                  setValue(0);
                } else {
                  setValue(value + 1);
                }
              }}
              className=" h-12 w-12 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-4xl rounded-full item-center p-2 m-4"
            >
              <img src="/icons8-forward-100.png" />
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};
