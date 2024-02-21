import React, { useState } from "react";

function PageIntegration() {
  const [integrated, setIntegrated] = useState(false);
  return (
    <div className="bg-blue-800 min-h-screen flex flex-col items-center justify-center">
      {!integrated ? (
        <div className="p-5 flex flex-col items-center justify-center min-w-96 bg-white min-h-32 rounded-lg">
          <h3 className="text-center">Facebook page integration</h3>
          <button className="bg-blue-800 text-white p-2 my-5 rounded block w-full hover:bg-black">
            Connect page
          </button>
        </div>
      ) : (
        <div className="p-5 flex flex-col items-center justify-center min-w-96 bg-white min-h-32 rounded-lg my-5">
          <h3 className="text-center">Facebook page integration</h3>
          <span>
            Integrated page: <span className="font-bold">Amazon buziness</span>
          </span>
          <button className="bg-red-700 text-white p-2 my-5 rounded block w-full hover:bg-black">
            Delete page integration
          </button>
          <button className="bg-blue-800 text-white p-2 rounded block w-full hover:bg-black">
            Reply to messages
          </button>
        </div>
      )}
    </div>
  );
}

export default PageIntegration;
