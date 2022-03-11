import React from "react";
import { createClient } from "contentful";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "vagas",
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "vagas",
    "fields.slug": params.slug,
  });

  return {
    props: { vaga: items[0] },
  };
};

export default function VagaDetails({ vaga }) {
  const { title, nivel, image, offerDescription } = vaga.fields;

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src={"https:" + image.fields.file.url}
          width={400}
          height={300}
        />
        <h2>{title}</h2>
        <div className="info">
          {nivel.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        <div className="m-10 text-left">
          {documentToReactComponents(offerDescription)}
        </div>
      </div>
      <Footer />
    </>
  );
}
