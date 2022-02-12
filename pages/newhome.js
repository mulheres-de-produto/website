import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import {Navbar} from '../components/Navbar'

export default function Home() {
  return (
    <div className="flex flex-col">
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

      <main className="flex flex-col items-center justify-center h-screen text-center bg-scroll bg-no-repeat bg-cover bg-hero-pattern-home md:bg-fixed">
        <div className="m-2 mr-0 text-6xl font-semibold leading-normal text-white break-words whitespace-pre-line font-sora">
          MULHERES DE <br />
          PRODUTO
        </div>
        <p className="w-1/2 text-xl font-normal text-white normal-case break-words font-sora w-50">
          Uma comunidade de mentoria e crescimento profissional para todas as
          mulheres nas áreas de criação de produtos digitais.
        </p>
      </main>
      <section className="flex-1 py-14">
        <div className="mt-20 md:max-w-full md:px-6 md:mx-auto md:mt-28 md:ml-16 m-14">
          <div className="flex flex-col justify-end w-auto h-full max-w-2xl text-left">
            <h6 className="mb-4 text-sm font-normal text-left">
              Seja bem-vinda à nossa comunidade Mulheres de Produto
            </h6>
            <span className="p-0 mx-0 text-5xl font-semibold font-sora">
              Quem Somos
            </span>
            <p className="h-auto mt-4 text-xl font-normal text-gray-500">
              Somos uma associação sem fins lucrativos, unidas pelo objetivo de
              promover o desenvolvimento e capacitação profissional para pessoas
              que se identificam como mulheres brasileiras que desejam ingressar
              ou se especializar em áreas de tecnologia, engenharia, design e
              ciências aplicadas.
            </p>

            <a href="/quem-somos">
              <div className="px-1 py-4 mt-8 text-sm font-bold text-center text-white rounded w-28 bg-secondary hover:bg-primary">
                Saiba mais
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
