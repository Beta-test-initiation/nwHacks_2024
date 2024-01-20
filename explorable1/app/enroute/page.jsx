import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex">
        <div className="w-1/2">

        </div>
        <div className="flex w-1/2 h-screen bg-white/[0.3] items-center justify-center">
            <div className="">
                <p className='text-black font-bold text-lg'>
                Route complete!
                </p>
                <div className="flex ">
                    <div className="mt-10">
                        <Image src="/assets/route.png" height={250} width={100}/>
                </div>
                    <div className="flex flex-col ml-20 mt-20">
                    <button className ="bg-[#AEACFF] border-2 border-[#D95017] rounded-lg text-white font-bold py-2 px-4 rounded text-white" style={{ textShadow: '1px 1px 2px , 1px 1px 2px #D95017' }} type="button">
                        
                        I have Safely Arrived
                        
                    </button>
                    <Link href="/enterdest">
                        <button className ="mt-10 bg-[#AEACFF] border-2 border-[#D95017] rounded-lg text-white font-bold py-2 px-4 rounded text-white" style={{ textShadow: '1px 1px 2px , 1px 1px 2px #D95017' }} type="button">
                            
                            New destination
                            
                        </button>
                    </Link>
                    
                    
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default page