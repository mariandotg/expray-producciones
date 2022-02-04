import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background-color: #FFF;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.25);
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoriesDiv = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.06);
`;

export const CategoriesList = styled.ul`
  text-align: center;
  list-style-type: none;
`;

export const CategoriesListItem = styled.li`
  margin: 24px 0;
`;
