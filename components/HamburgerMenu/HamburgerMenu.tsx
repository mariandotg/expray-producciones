import { MdMenu, MdClose } from "react-icons/md";
import { HamburgerMenuProps } from "../../types";
import * as S from "./styles";

const HamburgerMenu = ({ navbarOpen, setNavbarOpen }: HamburgerMenuProps) => {
    return (
      <>
        <S.HamburgerMenu>
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
        </S.HamburgerMenu>
      </>
    );
  };

  export default HamburgerMenu;