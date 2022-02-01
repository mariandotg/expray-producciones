export interface MyGlobalContext {
  siteName?: string;
  metaTitle?: string;
  metaDescription?: string;
}
export interface SectionData {
  id: number;
  title: string;
  description: string;
  slug: string;
  dark_background: true | false;
  more_info_button: true | false;
}
