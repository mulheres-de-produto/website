import React from 'react'
import {Writers} from './Writers'

export const BookComponent = () => {
  return (
    <div className="flex flex-col w-full h-screen text-center">
      <section
        id="book-hero"
        className="flex flex-col items-center w-full text-center bg-no-repeat bg-cover justify-evenly h-3/4 bg-hero-pattern-book"
      >
        <div className="flex flex-col space-y-9">
          <span className="text-6xl font-semibold leading-normal text-white break-words whitespace-pre-line font-sora">
            Livro Mulheres de Produto
          </span>
          <p className="text-xl font-normal text-white normal-case break-words font-sora">
            O <span className="text-yellow">primeiro</span> livro brasileiro
            sobre produto digital escrito <br /> por{' '}
            <span className="text-yellow">31</span> mulheres de tecnologia.
          </p>
        </div>
        <a href="https://news.mulheresdeproduto.com/livro-mulheres-de-produto">
          <div className="px-10 py-4 text-sm font-bold text-center text-white rounded bg-secondary hover:bg-primary">
            SAIBA MAIS
          </div>
        </a>
      </section>
      <Writers />
    </div>
  )
}
