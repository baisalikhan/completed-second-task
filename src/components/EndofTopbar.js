import React from "react";

import {
  AiOutlineAlignLeft,
  AiFillMessage,
  AiOutlineHome,
  AiOutlineCheckCircle,
  AiOutlineUnorderedList,
  AiOutlineIdcard,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";

function EndofTopbar() {
  return (
    <div className="text-3xl bg-slate-50 p-2 grid grid-cols-12 gap-4">
      <div className="col-start-1 col-span-2 font-thin">
        Succession Snapshot
      </div>
      {/* <div className="bg-slate-500 col-span-6">6 cols</div> */}
      <div className="col-start-9 col-span-2 flex justify-start items-center space-x-3">
        <AiOutlineHome />
        <span>{">"}</span>
        <p className="text-lg">Page name</p>
      </div>
    </div>
  );
}

export default EndofTopbar;
