import Left from "./Left";
import { NavbarDemo } from "./NavLinks/NavLinks";
import Right from "./Right";
import Top from "./Top";

const Navbar = () => {
  return (
    <div className="relative z-[2000]">
      <div className="flex fixed w-full">
        <Left />
        <div className="flex-1">
          <Top />
          <NavbarDemo />
        </div>
        <Right />
      </div>
      <div className="h-[126px]"></div>
    </div>
  );
};

export default Navbar;
