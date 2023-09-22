import Image from 'next/image';
import logo from 'public/images/logo.svg';
import illustration from "public/images/illustration-working.svg";
import iconBrandRec from "public/images/icon-brand-recognition.svg";
import iconDetaledRec from "public/images/icon-detailed-records.svg";
import iconFullyCus from "public/images/icon-fully-customizable.svg";
import fb from "public/images/icon-facebook.svg";
import twitterX from "public/images/icon-twitter.svg";
import pinterest from "public/images/icon-pinterest.svg";
import instagram from "public/images/icon-instagram.svg";
//@ts-ignore
import form from './errMsg.tsx';
form
//@ts-ignore
import navToggle from './toggleScript.tsx';
navToggle

export default function Home() {
  
  return (
    <main>
      {/* nav */}
      <nav className='relative container mx-auto p-6'>
        {/* flex container */}
        <div className='flex items-center justify-between'>
          {/* logo container/menu */}
          <div className='flex items-center space-x-20'>
            <Image src={logo} alt=''/>
            <div className='hidden md:flex space-x-8 font-bold'>
              <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Features</a>
              <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</a>
              <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Resources</a>
            </div>
          </div>
          {/* right buttons menu */}
          <div className='hidden md:flex items-center space-x-6 font-bold text-grayishViolet'>
            <div className='hover:text-veryDarkViolet cursor-pointer'>
              Login
            </div>
            <a href='#' className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'>Sign up</a>
          </div>
          <div className='md:hidden'>
              <button id='menu-btn' type='button' className='z-40 block hamburger md:hidden focus:outline-none'>
                <span className='hamTop'></span>
                <span className='hamMiddle'></span>
                <span className='hamBottom'></span>
              </button>
            </div>
        </div>
        {/* add drop menu */}
        <div id="menu" className="absolute hidden md:hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center hover:text-cyan">Features</a>
            <a href="#" className="w-full text-center hover:text-cyan">Pricing</a>
            <a href="#" className="w-full text-center hover:text-cyan">Resources</a>
            <a href="#" className="w-full pt-6 border-t border-gray-400 text-center hover:text-cyan">Login</a>
            <a href="#" className="w-full py-3 text-center rounded-full bg-cyan hover:opacity-70">Sign Up</a>
          </div>
        </div>
      </nav>
      <section id='hero'>
        <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row'>
          {/* content */}
          <div className='flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2'>
            <h1 className='text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>
              More than just shorter links
            </h1>
            <p className='text-2xl text-center text-gray-400 lg:max-w-md lg:text-left'>
              Build your brand{`'`}s recognition and get detailed insights on how your links are performing.
            </p>
            <div className='mx-auto lg:mx-0'>
              <a className='cursor-pointer py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70'>
                Get Started
              </a>
            </div>
          </div>
          {/* image */}
          <div className='mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0'>
            <Image src={illustration} alt=''/>
          </div>
        </div>
      </section>
      {/* sorten sec */}
      <section id='shorten' className='relative bg-gray-100'>
        {/* shorten container */}
        <div className='max-w-4xl mx-auto p-6 space-y-6'>
          <form id='link-form' className='relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3'>
            <input id='link-input' type='text' className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none' placeholder='Shorten URL'/>
            <button id='shorten-btn' className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'>
              Shorten
            </button>
            {/* error message div */}
            <div id='err-msg' className='absolute left-7 bottom-3 text-red text-sm italic'></div>
          </form>
          {/* links */}
          {/* link 1 */}
          <div className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'>
            <p className='font-bold text-center text-veryDarkViolet md:text-left'>
              https://frontendmentor.io
            </p>
            <div className='flex-col flex items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
              <div className='font-bold text-cyan'>
                https://rel.ink/k4IKyk
              </div>
              <button className='p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none'>
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* stats section */}
      <section id='stats' className='py-24 bg-gray-100'>
        <div className='container mx-auto px-3'>
          <h2 className='text-4xl mb-6 font-bold text-center'>
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
      </section>
      {/* feature box sections */}
      <section id="features" className='pb-32 bg-gray-100'>
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* horizontal line */}
          <div className="hidden absolute top-24 left-16 h-3 bg-cyan md:block w-10/12"></div>
          {/* vertical */}
          <div className="absolute left-1/2 w-2 h-full -ml-1 bg-cyan md:hidden"></div>
          {/* box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* container */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <Image src={iconBrandRec} alt=''/>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click.
              Generic links don{`'`}t mean a thing. Branded links help install confidence in your content.
            </p>
          </div>
          {/* box 2 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8">
            {/* container */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <Image src={iconDetaledRec} alt=''/>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links.
              Knowing when and where people engage with your content helps make better and informed decisions for you business.
            </p>
          </div>
           {/* box 3 */}
           <div className="relative duration-500 flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-16">
            {/* container */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <Image src={iconFullyCus} alt=''/>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through customizable links, supercharging audiance engagment.
            </p>
          </div>
        </div>
      </section>
      <section id="cta" className="py-24 bg-darkViolet">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-white text-center">
            Boost your links today
          </h5>
          <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </section>
      <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          <Image src={logo} alt=''/>

          {/* menus container */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Features</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Link Shortening</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Branded Links</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Analytics</a>
              </div>
            </div>
            {/* menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Resources</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Blog</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Developers</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Support</a>
              </div>
            </div>
            {/* menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Company</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">About</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Our team</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Careers</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Contact</a>
              </div>
            </div>
          </div>
          {/* socials */}
          <div className="flex space-x-6">
          
                {/* icon 1 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image className='h-6 ficon' src={fb} alt=''></Image>
                  </a>
                </div>
                {/* icon 2 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image className='h-6 ficon' src={instagram} alt=''></Image>
                  </a>
                </div>
                {/* icon 3 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image className='h-6 ficon' src={pinterest} alt=''></Image>
                  </a>
                </div>
                {/* icon 4 */}
                <div className='h-7 ficon group bg-white'>
                  <a href='#'>
                    <Image className='h-8 ficon' src={twitterX} alt=''></Image>
                  </a>
                </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
