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

import TopofTopbar from "@/components/TopofTopbar";
import MidofTopbar from "@/components/MidofTopbar";
import EndofTopbar from "@/components/EndofTopbar";
const About = () => {
  return (
    <BaseLayout>
      <TopofTopbar userName={"Adam"} userRole={"Manager"} />
      <MidofTopbar pageName={"Succession Plan"} />
      {/* <EndofTopbar /> */}
    </BaseLayout>
  );
};

export default About;
