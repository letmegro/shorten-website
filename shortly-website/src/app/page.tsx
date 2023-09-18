import Image from 'next/image'
import logo from '../../public/images/logo.svg'

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
    </main>
  );
}
