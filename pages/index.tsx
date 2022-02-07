import Image from "next/image";
import { fetchAPI } from "../lib/api";
import { CategoriesData, HomeImagesData, SectionData } from "../types";
import Section from "../components/Section/Section";
import Seo from "../components/Seo/Seo";
import Nav from "../components/Nav/Nav";
import Carousel from "../components/Carousel/Carousel";
import Layout from "../components/Layout/Layout";

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
      <main>
        <Carousel source={homeImages} />
        {sections.map((e) => (
          <Section key={e.id} section={e} />
        ))}
      </main>
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
export const getServerSideProps = async () => {
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
  };
};
export default Home;
