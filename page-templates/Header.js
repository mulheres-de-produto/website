import Head from 'next/head'

export default function Header() {
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
    </div>
  )
}
