import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Image from "../Image/Image";
import styled from "styled-components";
import { HomeImagesData } from "../../types";

const Carrousel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const Carousel = ({ source }: { source: HomeImagesData[] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const length = source.length;

  const nextSlider = () => {
    setCurrentSlide(currentSlide === length ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? length - 1 : currentSlide - 1);
  };

  return (
    <>
      <Carrousel>
        {source.map(
          (e: any) =>
            e.id === currentSlide && (
              <>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      <MdArrowBack
                        color="black"
                        size="32"
                        onClick={prevSlide}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Image
                        key={e.id}
                        source={e.image}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      <MdArrowForward
                        color="black"
                        size="32"
                        onClick={nextSlider}
                      />
                    </div>
                  </div>
                  <p style={{ padding: "0 32px", minHeight: "128px" }}>{e.imageDescription}</p>
                </div>
              </>
            )
        )}
      </Carrousel>
    </>
  );
};

export default Carousel;
