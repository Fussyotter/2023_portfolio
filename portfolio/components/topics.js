import React from "react";

export default function Topics() {
  return (
    <div className="grid grid-cols-1 gap-2 font-bold space-y-2 tracking-wide mx-auto text-center text-black text-2xl font-serif sm:grid-cols-4 sm:grid-rows-4 sm:space-y-0">
      <h1 className="col-span-full sm:row-start-1 sm:col-start-1 sm:col-span-2 sm:place-self-center rounded-full shadow-lg p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500">
        I'm interested in...
      </h1>

      <div className="sm:row-start-2 sm:col-start-1 sm:col-span-3 shadow-lg place-self-center rounded-full p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500">
        Frontend Development
      </div>
      <div className="sm:row-start-2 sm:col-start-3 sm:col-span-2 shadow-lg place-self-center rounded-full p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500">
        Backend Development
      </div>
      <div className="sm:row-start-3 sm:col-start-2 sm:col-span-2 justify-self-center place-self-center rounded-full p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500">
        Fullstack Development
      </div>
      <div className="sm:row-start-4 sm:col-start-3 shadow-lg rounded-full p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500">
        Prompt Engineering
      </div>

      <div className="sm:row-start-4 sm:col-start-4 shadow-lg rounded-full p-2 border-s-4 border-b-2 border-indigo-400/50 hover:border-blue-500">
        Dogs
      </div>
    </div>
  );
}
