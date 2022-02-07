import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import { ImageData } from "../../types";

const Img = ({ source, height, width, onLoad }: { source: ImageData, height: any, width: any, onLoad?: () => void }) => {
  const imageUrl = getStrapiMedia(source);

  return <Image src={imageUrl} alt={source.alternativeText || source.name} height={height} width={width} onLoadingComplete={onLoad}/>;
};

export default Img;