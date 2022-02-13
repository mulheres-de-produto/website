import React from 'react'
import Head from 'next/head'
import {Navbar} from '../components/Navbar'
import Footer from '../components/Footer'
import {BookHero} from '../components/Book/BookHero'
import {Writers} from '../components/Book/Writers'

export const BookPage = () => {
  return (
    <>
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
      <BookHero />
      <Writers />
      <Footer />
    </>
  )
}

export default BookPage
