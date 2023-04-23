import React from "react";

export default function Topics() {
  return (
		<div className='grid grid-cols-4 grid-rows-4 gap-2 font-bold space-y-2 tracking-wide mx-auto text-center text-black text-2xl font-serif'>
			<h1 className='row-start-1 col-start-1 col-span-2  place-self-center rounded-full  shadow-lg p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500'>
				I'm interested in...
			</h1>

			<div className='row-start-2 col-start-1 col-span-3  shadow-lg  place-self-center rounded-full  p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500 '>
				Frontend Development
			</div>
			<div className='row-start-2 col-start-3 col-span-2    shadow-lg  place-self-center  rounded-full p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500 '>
				Backend Development
			</div>
			<div className='row-start-3  shadow-lg col-start-2 col-span-2 justify-self-center place-self-center rounded-full p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500'>
				Fullstack Development
			</div>
			<div className='  p-3 row-start-4 col-start-3   p-2 border-s-4 border-b-2 border-indigo-400/50 rounded-full hover:border-blue-500'>
				Prompt Engineering
			</div>

			<div className='  p-3 row-start-4   rounded-full col-start-4 p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500'>
				Dogs
			</div>
		</div>
	);
}