export interface SectionData {
  id: number;
  title: string;
  description: string;
  slug: string;
  dark_background: true | false;
  more_info_button: true | false;
}
export interface CategoriesData {
  id: number;
  displayName: string;
  link: string;
}
export interface ImageData {
  alternativeText: string;
  name: string;
  url: string;
}
export interface HomeImagesData {
  id: number;
  image: ImageData;
  imageDescription: string;
}
export interface HamburgerMenuProps {
  navbarOpen: true | false;
  setNavbarOpen: (navbarOpen: true | false) => void;
}

export interface MyGlobalContext {
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  logotypeHorizontal: ImageData;
  logotypeVertical: ImageData;
}