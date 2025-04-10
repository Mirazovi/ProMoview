import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const LeftMovieDetails = () => {
  return (
    <div>
        <Image width={500} height={500} src={'/images/demo.jpg'} alt='demo' className='w-full h-[500px] rounded-2xl'/>
        {/* div 2  */}
        <div className="border-2 border-[#e11d48] my-10 bg-[#1c1917] rounded-2xl">
        <h3 className="text-2xl font-semibold flex gap-2 items-center p-4 text-white rounded-t-2xl bg-[#e11d48]"><Download/> Download Movie</h3>

        <div className="flex justify-between items-center m-3  p-3 rounded-xl">
          <div className='text-white'>
            <p className="font-medium">720p</p>
            <p className="text-sm text-gray-400">1.2 GB</p>
          </div>
          <button className="rounded-lg shadow-2xl font-semibold flex gap-2 items-center px-4 py-2 text-white bg-[#e11d48]"><Download/>Download</button>
        </div>

        <div className="flex justify-between items-center bg-[#26191a] m-3 p-3 rounded-xl">
          <div className='text-white'>
            <p className="font-medium">1080p</p>
            <p className="text-sm text-gray-400">2.4 GB</p>
          </div>
          <button className="rounded-lg shadow-2xl font-semibold flex gap-2 items-center px-4 py-2 text-white bg-[#e11d48]"><Download/>Download</button>
        </div>

        <div className="flex justify-between items-center m-3  p-3 rounded-xl">
          <div className='text-white'>
            <p className="font-medium">4K</p>
            <p className="text-sm text-gray-400">5.8 GB</p>
          </div>
          <button className="rounded-lg shadow-2xl font-semibold flex gap-2 items-center px-4 py-2 text-white bg-[#e11d48]"><Download/>Download</button>
        </div>

        <p className="text-sm text-white text-center m-3 p-3 rounded-lg mt-2 bg-[#1f1c1b]">
          All downloads are virus-free and high quality &raquo;
        </p>
      </div>
    </div>
  )
}

export default LeftMovieDetails