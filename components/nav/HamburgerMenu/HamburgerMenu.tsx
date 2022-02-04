import { MdMenu, MdClose } from "react-icons/md";
import { HamburgerMenuProps } from "../../../types";
import * as S from "./styles";

const HamburgerMenu = ({ navbarOpen, setNavbarOpen }: HamburgerMenuProps) => {
    return (
      <>
        <S.HamburgerMenuDiv>
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
        </S.HamburgerMenuDiv>
      </>
    );
  };

  export default HamburgerMenu;