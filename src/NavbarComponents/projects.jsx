import React from 'react'
import Image1 from '../Assets/Portfolio.png'
import Image2 from '../Assets/TextToSpeech.png'
import Image3 from '../Assets/QuickSign.png'
import google_gemini from '../Assets/google_gemini.png'
const projects = () => {
  return (
    <div className='flex flex-wrap flex-col items-center justify-center '>
          <div>
            <h2 className='text-2xl font-bold-700 mb-12 font-semibold'>Featured Projects</h2>
          </div>
          <div className=' grid lg:grid-cols-3  md:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 gap-8 max-w-[1200px]'>
            <div className=' bg-gray-100 border hover:shadow-lg p-2 overflow-hidden space-y-3 rounded relative'>
              <div>
                <img src={Image1} alt="" className=' rounded'/>
              </div>
              <div className='space-y-4'>
                <h2 className='mt-5 text-xl'>Personal portfolio</h2>
                <p className='mt-19 text-black/60'>A personal portfolio showcasing my skills, projects, and journey as a developer.
                    Designed with a clean UI and smooth user experience to reflect my style.</p>
              </div>
              <div className='flex space-x-3'>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>HTML </span>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>Taiwind CSS </span>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>React JS </span>
              </div>
              <div className='flex space-x-5 text-blue-900'>
                <button className='w-full h-10 cursor-pointer overflow-hidden rounded-lg   hover:bg-purple-900 hover:text-white  hover:bg-opacity-90  text-purple-900 shadow-md my-2 border-2 border-purple-900' ><a href="">Live site</a></button>
                <button className='w-full h-10 cursor-pointer overflow-hidden rounded-lg   hover:bg-purple-500 hover:text-white  hover:bg-opacity-90  text-purple-900 shadow-md my-2 border-2 border-purple-500'><a href="">View Code </a></button>
              </div>
            </div>
            <div className='bg-gray-100 border hover:shadow-lg p-2 overflow-hidden space-y-3 rounded relative'>
              <div>
                <img src={Image2} alt="" className='rounded'/>
              </div>
              <div className='space-y-4'>
                <h2 className='mt-5 text-xl'>Text To Speech</h2>
                <p className='mt-19 text-black/60'>Type your text and instantly hear it come alive through high-quality speech output.
Built for seamless interaction and a smooth user experience.”</p>
              </div>
              <div className='flex space-x-3'>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>HTML </span>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>CSS </span>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>JavaScript </span>
              </div>
              <div className='flex space-x-5 text-blue-900'>
                 <button className='w-full h-10 cursor-pointer overflow-hidden rounded-lg   hover:bg-purple-900 hover:text-white  hover:bg-opacity-90  text-purple-900 shadow-md my-2 border-2 border-purple-900' ><a href="https://text-to-speech-nine-henna.vercel.app/">Live site</a></button>
                <button className='w-full h-10 cursor-pointer overflow-hidden rounded-lg   hover:bg-purple-500 hover:text-white  hover:bg-opacity-90  text-purple-900 shadow-md my-2 border-2 border-purple-500'><a href="https://github.com/Reddy-Hanumanth/Text_to_Speech">View Code </a></button>
              </div>
            </div>
            <div className='bg-gray-100 border hover:shadow-lg p-2 overflow-hidden space-y-3 rounded relative'>
              <div>
                <img src={Image3} alt="" className='h-[220px] w-full'/>
              </div>
              <div className='space-y-4 rounded'>
                <h2 className='mt-5 text-xl'>Quick Sign App</h2>
                <p className='mt-19 text-black/60'>A versatile digital signature app built with Canvas, allowing users to draw, customize, and save signatures directly in local storage.
</p>
              </div>
              <div className='flex space-x-3'>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>HTML </span>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>CSS </span>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>JavaScript </span>
              </div>
              <div className='flex space-x-5 text-blue-900'>
                 <button className='w-full h-10 cursor-pointer overflow-hidden rounded-lg   hover:bg-purple-900 hover:text-white  hover:bg-opacity-90  text-purple-900 shadow-md my-2 border-2 border-purple-900' ><a href="https://quick-sign-app-three.vercel.app/">Live site</a></button>
                <button className='w-full h-10 cursor-pointer overflow-hidden rounded-lg   hover:bg-purple-500 hover:text-white  hover:bg-opacity-90  text-purple-900 shadow-md my-2 border-2 border-purple-500'><a href="https://github.com/Reddy-Hanumanth/Quick_sign-app">View Code </a></button>
              </div>
            </div>
            <div className='bg-gray-100 border hover:shadow-lg p-2 overflow-hidden space-y-3 rounded  relative'>
              <div>
                <img src={google_gemini} alt="" />
              </div>
              <div className='space-y-4'>
                <h2 className='mt-5 text-xl'>Google Gemini</h2>
                <p className='mt-19 text-black/60'>A Google Gemini clone featuring interactive AI conversations, real-time responses, and a clean modern interface built with web technologies.</p>
              </div>
              <div className='flex space-x-3'>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>HTML </span>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>CSS </span>
                <span className='bg-purple-300 text-blue-900 rounded-full px-2'>React </span>
              </div>
              <div className='flex space-x-5 text-blue-900'>
                 <button className='w-full h-10 cursor-pointer overflow-hidden rounded-lg   hover:bg-purple-900 hover:text-white  hover:bg-opacity-90  text-purple-900 shadow-md my-2 border-2 border-purple-900' ><a href="https://google-gemini-clone-ncy2.vercel.app/">Live site</a></button>
                <button className='w-full h-10 cursor-pointer overflow-hidden rounded-lg   hover:bg-purple-500 hover:text-white  hover:bg-opacity-90  text-purple-900 shadow-md my-2 border-2 border-purple-500'><a href="https://github.com/Reddy-Hanumanth/google_gemini_clone">View Code </a></button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default projects