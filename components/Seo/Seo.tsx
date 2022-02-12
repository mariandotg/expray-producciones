import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";

const Seo = ({ seo }: any) => {
  const { siteName, metaDescription, metaTitle } = useContext(GlobalContext);

  const fullSeo = {
    ...seo,
    metaTitle: `${metaTitle} | ${siteName}`,
    metaDescription,
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />{" "}
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
    </Head>
  );
};

export default Seo;
