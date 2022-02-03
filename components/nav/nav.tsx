import { useContext, useState } from "react";
import { GlobalContext } from "../../pages/_app";
import Image from "../image/image";
import Link from "next/link";
import {
  Navbar,
  NavbarDiv,
  CategoriesDiv,
  CategoriesList,
  CategoriesListItem,
} from "./styles";
import HamburgerMenu from "./HamburguerMenu/HamburguerMenu";

const Nav = ({ categories }: { categories: any }) => {
  const [navbarOpen, setNavbarOpen] = useState<true | false>(false);
  const { logotypeHorizontal } = useContext(GlobalContext);

  return (
    <>
      <Navbar>
        <NavbarDiv>
          <HamburgerMenu
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
          />
          <Image source={logotypeHorizontal} style={{ height: "64px" }} />
        </NavbarDiv>
        {navbarOpen && (
          <CategoriesDiv>
            <CategoriesList>
              {categories.map((e: any) => {
                return (
                  <CategoriesListItem key={e.id}>
                    <Link href={e.link}>{e.displayName}</Link>
                  </CategoriesListItem>
                );
              })}
            </CategoriesList>
          </CategoriesDiv>
        )}
      </Navbar>
    </>
  );
};

export default Nav;
