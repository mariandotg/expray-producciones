import { SectionData } from "../../types";
import * as S from "./styles";
import Button from "../Button/Button";

const Section = ({
  section,
  darkBackground,
}: {
  section: SectionData;
  darkBackground?: boolean;
}) => {
  return (
    <>
      <S.SectionDiv
        style={{
          background: darkBackground ? "var(--dark-background)" : "",
          color: darkBackground ? "#FFFFFF" : "#000000",
        }}
      >
        <S.SectionContentDiv>
          <S.Title>{section.title}</S.Title>
          <S.Description>{section.description}</S.Description>
          {/*section.more_info_button ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "32px",
            }}
          >
            <Button text="Más info"/>
          </div>
          ) : null*/}
        </S.SectionContentDiv>
      </S.SectionDiv>
    </>
  );
};

export default Section;
