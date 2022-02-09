import Image from "next/image";
import { fetchAPI } from "../lib/api";
import { CategoriesData, HomeImagesData, SectionData } from "../types";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Main from "../components/Main/Main";

const Home = ({
  sections,
  categories,
  homeImages,
}: {
  sections: SectionData[];
  categories: CategoriesData[];
  homeImages: HomeImagesData[];
}) => {
  return (
    <Layout categories={categories}>
      <Seo />
      <Main carouselSource={homeImages} sectionsSource={sections} />

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  );
};
export const getStaticProps = async () => {
  const [sections, categories, homeImages] = await Promise.all([
    fetchAPI("/sections"),
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
