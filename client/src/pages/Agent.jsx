import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/User";
import MessageItem from "../components/MessageItem";

function Agent() {
    const [selected,setSelected] = useState(null);

  return (
    <div className="flex h-screen bg-gray-200 gap-1">
      <div className="h-full bg-blue-800 w-16 flex flex-col justify-between">
        <button className="w-full py-2 text-white text-3xl focus:bg-white focus:text-black">
          <i class="fa-solid fa-inbox"></i>
        </button>
        <div className="text-center p-3">
          <i class="fa-regular fa-user bg-gray-200 p-2 rounded-full"></i>
          <span
            className="w-3 h-3 bg-green-500 rounded-full inline-block"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "35px",
            }}
          ></span>
        </div>
      </div>

      <div className="flex flex-col w-1/6 gap-1">
        <div className="p-3 bg-white">
          <i class="fa-solid fa-bars-staggered"></i>
          <span className="p-2 font-semibold text-lg">Conversations</span>
          <button>
            <i class="fa-solid fa-rotate-right inline-block ms-10"></i>
          </button>
        </div>
        <div className="h-full flex flex-col gap-0.5 overflow-auto bg-white">
          <MessageItem index="1" backGround={selected=="1"?"bg-slate-200":""} setSelected={setSelected} />
          
        </div>
      </div>
    </div>
  );
}

export default Agent;

// (
//     <div className="bg-blue-800 min-h-screen flex flex-col items-center justify-center">
//       <div className="p-5 flex flex-col items-center justify-center min-w-96 bg-white min-h-32 rounded-lg">
//         <h3 className="text-center">Facebook page integration</h3>
//         <button className="bg-blue-800 text-white p-2 my-5 rounded block w-full hover:bg-black">
//           Connect page
//         </button>
//       </div>
//       <div className="p-5 flex flex-col items-center justify-center min-w-96 bg-white min-h-32 rounded-lg my-5">
//         <h3 className="text-center">Facebook page integration</h3>
//         <span>
//           Integrated page: <span className="font-bold">Amazon buziness</span>
//         </span>
//         <button className="bg-red-700 text-white p-2 my-5 rounded block w-full hover:bg-black">
//           Delete page integration
//         </button>
//         <button className="bg-blue-800 text-white p-2 rounded block w-full hover:bg-black">
//           Reply to messages
//         </button>
//       </div>
//     </div>
//   );
