import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/dist/client/link";

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
    <div className="container mx-auto">
      <Navbar />

      <main className="flex items-center justify-center text-center h-screen">
        {vagas.map((vaga) => (
          <Link href={vaga.fields.linkParaCadastro}>
            <a>
              <div className="max-w-sm rounded overflow-hidden shadow-lg m-10">
                <img
                  className="w-full"
                  src={vaga.fields.image.fields.file.url}
                  alt="Pipefy"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {vaga.fields.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {vaga.fields.descricaoDaVaga}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #productmanager
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
}
