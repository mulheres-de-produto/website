import Image from 'next/image'

import Page from "../page-templates/Page"
import SectionTemplate from "../page-templates/SectionTemplate"

function Hero (){
  return (
    <main className="main flex flex-col items-center justify-center h-screen text-center bg-scroll bg-no-repeat bg-cover bg-hero-pattern md:bg-fixed">
      <h1 className="main-title m-2 mr-0 text-6xl font-semibold leading-normal text-white break-words whitespace-pre-line font-sora">
        MULHERES DE PRODUTO
      </h1>
      <p className="w-1/2 text-xl font-normal text-white normal-case break-words font-sora w-50">
        Uma comunidade de mentoria e crescimento profissional para todas as
        mulheres nas áreas de criação de produtos digitais.
      </p>
      <a href="https://news.mulheresdeproduto.com/inscreva-se-na-comunidade" target="_blank">
        <div className="px-1 py-4 mt-8 text-sm font-bold text-center text-white rounded w-72 bg-secondary hover:bg-primary">
          INSCREVA-SE NA COMUNIDADE
        </div>
      </a>
    </main>
  )
}

function SectionQuemSomos() {
  return (
    <SectionTemplate>
      <a href="/quem-somos" className="hover:underline">
        <span className="p-0 mx-0 text-5xl font-semibold font-sora">
          Quem Somos
        </span>
      </a>
      <p className="h-auto mt-4 text-xl font-normal text-gray-500">
        Somos uma associação sem fins lucrativos, unidas pelo objetivo de
        promover o desenvolvimento e capacitação profissional para pessoas
        que se identificam como mulheres brasileiras que desejam ingressar
        ou se especializar em áreas de tecnologia, engenharia, design e
        ciências aplicadas.
      </p>
    </SectionTemplate>
    
  )
}
function ValorComponent ({titulo, descricao}) {
  return (
    <div className="valor flex flex-col p-2 max-w-sm h-48">
      <span className="p-0 mx-0 text-2xl font-sora">
        {titulo}
      </span>
      <p className="h-auto mt-4 text-xl font-normal text-gray-500">
        {descricao}
      </p>
    </div>
  )
}

function SectionNossosValores() {
  return (
    <SectionTemplate>
      <span className="p-0 mx-0 text-5xl font-semibold font-sora">
        Nossos Valores
      </span>
      <div className="lista-valores flex flex-wrap pt-10">
        <div className="block-valores flex flex-wrap">
          <ValorComponent titulo="🪜 Sororidade" descricao="Ser uma mulher que LEVANTA outras mulheres"/>
          <ValorComponent titulo="🫂 Pertencimento" descricao="Sentir e fazer parte do ambiente que estamos criando"/>
          <ValorComponent titulo="🎯 Responsabilidade" descricao="Agir com autonomia e comprometimento"/>
        </div>
        <div className="block-valores flex flex-wrap">
          <ValorComponent titulo="✊ Diversidade intencional" descricao="Ter uma intenção real e realizar ações proativas que atuem para uma sociedade mais diversa e inclusiva"/>
          <ValorComponent titulo="💝 Ousadia na essência" descricao="Ter coragem encarando vulnerabilidade e acolhendo nossas inseguranças"/>
          <ValorComponent titulo="💬 Sinceridade autêntica" descricao="Usar da transparência e franqueza para confiarmos e nos desenvolvermos em um ambiente seguro."/>
        </div>
      </div>
    </SectionTemplate>
    
  )
}

