import { HomeImagesData, SectionData } from "../../types";
import * as S from "./styles";
import Carousel from "../Carousel/Carousel";
import ContactForm from "../ContactForm/ContactForm";
import Section from "../Section/Section";

const Main = ({
  carouselSource,
  sectionsSource,
}: {
  carouselSource: HomeImagesData[];
  sectionsSource: SectionData[];
}) => {
  const firstCarousel = carouselSource.slice(0, 6);
  const secondCarousel = carouselSource.slice(6, carouselSource.length);
  const firstSections = sectionsSource.slice(0, 2);
  const secondSections = sectionsSource.slice(2, sectionsSource.length);

  return (
    <S.Main>
      <Carousel source={firstCarousel} />
      {firstSections.map((e) => (
        <Section key={e.id} section={e} />
      ))}
      <Carousel source={secondCarousel} />
      {secondSections.map((e) => (
        <Section
          key={e.id}
          section={e}
          darkBackground={(e.id === 3 || e.id === 4) && true}
        />
      ))}
      <ContactForm />
    </S.Main>
  );
};

export default Main;
