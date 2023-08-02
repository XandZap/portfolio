import { BsWindowFullscreen } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BouncingIcon, RotationGear } from "./styles";

function Icon() {
  return (
    <div className="relative flex justify-center items-center w-52 h-52 text-accent text-6xl">
      <BouncingIcon className="absolute left-3 top-0 text-secondary-foreground">
        <HiOutlineLightBulb  />
      </BouncingIcon>
      <RotationGear className="absolute bottom-6 right-4 text-secondary" />
      <BsWindowFullscreen className="text-9xl" />
      <BiCodeBlock className="absolute text-5xl bottom-16 opacity-20" />
    </div>
  );
}

export default Icon;

