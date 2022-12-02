import { Footer } from 'flowbite-react'

export const FooterMain = () => {
  return (

    <section id="footer" className=" w-[100vw]  flex laptop:flex-col flex-col sm:py-6 justify-center items-center relative">
    <Footer container={true} className="bg-gradient-radial">
  <div className="w-full text-center" >
    <div className=" w-full justify-between flex flex-col sm:flex sm:justify-between laptop:flex lapyop:grid-cols-1">
      <div className='m-10'>
        <img
        className=' w-52'
          // href=""
          src="/xara_logo.png"
          alt="Xara Logo"
          // name="Xara"
        />
        <p className='text-gray-400 text-start mt-2 pl-4 ml-16'>Xaraverse@gmail.com</p>
      </div>
      <div className="grid grid-cols-3  sm:mt-4 sm:grid-cols-3 sm:gap-6 items-center">
        <div className='ml-auto'>
          <Footer.Title title="Info"  className="text-[#4258CF] normal-case" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Home
            </Footer.Link>
            <Footer.Link href="#">
              Ecosystem
            </Footer.Link>
            <Footer.Link href="#">
              FAQ
            </Footer.Link>
            <Footer.Link href="#">
              Team
            </Footer.Link>
            <Footer.Link href="#">
              Gitbook
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Buy" className="text-[#4258CF] normal-case -mt-8"  />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Market Place
            </Footer.Link>
            <Footer.Link href="#">
              Minting
            </Footer.Link>
            <Footer.Link href="#">
              Collection
            </Footer.Link>
            <Footer.Link href="#">
              Xaraverse
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        
        <div className='mr-auto'>
          <Footer.Title title="Follow Us" className="text-[#4258CF] normal-case -mt-6" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Discord
            </Footer.Link>
            <Footer.Link href="#">
              Twitter
            </Footer.Link>
            <Footer.Link href="#">
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              Telegram
            </Footer.Link>
          </Footer.LinkGroup>
          
        </div>
        <div className='ml-auto right-32 top-28 absolute'>
          <span className="flex flex-row" >
            <Footer.Title title="REVIEWED ON"  className="text-[#4258CF] normal-case mr-5" />
            <img alt="" src="/star.png" className="h-5 w-5" />
            <img alt="" src="/star.png" className="h-5 w-5" />
            <img alt="" src="/star.png" className="h-5 w-5" />
            <img alt="" src="/star.png" className="h-5 w-5" />
            <img alt="" src="/star.png" className="h-5 w-5" />
          </span>
          <Footer.LinkGroup col={true}>
            <Footer.Link href='#' className="ml-auto right-32 -mt-4">
              135 Reviews
            </Footer.Link>
            </Footer.LinkGroup>
        </div>
      </div>
    </div>
    
    <div className="navbar-line mt-10 mb-8 mx-auto" />
    <div className="w-full flex flex-row justify-center text-center sm:flex sm:items-center sm:justify-between">
      <p className='text-gray-400 tracking-wider indent-2'> Xara City 2022 </p>
      <p className='text-gray-400 tracking-wider indent-2'>  | Policy </p>
      <p className='text-gray-400 tracking-wider indent-2'>  | Terms  & Conditions</p>
      <p className='text-gray-400 tracking-wider indent-2'>  | Disclaimer </p>
      
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
      
      </div>
    
    </div>
    {/* <div className='right-28 top-32 absolute text-white' >
      Reviewed On
    </div> */}
  </div>
</Footer>

    </section>
    
  )
}

