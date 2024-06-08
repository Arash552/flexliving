"use client";
import { ReactElement, useEffect, useRef } from "react";

export default function GuestDetails() {
  const items = [
    "Business Travel/ Work",
    "Moving to this city or country",
    "Holiday",
    "Other",
  ];
  const arr: ReactElement[] = [];
  const itemsClass = useRef<HTMLCollection | any>(null)
  useEffect(()=>{
    itemsClass.current = document.getElementsByClassName("items") as HTMLCollection;
  },[])
  for (let i = 0; i < items.length; i++) {
    arr.push(
      <div className="flex gap-x-2">
        <div
          className="bg-[#F2F0F2] rounded-full p-1 w-5 h-5"
          onClick={(e) => {
            for (let i = 0; i < itemsClass.current.length; i++) {
              const element = itemsClass.current[i];
              element.classList.remove("bg-darkgreen")
            }
            e.currentTarget.children[0].classList.add("bg-darkgreen")
          }}
        >
          <div className="rounded-full w-full h-full items cursor-pointer"></div>
        </div>
        <p className="text-sm">{items[i]}</p>
      </div>
    );
  }
  return (
    <main className="grid gap-y-7 px-5 mb-20 md:w-[500px]">
    <h1 className="text-4xl font-semibold text-center">Guest Details</h1>
    <div className="grid gap-y-2">
      <input
        type="text"
        name=""
        id=""
        className="rounded-lg px-5 py-3 text-sm bg-[#F2F0F2] text-[#49735A] border-none outline-none"
        placeholder="First name"
      />
      <input
        type="text"
        name=""
        id=""
        className="rounded-lg px-5 py-3 text-sm bg-[#F2F0F2] text-[#49735A] border-none outline-none"
        placeholder="Last name"
      />
      <input
        type="email"
        name=""
        id=""
        className="rounded-lg px-5 py-3 text-sm bg-[#F2F0F2] text-[#49735A] border-none outline-none"
        placeholder="Email Address"
      />
      <div className="flex gap-x-5 px-5 py-3 bg-[#F2F0F2] text-sm text-[#49735A] rounded-lg">
        <div className="flex gap-x-2">
          <img
            src="/emojione_flag-for-liberia.png"
            alt=""
            className="w-5"
          />
          <p>+1</p>
          <i className="bi-chevron-down mr-2"></i>
        </div>
        <input
          type="text"
          className="bg-none border-none outline-none w-full bg-[#F2F0F2]"
          placeholder="Phone number"
        />
      </div>
    </div>
    <div className="grid gap-y-5">
      <p className="font-semibold  text-center">Purpose of stay</p>
      <div className="grid gap-y-2 justify-center">{arr}</div>
    </div>
    <input
      type="text"
      name=""
      id=""
      className="rounded-lg px-5 py-3 text-sm bg-[#F2F0F2] text-[#49735A] border-none outline-none"
      placeholder="Name of Employer/ Organisaition"
    />
    <div className="flex gap-x-2 items-center">
      <div className="rounded-lg bg-[#F2F0F2] text-[#49735A] p-1" onClick={(e)=>{
        e.currentTarget.children[0].classList.toggle("opacity-0")
      }}>
        <i className="bi-check2 cursor-pointer"></i>
      </div>
      <p className="text-sm">I’m booking on behalf of someone else</p>
    </div>
    <input
      type="text"
      name=""
      id=""
      className="rounded-lg px-5 py-3 text-sm bg-[#F2F0F2] text-[#49735A] border-none outline-none"
      placeholder="Name"
    />
    <input
      type="text"
      name=""
      id=""
      className="rounded-lg px-5 py-3 text-sm bg-[#F2F0F2] text-[#49735A] border-none outline-none mb-5"
      placeholder="Email of the guest"
    />
    <p className="text-2xl font-semibold">Payment method</p>
    <div className="flex justify-between px-5 py-3 bg-[#F2F0F2] text-sm text-[#49735A] rounded-lg">
      <p>Select payment method</p>
      <i className="bi-chevron-down"></i>
    </div>
    <p className="text-sm">
      By clicking "Book" below, I have read and agreed to the{" "}
      <a href="" className="underline text-[#49735A]">
        key contract terms, cancellation policy and apartment & building
        rules
      </a>
      , and to pay the total amount shown.
    </p>
    <button className="px-5 py-2 text-white bg-darkgreen rounded-full mx-auto">
      Book
    </button>
  </main>
  )
//   return <div className="grid gap-y-2 justify-center">{arr}</div>;
}