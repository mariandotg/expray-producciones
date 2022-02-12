import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: min(100%, 800px);
`;
export const CarouselContentDiv = styled.div`
  display: flex;
  height: 100%;
  width: min(100%, 800px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;
export const CarouselImage = styled.div`
  display: flex;
  height: 100%;
  width: min(100%, 800px);
`;
export const CarouselDescription = styled.p`
  width: min(780px, 100%);
  padding: 16px;
`;
export const CarouselControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: auto;
`;
export const CarouselIcons = styled.div`
  width: 32px;
  height: 32px;
`;
