import { Dropdown } from "flowbite-react";

export const NFT = (props: any) => {
  return (
    <div className="container flex flex-col w-[70vw]   justify-start items-center mt-14">
      <h1
        className="
            m-10 
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

      <div className=" w-full h-[700px] flex flex-row bg-[#1E0F2F] rounded-lg ml-5 mr-5 items-center relative">
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
          <div className="h-96 w-full md:w-48 md:h-auto md:rounded-none ml-5 mr-5 mx-auto">
            <img
              src="/mint_preview.png"
              alt=""
              className="h-96 w-full md:w-48 md:h-auto md:rounded-none mx-auto"
            />
          </div>
          <div className="h-20 w-full md:w-48 md:h-auto text-center text-2xl text-white font-bold p-2 rounded-b-lg ml-5 mr-5 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Whitelist mint
            <p>10d : 21h : 17m : 38s</p>
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
            The Xarian NFTs are made up of 10,000 avatars, each belong to 1 of 5
            tribes (DAO's)
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

      <h1
        className="
            m-10 
            mt-52
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
        <div className="w-[450px] h-[680px]  bg-[#1E0F2F] rounded-lg ml-10 items-center justify-between">
          <img
            className=" w-4/5 md:w-48 md:h-auto md:rounded-none mt-5 rounded  mx-auto"
            src="/alpha_card.jpg"
            alt=""
          />
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
            <Dropdown label="Currency" style={{backgroundColor: 'transparent', border: '2px solid #8840C4'}}>
              <Dropdown.Item>Ethereum</Dropdown.Item>
              <Dropdown.Item>$XARA</Dropdown.Item>
            </Dropdown>

            <button className="w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Buy
            </button>
          </div>
        </div>

        <div className=" w-[450px] h-[680px]  bg-[#1E0F2F] rounded-lg ml-10 items-center">
          <img
            className=" w-4/5 md:w-48 md:h-auto md:rounded-none mt-5 rounded  mx-auto"
            src="/house.png"
            alt=""
          />
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
            <Dropdown label="Currency" style={{backgroundColor: 'transparent', border: '2px solid #8840C4'}}>
              <Dropdown.Item>Ethereum</Dropdown.Item>
              <Dropdown.Item>$XARA</Dropdown.Item>
            </Dropdown>

            <button className="w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Buy
            </button>
          </div>
        </div>

        <div className=" w-[450px] h-[680px]  bg-[#1E0F2F] rounded-lg ml-10 items-center">
          <img
            className=" w-4/5 md:w-48 md:h-auto md:rounded-none mt-5 rounded  mx-auto"
            src="/alpha_card.jpg"
            alt=""
          />
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
            <Dropdown label="Currency" style={{backgroundColor: 'transparent', border: '2px solid #8840C4'}}>
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
      <img src="/blockchains.png" className="m-32" />
    </div>
  );
};
