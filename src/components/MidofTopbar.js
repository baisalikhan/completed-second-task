import BaseLayout from "@/components/BaseLayout";
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

function MidofTopbar({ pageName }) {
  return (
    <div className="text-3xl bg-slate-50 p-2 grid grid-cols-10 gap-4">
      <div className="col-start-2 col-span-2 font-thin">
        Succession Snapshot
      </div>
      {/* <div className="bg-slate-500 col-span-6">6 cols</div> */}
      <div className="col-start-9 col-span-2 flex justify-start items-center space-x-3">
        <AiOutlineHome />
        <span>{">"}</span>
        <p className="text-lg">{pageName}</p>
      </div>
    </div>
  );
}

export default MidofTopbar;
