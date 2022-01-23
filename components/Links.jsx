import React from 'react'

export default function Links() {
  return (
    <section className="flex space-x-40 text-white justify-items-start">
      <div className="flex flex-col space-y-4 justify-items-start">
        <span className="text-lg">Comunidade</span>
        <a href="/parcerias" className="hover:underline">
          <span className="text-base">Parcerias</span>
        </a>
        <a href="/vagas" className="hover:underline">
          <span className="text-base">Vagas</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/podcast"
          className="hover:underline"
        >
          <span className="text-base">Podcast</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/programas"
          className="hover:underline"
        >
          <span className="text-base">Programas</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/termos-de-uso-newsletter"
          className="hover:underline"
        >
          <span className="text-base">Newsletter</span>
        </a>
      </div>
      <div className="flex flex-col space-y-4 justify-items-start">
        <span className="text-lg">Organização</span>
        <a
          href="https://mulheresdeproduto.com/políticas-de-privacidade"
          className="hover:underline"
        >
          <span className="text-base">Políticas de privacidade</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/termos-de-uso-newsletter"
          className="hover:underline"
        >
          <span className="text-base">Termos de uso</span>
        </a>

        <a
          href="https://mulheresdeproduto.com/c%C3%B3digo-de-%C3%A9tica-e-conduta"
          className="hover:underline"
        >
          <span className="text-base">Código de ética e conduta</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/ouvidoria"
          className="hover:underline"
        >
          <span className="text-base">Ouvidoria</span>
        </a>
      </div>
    </section>
  )
}
