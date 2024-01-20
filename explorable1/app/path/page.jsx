import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex mt-40 items-center justify-center ml-32 '>
        <div className="w-1/2 m">
            <div className="w-96 border-8 border-white/[0.3] rounded-lg p-20">
            <button class="  bg-white/[0.3] border-1 border-[#D95017] rounded-lg text-white font-bold py-2 px-4 rounded " type="button">
                <p>
                    Enable Accessibility mode
                </p>
            </button>
            <div className="mt-10 flex justify-center">
              <Image src="/assets/sound.png" width={130} height={28}/>
            </div>
            
            </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="bg-white/[0.3] rounded-lg flex items-center justify-center gap-8 p-2 w-11/12">
            <p className='text-black '>450m</p>
            <p className='text-black'>4 min</p>
            <p className='text-black'>ETA: 15:32</p>
          </div>
          {/* map here */}
          <div className="mt-10 flex justify-center mr-10">
              <Image src="/assets/enroute.png" width={700} height={30}/>
          </div>
          <div className="mt-10 flex ">
          
            <button className ="bg-[#DF571D]  rounded-lg text-white font-bold py-2 px-4 rounded text-white" type="button">
                
               Cancel Route
                
            </button>
            <button className="ml-20  bg-[#1E2D4C] border-1 border-[#D95017] rounded-lg text-white font-bold py-2 px-4 rounded " type="button">
                
               New Destination
                
            </button>
            
          </div>

        </div>
    </div>
  )
}

export default page