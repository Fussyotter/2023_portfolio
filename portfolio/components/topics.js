import React from "react";

export default function Topics() {
  return (
		<div className='grid grid-cols-5 grid-rows-4 gap-3 text-center  '>
			<h1 className='row-start-1 col-start-1 col-span-3  rounded-full bg-white shadow-lg p-2  '>
				I'm interested in...
			</h1>

			<div className='row-start-2 col-start-1 col-span-2 bg-white shadow-lg p-3  rounded-full'>
				Frontend Development
			</div>
			<div className='row-start-2 col-start-3 col-span-2 place-self-stretch bg-white shadow-lg p-3   rounded-full '>
				Backend Development
			</div>
			<div className='row-start-3 bg-white shadow-lg col-start-2 p-3 place-self-start rounded-full'>
				Fullstack Development
			</div>
			<div className='bg-white shadow-lg p-3 row-start-4 col-start-2  rounded-full'>
				Film Production
			</div>

			<div className='bg-white shadow-lg p-10 row-start-3 row-span-2  rounded-full col-start-3 '>
				Dogs
			</div>
		</div>
	);
}