import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/User";
import MessageItem from "../components/MessageItem";
import Chat from "../components/Chat";

function Agent() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex h-screen bg-gray-200 gap-1">
      <div className="h-full bg-blue-800 w-1/24 flex flex-col justify-between">
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
        <div className="p-3 bg-white h-14">
          <i class="fa-solid fa-bars-staggered"></i>
          <span className="p-2 font-semibold text-lg">Conversations</span>
          <button>
            <i class="fa-solid fa-rotate-right inline-block ms-10"></i>
          </button>
        </div>
        <div className="h-full flex flex-col gap-0.5 overflow-auto bg-white">
          <MessageItem
            index="1"
            backGround={selected == "1" ? "bg-slate-200" : ""}
            setSelected={setSelected}
          />
          <MessageItem
            index="2"
            backGround={selected == "2" ? "bg-slate-200" : ""}
            setSelected={setSelected}
          />
        </div>
      </div>

      <div className="w-3/5 h-full flex flex-col gap-1 relative ">
        <div className="w-full h-14 bg-white p-3 font-semibold">Amit RG</div>
        <div className="h-full">
          <Chat
            align="end"
            message="Hello, how are you"
            timestamp="Amit - Mar 05, 2:22 AM"
            image={
              <i class="fa-regular fa-user bg-gray-200 p-2 rounded-full bg-white"></i>
            }
          />
          <Chat
            align="start"
            message="I am good"
            timestamp="Henit - Mar 05, 2:22 AM"
            image={
              <i class="fa-regular fa-user bg-gray-200 p-2 rounded-full bg-white"></i>
            }
          />
        </div>
        <div className="flex items-center justify-center w-full absolute bottom-10">
          <input
            placeholder="Message Amit"
            className="p-1 ps-5 pb-1 w-11/12 bg-white rounded border-2 border-gray-700 h-10 block"
          ></input>
        </div>
      </div>

      <div className="w-1/5 bg-slate-200">
        <div className="h-2/5 bg-white flex flex-col items-center justify-center p-3">
          <div className="h-24 w-24 rounded-full bg-green-400"></div>
          <div className="text-semibold mt-2">Amit RG</div>
          <div className="text-sm mt-1 text-grey-600">
            <span className="w-2 h-2 mx-1 rounded-full bg-green-400 inline-block"></span>
            online
          </div>
          <div className="flex justify-between gap-5 p-5">
            <button className="p-2 w-24 border-2 border-gray-300">
              <i class="fa-solid fa-phone"></i> Call
            </button>
            <button className="p-2 w-24 border-2 border-gray-300">
              <i class="fa-regular fa-user bg-gray-200 p-2 rounded-full bg-white"></i>
              Profile
            </button>
          </div>
        </div>

        <div className="flex justify-center h-1/3 mt-5">
          <div className="bg-white w-11/12 rounded-lg">
            <div className="p-3 font-semibold">Customer details</div>
            <div className="flex justify-between p-3">
              <div>Email</div>
              <div className="font-semibold">abc@gmail.com</div>
            </div>
            <div className="flex justify-between p-3">
              <div>First name</div>
              <div className="font-semibold">Amit</div>
            </div>
            <div className="flex justify-between p-3">
              <div>Last name</div>
              <div className="font-semibold">RG</div>
            </div>
            <div className="text-purple-900 text-center">View more details</div>
          </div>
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
