import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createClient } from "contentful";
import Link from "next/link";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "vagas",
  });

  return {
    props: {
      vagas: res.items,
    },
  };
}

export default function Vagas({ vagas }) {
  return (
    <>
      <Navbar />

      <main className="flex items-center justify-center h-screen text-center">
        {vagas.map((vaga) => (
          <Link key={vaga.fields.title} href={"/vagas/" + vaga.fields.slug}>
            <a>
              <div className="max-w-sm m-10 overflow-hidden rounded shadow-lg">
                <img
                  className="w-full"
                  src={vaga.fields.image.fields.file.url}
                  alt="Pipefy"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    {vaga.fields.title}
                  </div>
                  <p className="text-base text-gray-700">
                    {vaga.fields.descricaoDaVaga}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    #productmanager
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </main>
      <Footer />
    </>
  );
}
