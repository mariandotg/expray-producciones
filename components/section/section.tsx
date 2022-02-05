import { SectionData } from "../../types";
import * as S from "./styles"

const Section = ({ section }: { section: SectionData }) => {
  return (
    <>
      <S.SectionDiv darkBackground={section.dark_background}>
        <S.Title>{section.title}</S.Title>
        <S.Description>{section.description}</S.Description>
        {section.more_info_button ? (
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "32px" }}>
            <S.Button>MÁS INFO</S.Button>
          </div>
        ) : null}
      </S.SectionDiv>
    </>
  );
};

export default Section;
