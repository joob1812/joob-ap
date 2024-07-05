import {
  IoLogoGithub, IoLogoYoutube, IoLogoLinkedin,
  IoLogoFacebook, IoLogoWhatsapp
} from "react-icons/io5";
import { useEffect, useState } from 'react'



function SideBar() {

  const [scrollTop, setScroollTop] = useState<unknown>();
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100;

    setScroollTop(scrolled)
  }

  return (
    <div
      className='w-[50px] grid grid-cols-2 
    h-[320px] border-r dark:border-gray-600 border-gray-300 rounded-r-3xl fixed mt-[200px]
    justify-around items-center bg-white shadow-sm dark:bg-gray-900 text-gray-900 dark:text-gray-200'
    >
      <div className='col-span-1 flex flex-col gap-7 ml-2 text-[20px]'>
        <a href="https://wa.me/784641763?text=Bonjour">
          <IoLogoWhatsapp className='cursor-pointer text-green-600 shadow-lg h-8 w-8 rounded-full p-2 shadow-gray-100 bg-gray-50 dark:shadow-gray-950 dark:bg-gray-900 hover:scale-110 transition-all' /></a>
        <IoLogoGithub className='cursor-pointer text-gray-800 dark:text-gray-400 shadow-lg h-8 w-8 rounded-full p-2 shadow-gray-100 bg-gray-50 dark:shadow-gray-950 dark:bg-gray-900 hover:scale-110 transition-all' />
        <a href="https://youtube.com/@joob18.12?si=opf7UF8NS23-FdwO">
          <IoLogoYoutube className='cursor-pointer text-red-600 shadow-lg h-8 w-8 rounded-full p-2 shadow-gray-100 bg-gray-50 dark:shadow-gray-950 dark:bg-gray-900 hover:scale-110 transition-all' /></a>
        <IoLogoLinkedin className='cursor-pointer text-cyan-600 shadow-lg h-8 w-8 rounded-full p-2 shadow-gray-100 bg-gray-50 dark:shadow-gray-950 dark:bg-gray-900 hover:scale-110 transition-all' />
        <IoLogoFacebook className='cursor-pointer text-blue-600 shadow-lg h-8 w-8 rounded-full p-2 shadow-gray-100 bg-gray-50 dark:shadow-gray-950 dark:bg-gray-900 hover:scale-110 transition-all' />
      </div>

      <div className='
    w-1 bg-gray-100 dark:bg-gray-700 fixed
    ml-[47px] h-[280px]
    '>
        <div className='bg-gradient-to-t from-yellow-600 to-yellow-400 transition-all ease-out duration-1000' style={{ height: `${scrollTop}%` }}>

        </div>
      </div>
    </div>
  )
}

export default SideBar
