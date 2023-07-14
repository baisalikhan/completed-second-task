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

function TopofTopbar({ userName, userRole }) {
  return (
    <div className="text-3xl font-bold bg-slate-50 p-2 grid grid-cols-10 gap-4">
      <div className=" col-span-2 flex justify-center items-center">
        <AiOutlineAlignLeft className="" />
      </div>

      {/* Four cols for input starts */}
      <div className="col-span-4">
        <form method="GET" className="py-1">
          <div class="relative text-gray-600 focus-within:text-gray-400 flex justify-center items-center">
            <span class="absolute inset-y-0 left-0 pl-2">
              <button type="submit" class="p-1 flex py-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="w-full px-3 h-12 text-xl  bg-transparent rounded-md pl-12 border"
              placeholder="Search..."
              autocomplete="off"
            />
          </div>
        </form>
      </div>
      {/* Four cols for input ends */}

      <div className="col-span-2 flex justify-center items-center space-x-6">
        <AiOutlineCheckCircle className="text-2xl" />
        <AiOutlineUnorderedList className="text-2xl" />
        <AiOutlineIdcard className="text-2xl" />
        <AiOutlineMail className="text-2xl" />
        <AiOutlineSetting className="text-2xl" />
      </div>
      <div className="col-span-2 flex">
        <div className="flex items-center">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full"
            style={{ width: 59, height: 59 }}
            alt="Avatar"
          />
        </div>
        <div>
          <p className="text-sm pt-2 px-2">{userName}</p>
          <p className="text-xs pt-2 px-2">{userRole}</p>
        </div>
      </div>
    </div>
  );
}

export default TopofTopbar;
