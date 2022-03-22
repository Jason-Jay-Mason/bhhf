import Head from "next/head";
import { useRouter } from "next/router";

const Seo = (props) => {
  const customMeta = props;
  const router = useRouter();
  const path = process.env.NODE_ENV == "development" ? `view-source:http://localhost:3000${router.asPath}` : `view-source:brokenhearthorsefarmeire.com/${router.asPath}`;
  const meta = {
    title: "Broken Heart Horse Farm",
    description: "",
    image: "",
    type: "website",
    ...customMeta,
    noFollow: true,
    noIndex: true,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={`${meta.noFollow ? "nofollow" : "follow"},${meta.noIndex ? "noindex" : "index"}`} />
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={path} />
      <link rel="canonical" href={path} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Broken Heart Horse Farm" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />
      <meta property="twitter:card" content="summary_large_card" />
      {meta.date && <meta property="article:publish_time" content={meta.date} />}
    </Head>
  );
};

export default Seo;
