import { getStrapiMedia } from "../../lib/media";
import { ImageData } from "../../types";
import styled from "styled-components"

const Image = ({ source, styles, onLoad }: { source: ImageData, styles?: any, onLoad?: () => void }) => {
  const imageUrl = getStrapiMedia(source);

  return <img src={imageUrl} alt={source.alternativeText || source.name} style={styles} onLoad={onLoad}/>;
};

export default Image;