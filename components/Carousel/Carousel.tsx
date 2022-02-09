import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { HomeImagesData } from "../../types";
import * as S from "./styles";
import Image from "../Image/Image";

const Carousel = ({ source }: { source: HomeImagesData[] }) => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const length = source.length;

  const selectNewSlide = (next: boolean = true) => {
    setLoaded(false);
    //setTimeout(() => {
    const condition = next ? selectedSlide === length - 1: selectedSlide === 0;
    const newSlide = next
      ? condition
        ? 0
        : selectedSlide + 1
      : condition
      ? length - 1
      : selectedSlide - 1;
    console.log(selectedSlide);
    setSelectedSlide(newSlide);
    //}, 500);
  };

  const nextSlide = () => {
    selectNewSlide();
  };

  const prevSlide = () => {
    selectNewSlide(false);
  };

  return (
    <>
      <S.Carousel>
        {source.map((e: HomeImagesData, index: number) => (
           index === selectedSlide && (
              <S.CarouselContentDiv
                key={e.id}
                className={loaded ? "loaded" : ""}
              >
                <S.CarouselImage>
                  <Image
                    source={e.image}
                    styles={{width: "100%"}}
                    
                    onLoad={() => setLoaded(true)}
                  />
                </S.CarouselImage>
                {loaded && <S.CarouselDescription>{e.imageDescription}</S.CarouselDescription>}
              </S.CarouselContentDiv>
            )
        ))}
        <S.CarouselControl>

          <S.CarouselIcons>
            <MdArrowBack color="black" size="32" onClick={prevSlide} />
          </S.CarouselIcons>

          <S.CarouselIcons>
            <MdArrowForward color="black" size="32" onClick={nextSlide} />
          </S.CarouselIcons>

        </S.CarouselControl>
      </S.Carousel>
    </>
  );
};
export default Carousel;
