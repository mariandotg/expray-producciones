export interface SectionData {
  id: number;
  title: string;
  description: string;
  slug: string;
  dark_background: true | false;
  more_info_button: true | false;
}
export interface ImageData {
  alternativeText: string;
  name: string;
  url: string;
}
export interface MyGlobalContext {
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  logotypeHorizontal: ImageData;
  logotypeVertical: ImageData;
}

export interface HamburgerMenuProps {
  navbarOpen: true | false;
  setNavbarOpen: (navbarOpen: true | false) => void;
}