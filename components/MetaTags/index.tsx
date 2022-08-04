import Head from "next/head";

interface MetaTagsProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  url,
  image,
  keywords,
}) => {
  const defaultTitle = `${
    title ?? "Shopking"
  }  - Take Your Shopping Experience To The Next Level With Shopking.`;
  const defaultDescription =
    "With Shopking, you can be sure to focus on important things that matters to you while We do your shopping /errands. We bring luxury to you!";
  const defaulltUrl = "https://shopking.ng/";
  const defaultImage = "/public/images/thumbnail.jpg";

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Destreetboard" />

        <title>{defaultTitle}</title>
        <meta name="title" content={defaultTitle} />
        <meta name="description" content={description ?? defaultDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url ?? defaulltUrl} />
        <meta property="og:title" content={defaultTitle} />
        <meta
          property="og:description"
          content={description ?? defaultDescription}
        />
        <meta property="og:image" content={image ?? defaultImage} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url ?? defaulltUrl} />
        <meta property="twitter:title" content={defaultTitle} />
        <meta
          property="twitter:description"
          content={description ?? defaultDescription}
        />
        <meta property="twitter:image" content={image ?? defaultImage} />

        <meta
          name="keywords"
          content={
            keywords +
            " shopking, shopking.ng, shopping, shop king, destreetboard, shopping service, delivery, errand"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default MetaTags;
