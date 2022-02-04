import { ImageData } from "../types";
import { getStrapiURL } from "./api";

export function getStrapiMedia(media: ImageData) {
  const imageURL = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageURL;
}