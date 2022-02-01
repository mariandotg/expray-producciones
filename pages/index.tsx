import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { SectionData } from "../types";
import Section from "../components/section/section";
import Seo from "../components/seo/seo";

const Home = ({ sections }: { sections: SectionData[] }) => {
  return (
    <div>
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
  const res = await axios.get("http://localhost:1337/sections/");
  const sections = res.data;
  return {
    props: {
      sections,
    },
  };
};
export default Home;