function SectionRealizacoes() {
  const ContentOne = () => (
    <div className='flex flex-col  max-w-[50%]'>
      <p className="h-auto mt-4 mr-8 text-xl font-normal text-gray-500">
        Para realizar nosso propósito de ser a comunidade do Brasil que maior tem impacto na <b>redução de desigualdade de gênero</b>, buscamos criar um ambiente seguro e acessível para que as pessoas que se identificam como mulheres entrem na área e evoluam em suas carreiras. 
        <br/>Esse ambiente hoje é presente em todos os focos de atuação da Mulheres de Produto por meio dos valores de nosso código de cultura. 
        <br/><br/>Realizamos <b>parcerias</b> com pessoas e organizações que nos ajudem a construir, promover e divulgar conteúdos de <b>educação profissional voltados para minorias</b>. E medimos o sucesso de nossas ações pela quantidade de mulheres impactadas com cada iniciativa. Nos motivamos com o crescimento e reconhecimento profissional de cada mulher que passa por aqui. 
        <br/><br/>Se você é uma mulher que já foi impactada com as ações da Mulheres de Produto, queremos ouvir você! Inscreva-se abaixo e conte como a MdP entrou na sua vida.
      </p>
      <a href="https://news.mulheresdeproduto.com/impacto-mulheres-de-produto" target="_blank">
        <div className="px-1 py-4 mt-8 text-sm font-bold text-center text-white rounded w-72 bg-secondary hover:bg-primary">
          CONTE SUA HISTÓRIA
        </div>
      </a>
    </div>
  )

  const ContentTwo = () => (
    <Image
       src="/image.png"
       alt="Imagem do primeiro evento realizado para mais de 300 mulheres, o MDP Day em 2019"
       width={600}
       height={500}
      // unsized={true}
      // layout='fill'
     />
  )
  return (
    <SectionTemplate>
      <span className="p-0 mx-0 text-5xl font-semibold font-sora">
        Realizações
      </span>
      <div className='flex'>
        <ContentOne/>
        <ContentTwo/>
      </div>

    </SectionTemplate>
    
  )
}


function SectionOqueFizemosPorAi() {
  return (
    <SectionTemplate>
      <span className="p-0 mx-0 text-5xl font-semibold font-sora">
        O que fizemos por aí
      </span>
      <div className="lista-valores flex flex-wrap pt-10">
        <div className="block-valores flex flex-wrap">
          <ValorComponent titulo="🪜 Sororidade" descricao="Ser uma mulher que LEVANTA outras mulheres"/>
          <ValorComponent titulo="🫂 Pertencimento" descricao="Sentir e fazer parte do ambiente que estamos criando"/>
          <ValorComponent titulo="🎯 Responsabilidade" descricao="Agir com autonomia e comprometimento"/>
        </div>
        <div className="block-valores flex flex-wrap">
          <ValorComponent titulo="✊ Diversidade intencional" descricao="Ter uma intenção real e realizar ações proativas que atuem para uma sociedade mais diversa e inclusiva"/>
          <ValorComponent titulo="💝 Ousadia na essência" descricao="Ter coragem encarando vulnerabilidade e acolhendo nossas inseguranças"/>
          <ValorComponent titulo="💬 Sinceridade autêntica" descricao="Usar da transparência e franqueza para confiarmos e nos desenvolvermos em um ambiente seguro."/>
        </div>
      </div>
    </SectionTemplate>
    
  )
}


function SectionApoio() {
  return (
    <SectionTemplate>
      <span className="p-0 mx-0 text-5xl font-semibold font-sora">
        Apoio
      </span>
      <div className="lista-valores flex flex-wrap pt-10">
        <div className="block-valores flex flex-wrap">
          <ValorComponent titulo="🪜 Empresas" descricao="Empresas que nos apoiam"/>
        </div>
        <div className="block-valores flex flex-wrap">
          <ValorComponent titulo="🫂 Comunidade" descricao="Apoie a comunidade"/>
        </div>
      </div>
    </SectionTemplate>
    
  )
}

function SectionFAQ() {
  return (
    <SectionTemplate>
      <span className="p-0 mx-0 text-5xl font-semibold font-sora">
        Perguntas Frequentes
      </span>
    </SectionTemplate>
  )
}

function SectionDuvidas() {
  return (
    <SectionTemplate>
      <span className="p-0 mx-0 text-5xl font-semibold font-sora">
        Dúvidas?
      </span>
      </SectionTemplate>
    
  )
}


function SectionNewsletter() {
  return (
    <SectionTemplate>
      <span className="p-0 mx-0 text-5xl font-semibold font-sora">
        NewsLetter
      </span>
    </SectionTemplate>
    
  )
}

export default function Home() {
  return (
    <Page>
      <Hero/>
      <SectionQuemSomos/>
      <SectionNossosValores/>
      <SectionRealizacoes/>
      <SectionOqueFizemosPorAi/>
      <SectionApoio/>
      <SectionFAQ/>
      <SectionApoio/>
      <SectionDuvidas/>
      <SectionNewsletter/>
    </Page>
  )
}
