import { CategoriesData } from "../../types";
import Nav from "../Nav/Nav";
import * as S from "./styles";

const Layout = ({ categories, children }: { categories: CategoriesData[], children: any}) => {
  return (
    <>
      <Nav categories={categories} />
      <S.NavSpaceDiv />
      {children}
    </>
  );
};
export default Layout;
