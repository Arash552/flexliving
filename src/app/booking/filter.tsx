"use client";

import { ReactElement, useEffect, useRef, useState } from "react";

export default function Filter() {
  const [items, setItems] = useState<ReactElement[]>([
    <div className="text-black text-sm flex items-center gap-x-2">
      <p>Parking</p>
      <i
        className="bi-x cursor-pointer"
        onClick={(e) => {
          const elem = e.target as HTMLElement;
          elem.parentElement?.remove();
        }}
      ></i>
    </div>,
  ]);
  const MF = useRef<HTMLElement | any>(null)
  useEffect(()=>{
    MF.current = document.getElementById("moreFilter") as HTMLElement;
  },[])
  return (
    <div className="hidden items-center gap-5 sm:flex flex-wrap">
      <div className="relative">
        <button
          className="flex justify-center gap-x-2 px-5 py-2 text-white bg-darkgreen rounded-full relative"
          onClick={() => {
            MF.current.classList.toggle("hidden");
          }}
        >
          More Filters <i className="bi-chevron-down"></i>
        </button>
        <div
          className="bg-white rounded-lg p-5 absolute bottom-[-280px] whitespace-nowrap pr-10 hidden"
          id="moreFilter"
        >
          <ul
            className="list-none grid gap-y-4 cursor-pointer"
            onClick={(e) => {
              const elem = e.target as HTMLElement;
              if (elem.nextElementSibling && elem.tagName !== 'LI') {
                console.log(elem.tagName);
                setItems((prev) => [
                  ...prev,
                  <div className="text-black text-sm flex items-center gap-x-2">
                    <p>{elem.parentElement?.children[1].innerHTML}</p>
                    <p>{elem.innerText}</p>
                    <i
                      className="bi-x cursor-pointer"
                      onClick={(e) => {
                        const elem = e.target as HTMLElement;
                        elem.parentElement?.remove();
                      }}
                    ></i>
                  </div>,
                ]);
              } else if (elem.tagName != "LI") {
                setItems((prev) => [
                  ...prev,
                  <div className="text-black text-sm flex items-center gap-x-2">
                    <p>{elem.innerText}</p>
                    <i
                      className="bi-x cursor-pointer"
                      onClick={(e) => {
                        const elem = e.target as HTMLElement;
                        elem.parentElement?.remove();
                      }}
                    ></i>
                  </div>,
                ]);
              }
            }}
          >
            <li className="text-black text-sm gap-x-2 flex items-center">
              <img src="/fluent_bed-24-filled.png" alt="" className="w-5 h-5" />
              <p>Rooms:</p>
              <p className="text-[#064749]">studio</p>
              <p className="text-[#064749]">1</p>
              <p className="text-[#064749]">2</p>
              <p className="text-[#064749]">3</p>
              <div></div>
            </li>
            <li className="text-black text-sm gap-x-2 flex items-center">
              <img src="/fa-solid_bath.png" alt="" className="w-5 h-5" />
              <p>Restrooms:</p>
              <p className="text-[#064749]">1</p>
              <p className="text-[#064749]">2</p>
              <p className="text-[#064749]">3</p>
              <div></div>
            </li>
            <li className="text-black text-sm gap-x-2 flex items-center">
              <img src="/icons/el_wheelchair.png" alt="" className="w-5 h-5" />
              <p>Disabled access</p>
            </li>
            <li className="text-black text-sm gap-x-2 flex items-center">
              <img src="/fa-solid_car-alt.png" alt="" className="w-5 h-5" />
              <p>Parking</p>
            </li>
            <li className="text-black text-sm gap-x-2 flex items-center">
              <img
                src="/icons/mdi_elevator-passenger.png"
                alt=""
                className="w-5 h-5"
              />
              <p>Elevator</p>
            </li>
            <li className="text-black text-sm gap-x-2 flex items-center">
              <img src="/icons/Vector (1).png" alt="" className="w-5 h-5" />
              <p>Dishwasher</p>
            </li>
            <li className="text-black text-sm gap-x-2 flex items-center">
              <img src="/icons/Vector (2).png" alt="" className="w-5 h-5" />
              <p>Washing machine</p>
            </li>
          </ul>
        </div>
      </div>
      {items}
    </div>
  );
}
