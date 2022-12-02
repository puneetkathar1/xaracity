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
              <source src="https://media.githubusercontent.com/media/puneetkathar1/xaracity/master/public/xaracity.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <button className="z-10 absolute text-white h-20 w-60 rotate-90 rounded-lg text-2xl bg-[#9E1DA1] left-0 top-1/2 -ml-20">
            View Map
          </button>
          <button className="z-10 absolute text-white h-20 w-60 -rotate-90 rounded-lg text-2xl bg-[#9E1DA1] right-0 top-1/2 -mr-20">
            Enter Demo
          </button>
        </div>

        <div className="w-[90%] relative flex flex-col bg-[#0b091a] rounded border-t-1 border-slate-500 items-center">
          <Box sx={{ width: "100%" }}>
            <TabPanel value={value} index={0}>
              <div className="flex flex-row">
                <div className=" flex flex-col pt-32 pb-20 ml-10">
                  <h1
                    className="
            m-2
            ss:text-[72px]
            ss:leading-[100px]
            text-4xl
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
                    Ecosystem overview1
                  </h1>

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
                    - Bid, Buy, and Sell NFTs or Rent Virtual Apartments via the
                    Xara City Market Place
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
                    - Stake NFTs in the Xara City Play-To-Earn property
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
                    - Spend XARA earned from staking in the Xaraverse
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
                    - Swap or Trade USD for XARA to spend in-game, funds
                    Liquidity Pools to earn yield on trading dees, or stake XARA
                    tp earn on APR.
                  </p>
                </div>

                <div className="aspect-w-16 aspect-h-9 pt-32 pb-20 rounded-lg desktop:ml-52 m-20">
                  <iframe
                    src="https://www.youtube.com/embed/Z_BiOBlOnj8"
                    width="640"
                    height="360"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            ss:text-[72px]
            ss:leading-[100px]
            text-4xl
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
                    Ecosystem overview2
                  </h1>

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
                    - Bid, Buy, and Sell NFTs or Rent Virtual Apartments via the
                    Xara City Market Place
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
                    - Stake NFTs in the Xara City Play-To-Earn property
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
                    - Spend XARA earned from staking in the Xaraverse
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
                    - Swap or Trade USD for XARA to spend in-game, funds
                    Liquidity Pools to earn yield on trading dees, or stake XARA
                    tp earn on APR.
                  </p>
                </div>

                <div className="aspect-w-16 aspect-h-9 pt-32 pb-20 rounded-lg desktop:ml-52 m-20">
                  <iframe
                    src="https://www.youtube.com/embed/Z_BiOBlOnj8"
                    width="640"
                    height="360"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            ss:text-[72px]
            ss:leading-[100px]
            text-4xl
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
                    Ecosystem overview3
                  </h1>

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
                    - Bid, Buy, and Sell NFTs or Rent Virtual Apartments via the
                    Xara City Market Place
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
                    - Stake NFTs in the Xara City Play-To-Earn property
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
                    - Spend XARA earned from staking in the Xaraverse
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
                    - Swap or Trade USD for XARA to spend in-game, funds
                    Liquidity Pools to earn yield on trading dees, or stake XARA
                    tp earn on APR.
                  </p>
                </div>

                <div className="aspect-w-16 aspect-h-9 pt-32 pb-20 rounded-lg desktop:ml-52 m-20">
                  <iframe
                    src="https://www.youtube.com/embed/Z_BiOBlOnj8"
                    width="640"
                    height="360"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            ss:text-[72px]
            ss:leading-[100px]
            text-4xl
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
                    Ecosystem overview4
                  </h1>

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
                    - Bid, Buy, and Sell NFTs or Rent Virtual Apartments via the
                    Xara City Market Place
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
                    - Stake NFTs in the Xara City Play-To-Earn property
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
                    - Spend XARA earned from staking in the Xaraverse
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
                    - Swap or Trade USD for XARA to spend in-game, funds
                    Liquidity Pools to earn yield on trading dees, or stake XARA
                    tp earn on APR.
                  </p>
                </div>

                <div className="aspect-w-16 aspect-h-9 pt-32 pb-20 rounded-lg desktop:ml-52 m-20">
                  <iframe
                    src="https://www.youtube.com/embed/Z_BiOBlOnj8"
                    width="640"
                    height="360"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </TabPanel>
          </Box>
          <span className="absolute right-12 bottom-10 mr-10 mt-20">
            <button
              onClick={() => {
                if (value == 3) {
                  setValue(0);
                } else {
                  setValue(value + 1);
                }
              }}
              className=" h-20 w-20 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-4xl rounded-full item-center mt-15"
            >{`>`}</button>
          </span>
        </div>
      </div>
    </section>
  );
};
