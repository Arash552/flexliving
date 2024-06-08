"use client";

import { useEffect, useRef } from "react";

export default function Comments() {
  const parent = useRef<HTMLElement | any>(null)
  var wid : number;
  useEffect(()=>{
    parent.current = document.getElementById("commentsParent") as HTMLElement
    wid = parent.current.firstElementChild?.clientWidth as number
  },[parent])

  return (
    <section className="overflow-hidden grid gap-y-5">
      <div
        className="flex flex-col gap-y-5 sm:flex-row gap-x-10 overflow-scroll disableScroll"
        id="commentsParent"
      >
        <div className="bg-[#F2F0F2] rounded-2xl p-5 grid gap-y-5 sm:min-w-[450px]">
          <div className="flex items-center gap-x-5">
            <img src="/Ellipse 7.png" alt="" className="w-16" />
            <div className="grid gap-y-2 text-black">
              <p className="font-semibold">Annie</p>
              <p className="text-sm">Landlord in SE1</p>
            </div>
          </div>
          <p className="text-sm text-black sm:text-xs">
            Nascetur urna, fusce consectetur massa nulla viverra aenean semper.
            Dignissim nibh sed condimentum eget ac suspendisse eget amet
            integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate
            volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus
            aliquam.
          </p>
        </div>
        <div className="bg-[#F2F0F2] rounded-2xl p-5 grid gap-y-5 sm:min-w-[450px]">
          <div className="flex items-center gap-x-5">
            <img src="/Ellipse 7 (1).png" alt="" className="w-16" />
            <div className="grid gap-y-2 text-black">
              <p className="font-semibold">Annie</p>
              <p className="text-sm">Landlord in SE1</p>
            </div>
          </div>
          <p className="text-sm text-black sm:text-xs">
            Nascetur urna, fusce consectetur massa nulla viverra aenean semper.
            Dignissim nibh sed condimentum eget ac suspendisse eget amet
            integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate
            volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus
            aliquam.
          </p>
        </div>
        <div className="bg-[#F2F0F2] rounded-2xl p-5 grid gap-y-5 sm:min-w-[450px]">
          <div className="flex items-center gap-x-5">
            <img src="/Ellipse 7 (2).png" alt="" className="w-16" />
            <div className="grid gap-y-2 text-black">
              <p className="font-semibold">Gabriel</p>
              <p className="text-sm">Landlord in SE1</p>
            </div>
          </div>
          <p className="text-sm text-black sm:text-xs">
            Nascetur urna, fusce consectetur massa nulla viverra aenean semper.
            Dignissim nibh sed condimentum eget ac suspendisse eget amet
            integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate
            volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus
            aliquam.
          </p>
        </div>
        <div className="bg-[#F2F0F2] rounded-2xl p-5 grid gap-y-5 sm:min-w-[450px]">
          <div className="flex items-center gap-x-5">
            <img src="/Ellipse 7.png" alt="" className="w-16" />
            <div className="grid gap-y-2 text-black">
              <p className="font-semibold">Annie</p>
              <p className="text-sm">Landlord in SE1</p>
            </div>
          </div>
          <p className="text-sm text-black sm:text-xs">
            Nascetur urna, fusce consectetur massa nulla viverra aenean semper.
            Dignissim nibh sed condimentum eget ac suspendisse eget amet
            integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate
            volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus
            aliquam.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-10 justify-center">
        <button className="p-3 px-4 grid place-items-center text-white rounded-lg bg-darkgreen" onClick={()=>{
          parent.current.scrollBy(wid - (wid * 2),0)
        }}>
          <i className="bi-chevron-left"></i>
        </button>
        <button
          className="p-3 px-4 grid place-items-center text-white rounded-lg bg-darkgreen"
          onClick={() => {
            parent.current.scrollBy(wid, 0);
          }}
        >
          <i className="bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
