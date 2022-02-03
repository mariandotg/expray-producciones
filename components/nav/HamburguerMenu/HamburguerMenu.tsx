import { MdMenu, MdClose } from "react-icons/md";
import { HamburgerMenuProps } from "../../../types";
import { HamburgerMenuDiv } from "./styles";

const HamburgerMenu = ({ navbarOpen, setNavbarOpen }: HamburgerMenuProps) => {
    return (
      <>
        <HamburgerMenuDiv>
          {!navbarOpen ? (
            <MdMenu
              color="black"
              size="32"
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          ) : (
            <MdClose
              color="black"
              size="32"
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          )}
        </HamburgerMenuDiv>
      </>
    );
  };

  export default HamburgerMenu;