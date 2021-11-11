import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Mulheres de Produto</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <main className="flex flex-col items-center justify-center h-screen text-center bg-hero-pattern bg-no-repeat bg-scroll md:bg-fixed bg-cover">
        <div className="font-sora m-2 text-white text-6xl font-semibold leading-normal mr-0 whitespace-pre-line break-words">
          MULHERES DE <br />
          PRODUTO
        </div>
        <p className="font-sora w-1/2 text-xl break-words text-white font-normal normal-case w-50">
          Uma comunidade de mentoria e crescimento profissional para todas as
          mulheres nas áreas de criação de produtos digitais.
        </p>
      </main>
      <section className="py-14">
        <div className="max-w-full px-6 mx-auto mt-28 ml-16">
          <div className="flex flex-col justify-end text-left max-w-2xl h-full w-auto">
            <h6 className="text-sm text-left mb-4 font-normal">
              Seja bem-vinda à nossa comunidade Mulheres de Produto
            </h6>
            <span className="text-5xl font-sora mx-0 p-0 font-semibold">
              Quem Somos
            </span>
            <p className="text-xl font-normal h-auto mt-4 text-gray-500">
              Somos uma associação sem fins lucrativos, unidas pelo objetivo de
              promover o desenvolvimento e capacitação profissional para pessoas
              que se identificam como mulheres brasileiras que desejam ingressar
              ou se especializar em áreas de tecnologia, engenharia, design e
              ciências aplicadas.
            </p>

            <a href="/quem-somos">
              <div className="w-28 px-1 py-4 mt-8 bg-secondary hover:bg-primary text-white text-sm font-bold rounded text-center">
                Saiba mais
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
