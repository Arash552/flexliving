"use client";

import { useState } from "react";

export default function Images() {
  const [mainimg, setMainimg] = useState<string>("/1.png");
  const [other, setOther] = useState<string[]>([
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
  ]);
  return (
    <div className="w-full h-full flex items-center overflow-scroll disableScroll gap-x-2 md:h-auto">
      <img
        src={mainimg}
        alt=""
        className="w-full h-full object-cover md:w-[66%] md:h-[33vw]"
        id="main"
      />
      <div className="max-w-[33%] h-full hidden md:grid grid-cols-2 grid-rows-2 gap-2">
        {other.map((item) => (
          <img src={item} key={item} alt="" className="rounded-lg w-full h-full cursor-pointer" onClick={()=>{
            for (let i = 0; i < other.length; i++) {
                if(other[i] === item){
                    other.splice(i,1)
                    setOther((prev) => [...prev , mainimg])
                }
            }
            setMainimg(item)
          }}/>
        ))}
      </div>
    </div>
  );
}
