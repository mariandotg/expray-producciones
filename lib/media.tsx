import { getStrapiURL } from "./api";

export function getStrapiMedia(media: any) {
  const imageURL = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageURL;
}