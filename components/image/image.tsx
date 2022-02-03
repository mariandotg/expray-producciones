import { getStrapiMedia } from "../../lib/media";
import { ImageData } from "../../types";

const Image = ({ source, style }: { source: ImageData, style: any }) => {
  const imageUrl = getStrapiMedia(source);

  return <img src={imageUrl} alt={source.alternativeText || source.name} style={style}/>;
};

export default Image;
