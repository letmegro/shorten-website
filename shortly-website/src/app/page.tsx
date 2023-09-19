import Image from 'next/image'
import logo from 'public/images/logo.svg'
import illustration from "public/images/illustration-working.svg";

import form from './errMsg.tsx';
form
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
            <div className='hidden lg:flex space-x-8 font-bold'>
              <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Features</a>
              <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</a>
              <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Resources</a>
            </div>
          </div>
          {/* right buttons menu */}
          <div className='hidden lg:flex items-center space-x-6 font-bold text-grayishViolet'>
            <div className='hover:text-veryDarkViolet'>
              Login
            </div>
            <a href='#' className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'>Sign up</a>
          </div>
          {/* add ham menu */}
        </div>
        {/* add drop menu */}
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
            <button className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'>
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
          {/* link 2 */}
          <div className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'>
            <p className='font-bold text-center text-veryDarkViolet md:text-left'>
              https://twitter.com/frontendmentor
            </p>
            <div className='flex-col flex items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
              <div className='font-bold text-cyan'>
                https://rel.ink/k9Gyyk
              </div>
              <button className='p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none'>
                Copy
              </button>
            </div>
          </div>
          {/* link 3 */}
          <div className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'>
            <p className='font-bold text-center text-veryDarkViolet md:text-left'>
              https://linkedin.com/frontend-mentor
            </p>
            <div className='flex-col flex items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
              <div className='font-bold text-cyan'>
                https://rel.ink/k0pKyk
              </div>
              <button className='p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none'>
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
