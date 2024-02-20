import React, { useState } from "react";

function MessageItem({user,index,setSelected,backGround}){
    const classname = "h-1/5 border-b-2 border-slate-100 "+backGround;
    
    function handleSelect(){
        setSelected(index);
    }

    return (
        <div className={classname}  onClick={handleSelect}>
            <div className="h-1/2 flex flex-row">
              <div className="h-full w-1/6 flex justify-center items-center">
                <input type="checkbox" className="h-5 w-5 text-center"></input>
              </div>
              <div className="p-2 h-full flex flex-col justify-center w-2/3">
                <div className="font-semibold">
                    Amit RG
                </div>
                <div className="text-sm">
                    Facebook DM
                </div>
              </div>
              <div className="w-1/6 h-full">
                10m
              </div>
            </div>
            <div>
                <div className="p-1 font-semibold text-sm">Awesome product</div>
                <div className="p-1 truncate text-sm">This is the best product I have ever used, Thank you for this</div>
            </div>
          </div>
    )
}

export default MessageItem;