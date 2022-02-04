import styled from "styled-components";

interface SectionDivData {
  darkBackground: true | false;
}

export const SectionDiv = styled.div<SectionDivData>`
  padding: 32px;
  background-color: ${(props) =>
    props.darkBackground ? "var(--dark-background)" : ""};
  color: ${(props) => (props.darkBackground ? "#ffffff" : "#000000")};
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  line-height: 2rem;
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
