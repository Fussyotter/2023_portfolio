import React from "react";

export default function Topics() {
  return (
		<div className='grid grid-cols-5 grid-rows-4 gap-2 font-bold space-y-2 tracking-wide mx:auto text-center text-white text-2xl '>
			<h1 className='row-start-2 col-start-2  place-self-center rounded-full  shadow-lg '>
				I'm interested in...
			</h1>

			<div className='row-start-1 col-start-3 col-span-2  shadow-lg  place-self-center rounded-full'>
				Frontend Development
			</div>
			<div className='row-start-3 col-start-3 col-span-2   shadow-lg  place-self-center  rounded-full '>
				Backend Development
			</div>
			<div className='row-start-2  shadow-lg col-start-3 col-span-2 justify-self-center place-self-center rounded-full'>
				Fullstack Development
			</div>
			<div className='  p-3 row-start-1 col-start-5  '>
				Film Production
			</div>

			<div className='  p-3 row-start-3   rounded-full col-start-5 '>
				Dogs
			</div>
		</div>
	);
}