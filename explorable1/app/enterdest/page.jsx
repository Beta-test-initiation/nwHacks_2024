import React from 'react'
import Link from 'next/link'


import dynamic from "next/dynamic";

// Importing Map component separately
const Map = dynamic(() => import("./Map.jsx"), {
  ssr: false,
});

const page = () => {
  
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <div className="w-1/2 h-100">
          <Map />
        </div>
        <div className="mt-3">
            <input clasName="w-80 mt-10 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Destination"></input>
            <Link href="/path">
              <button className=" ml-5 bg-[#7975FF] rounded-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Start
              </button>
            </Link>
            
            
        </div>
    </div>
  )
}

export default page