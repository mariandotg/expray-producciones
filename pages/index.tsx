import Image from "next/image";
import { SectionData } from "../types";
import Section from "../components/Section/Section";
import Seo from "../components/Seo/Seo";
import Nav from "../components/Nav/Nav";
import { fetchAPI } from "../lib/api";

const Home = ({ sections, categories }: { sections: SectionData[], categories: any }) => {
  return (
    <div>
      <Nav categories={categories}/>
      <div style={{ height: "96px" }}></div>
      <Seo />
      <main>
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
    </div>
  );
};
export const getServerSideProps = async () => {
  const [sections, categories] = await Promise.all([
    fetchAPI("/sections"),
    fetchAPI("/categories"),
  ]);
  /*const res = await axios.get("http://localhost:1337/sections/");
  const sections = res.data;*/
  return {
    props: {
      sections,
      categories
    },
  };
};
export default Home;
