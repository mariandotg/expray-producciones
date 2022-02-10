import Image from "next/image";
import { fetchAPI } from "../lib/api";
import { CategoriesData, HomeImagesData, SectionData } from "../types";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Main from "../components/Main/Main";
import { useRef } from "react";

const Home = ({
  sections,
  categories,
  homeImages,
}: {
  sections: SectionData[];
  categories: CategoriesData[];
  homeImages: HomeImagesData[];
}) => {
  console.log(homeImages);
  return (
    <Layout categories={categories}>
      <Seo />
      <Main carouselSource={homeImages} sectionsSource={sections} />
    </Layout>
  );
};
export const getStaticProps = async () => {
  const [sections, categories, homeImages] = await Promise.all([
    fetchAPI("/home-sections"),
    fetchAPI("/categories"),
    fetchAPI("/home-images"),
  ]);

  return {
    props: {
      sections,
      categories,
      homeImages,
    },
    revalidate: 1,
  };
};
export default Home;
