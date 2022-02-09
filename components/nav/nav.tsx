import { useContext, useState } from "react";
import { GlobalContext } from "../../pages/_app";
import { CategoriesData } from "../../types";
import Image from "../Image/Image";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
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
          <Image source={logotypeHorizontal} styles={{height: "64px"}} />
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
