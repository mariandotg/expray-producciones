import styled from "styled-components";

export const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  color: #000000;
  width: 100vw;
  //height: max(100vh, 100%);
`;
export const SectionContentDiv = styled.div`
  padding: 32px;

  width: min(100vw, 800px);
`;
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
`;
export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-top: 32px;
`;
export const Button = styled.button`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 8px 23px;
  border: none;
  border-radius: 16px;
  color: #ffffff;
  background: linear-gradient(
    0deg,
    rgba(35, 14, 129, 1) 0%,
    rgba(83, 176, 206, 1) 100%
  );
`;
