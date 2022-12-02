import { Carousel, Accordion } from "flowbite-react";

export const Xaraverse = () => {
  return (
    <section
      className=" w-[100vw] flex md:flex-row flex-col sm:py-16  justify-start items-start pt-32 bg-[#020117]"
    >
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
          <img
            src="/xaraverse.png"
            className="w-[100vw] mb-0 items-start justify-start"
          ></img>
          <button className="absolute text-white h-20 w-60 -rotate-90 rounded-lg text-2xl bg-[#9E1DA1] right-0 top-1/2 -mr-20">
            Enter Demo
          </button>
        </div>

        <div className="w-[100%] relative flex flex-col bg-[#0b091a] rounded border-t-1 border-slate-500 items-center">
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
                Ecosystem overview
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
                - Stake NFTs in the Xara City Play-To-Earn property development
                game and earn XARA as a staking reward
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
                - Spend XARA earned from staking in the Xaraverse (metaverse) on
                VR experience such as shopping, casino, games, educational
                seminars and trading, theme parks and more...
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
                - Swap or Trade USD for XARA to spend in-game, funds Liquidity
                Pools to earn yield on trading dees, or stake XARA tp earn on
                APR.
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
          <span className="absolute right-12 bottom-10 mr-10 mt-20" >
            <button className="h-20 w-20 text-white text-4xl rounded-full border-2 border-purple-700 m-5">{`<`}</button>
            <button className=" h-20 w-20 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-4xl rounded-full mt-15">{`>`}</button>
          </span>
        </div>
      </div>
    </section>
  );
};
