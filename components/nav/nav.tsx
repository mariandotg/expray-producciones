import { useContext, useState } from "react";
import { GlobalContext } from "../../pages/_app";
import { CategoriesData } from "../../types";
import Img from "../Img/Img";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import * as S from "./styles";

const Nav = ({ categories }: { categories: CategoriesData[] }) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const { logotypeHorizontal } = useContext(GlobalContext);

  return (
    <>
      <S.Nav>
        <S.NavDiv>
          <HamburgerMenu
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
          />
          <Img source={logotypeHorizontal} height="64px" width="238px" />
        </S.NavDiv>
        {navbarOpen && (
          <S.CategoriesDiv>
            <S.CategoriesList>
              {categories.map((e: any) => {
                return (
                  <S.CategoriesListItem key={e.id}>
                    <Link href={e.link}>{e.displayName}</Link>
                  </S.CategoriesListItem>
                );
              })}
            </S.CategoriesList>
          </S.CategoriesDiv>
        )}
      </S.Nav>
    </>
  );
};

export default Nav;
