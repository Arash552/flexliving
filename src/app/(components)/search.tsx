"use client";

import { createElement, useEffect, useRef, useState } from "react";

export default function Search() {
  const [guests, setGuests] = useState<number>(1);
  const city = useRef<HTMLElement | any>(null)
  useEffect(()=>{
    city.current = document.getElementById("city") as HTMLElement
  },[])
  return (
    <div className="w-full sm:w-[600px] md:w-[700px] bg-white rounded-full px-5 pr-[2px] py-2 sm:py-[2px] flex gap-x-2 text-black border-2 border-black sm:border-darkgreen sm:border-[3px] text-sm mb-5 mx-auto">
      <i className="bi-search whitespace-nowrap grid place-items-center"></i>
      <div
        className="w-full grid place-items-center bg-none outline-none border-none rounded-full sm:border-r-[1px] sm:border-black sm:rounded-r-none relative"
        onClick={(e) => {
          e.currentTarget.lastElementChild?.classList.toggle("hidden");
        }}
      >
        <p id="city">select a city</p>
        <div className="w-full hidden absolute bottom-[-130px] bg-white rounded-lg p-3">
          <p className="text-black font-semibold mb-4">Most popular</p>
          <ul className="list-none grid gap-y-2" onClick={(e)=>{
            const elem = e.target as HTMLElement;
            if(city.current){
              city.current.innerText = elem.innerText
            }
          }}>
            <li className="flex items-center gap-x-2">
              <div className="min-w-5 min-h-5 rounded-full bg-[#C4C4C4]"></div>
              <p className="text-black text-sm">London</p>
            </li>
            <li className="flex items-center gap-x-2">
              <div className="min-w-5 min-h-5 rounded-full bg-[#C4C4C4]"></div>
              <p className="text-black text-sm">Kingston upon Thames</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden sm:flex sm:justify-center w-full px-5 py-2 h-full text-sm text-black border-x-[1px] border-black gap-x-2 whitespace-nowrap ">
        <i className="bi-calender"></i>
        <p>Move in</p>
        <i className="bi-chevron-right"></i>
        <p>Move out</p>
      </div>
      <div className="hidden sm:flex sm:justify-center w-full px-5 py-2 h-full text-sm text-black gap-x-2">
        <i className="bi-people"></i>
        <p className="mr-2">Guests</p>
        <p
          onClick={() => {
            if (guests != 0) {
              setGuests(guests - 1);
            }
          }}
        >
          -
        </p>
        <p>{guests}</p>
        <p
          onClick={() => {
            if (guests != 10) {
                setGuests(guests + 1);
              }
          }}
        >
          +
        </p>
      </div>
      <button className="hidden sm:grid px-5 py-2 text-white bg-darkgreen rounded-full place-items-center whitespace-nowrap">
        Search
      </button>
    </div>
  );
}
