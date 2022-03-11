import React from "react";

export default function Links() {
  return (
    <section className="flex flex-col justify-center order-1 my-10 text-center text-white laptop:ml-40 laptop:text-left laptop:order-2 laptop:mt-0 laptop:space-x-32 laptop:justify-items-start laptop:flex-row">
      <div className="flex flex-col justify-items-start laptop:space-y-3">
        <a href="/parcerias" className="hover:underline">
          <span className="text-md">Parcerias</span>
        </a>
        <a href="/vagas" className="hover:underline">
          <span className="text-md">Vagas</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/podcast"
          className="hover:underline"
        >
          <span className="text-md">Podcast</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/programas"
          className="hover:underline"
        >
          <span className="text-md">Programas</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/termos-de-uso-newsletter"
          className="hover:underline"
        >
          <span className="text-md">Newsletter</span>
        </a>
      </div>
      <div className="flex flex-col justify-items-start laptop:space-y-3">
        <a
          href="https://mulheresdeproduto.com/políticas-de-privacidade"
          className="hover:underline"
        >
          <span className="text-md">Políticas de privacidade</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/termos-de-uso-newsletter"
          className="hover:underline"
        >
          <span className="text-md">Termos de uso</span>
        </a>

        <a
          href="https://mulheresdeproduto.com/c%C3%B3digo-de-%C3%A9tica-e-conduta"
          className="hover:underline"
        >
          <span className="text-md">Código de ética e conduta</span>
        </a>
        <a
          href="https://mulheresdeproduto.com/ouvidoria"
          className="hover:underline"
        >
          <span className="text-md">Ouvidoria</span>
        </a>
      </div>
    </section>
  );
}
