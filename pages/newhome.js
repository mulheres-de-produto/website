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
    </SectionTemplate>
    
  )
}
function ValorComponent ({titulo, descricao}) {
  return (
    <div className="valor flex flex-col p-2 max-w-xs h-48">
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
        <ValorComponent titulo="Sororidade" descricao="Ser uma mulher que LEVANTA outras mulheres"/>
        <ValorComponent titulo="Pertencimento" descricao="Sentir e fazer parte do ambiente que estamos criando"/>
        <ValorComponent titulo="Responsabilidade" descricao="Agir com autonomia e comprometimento"/>
        <ValorComponent titulo="Diversidade intencional" descricao="Ter uma intenção real e realizar ações proativas que atuem para uma sociedade mais diversa e inclusiva"/>
        <ValorComponent titulo="Ousadia na essência" descricao="Ter coragem encarando vulnerabilidade e acolhendo nossas inseguranças"/>
        <ValorComponent titulo="Sinceridade autêntica" descricao="Usar da transparência e franqueza para confiarmos e nos desenvolvermos em um ambiente seguro."/>
      </div>
    </SectionTemplate>
    
  )
}

export default function Home() {
  return (
    <Page>
      <Hero/>
      <SectionQuemSomos/>
      <SectionNossosValores/>
    </Page>
  )
}
