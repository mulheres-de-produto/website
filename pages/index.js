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
      </Head>
      <Navbar />

      <main className="flex flex-col items-center justify-center h-screen text-center">
        <div className="relative tracking-normal m-2 max-w-full z-50 text-white text-6xl font-semibold leading-normal mr-0 whitespace-pre-line break-words">
          MULHERES DE PRODUTO
        </div>
        <span className="min-w-full text-xl break-words text-white z-50 font-normal normal-case w-50">
          Uma comunidade de mentoria e crescimento profissional para todas as
          mulheres nas áreas de criação de produtos digitais.
        </span>
        <div className="opacity-90">
          <Image
            src="/image.png"
            alt="Foto evento Mulheres de Produto"
            width={1431}
            height={1074}
            objectFit="cover"
            quality={100}
            layout="fill"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
