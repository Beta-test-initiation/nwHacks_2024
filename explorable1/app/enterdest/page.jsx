import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
        image placeholder for map
        <div className="">
            <input class="w-96 mt-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Destination"></input>
            <button class=" ml-5 bg-[#7975FF] rounded-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Start
            </button>
        </div>
    </div>
  )
}

export default page