import Page from "../page-templates/Page"
import SectionTemplate from "../page-templates/SectionTemplate"

function SectionQuemSomos() {
  return (
    <SectionTemplate>
          <h1 className="p-0 mx-0 text-5xl font-semibold font-sora">
            Quem Somos
          </h1>
          <p className="h-auto mt-4 text-xl font-normal text-gray-500 max-w-2xl" >
            Somos uma associação sem fins lucrativos, unidas pelo objetivo de
            promover o desenvolvimento e capacitação profissional para pessoas
            que se identificam como mulheres brasileiras que desejam ingressar
            ou se especializar em áreas de tecnologia, engenharia, design e
            ciências aplicadas.
          </p>
    </SectionTemplate>
  )
}

function SectionFundacao() {
  return (
    <SectionTemplate>
      <span className="p-0 mx-0 text-5xl font-semibold font-sora">
        Fundação
      </span>
      <div className="mt-20 md:max-w-full md:px-6 md:mx-auto md:mt-28 md:ml-16 m-14">
        <p className="h-auto mt-4 text-xl font-normal text-gray-500">
          A comunidade de tecnologia Mulheres de Produto foi fundada em 2018 por&nbsp;
          <a
          href="https://www.linkedin.com/in/jacquelineyumiasano/"
          className="hover:underline hover:decoration-purple-600" target="_blank"
        >
          <span className="text-purple-600">Jacqueline Asano</span>
        </a>,&nbsp;
        <a
          href="https://www.linkedin.com/in/carolineguilherme/"
          className="hover:underline hover:decoration-purple-600" target="_blank"
        >
          <span className="text-purple-600">Caroline Guilherme </span>
        </a> e&nbsp;
        <a
          href="https://www.linkedin.com/in/anapaulavale/"
          className="hover:underline  hover:decoration-purple-600" target="_blank"
        >
          <span className="text-purple-600">Ana Paula Vale</span>
        </a>&nbsp;
         fruto de uma constatação: existem poucas mulheres no mercado de produtos no Brasil. O Slack foi o primeiro canal oficial da comunidade e permitiu que mais mulheres que já estavam trabalhando com produtos digitais se conectassem e trocassem experiências. 
          Três anos depois, a comunidade conta com mais de 8 mil mulheres espalhadas pelo Brasil e pelo mundo, e cresceu para se tornar uma ONG que tem como sócias Jacqueline Asano, Caroline Guilherme e Talita Morais. Nosso principal pilar é a sororidade, assim queremos promover um ambiente onde as mulheres tenham a oportunidade de acessar dicas de carreira, eventos, submissão de palestras, novos cursos e muito mais. Além disso, é um espaço para se sentirem livres e bem-vindas a falar de desafios e problemas que enfrentam diariamente na área de Produto e Meio Tech e também como, maternidade, promoção, migração de carreira e tudo que é importante pra elas.
        </p>
      </div>
      <div className="mt-20 md:max-w-full md:px-6 md:mx-auto md:mt-28 md:ml-16 m-14">
        <h6 className="mb-4 text-sm font-normal text-left">
          Saiba mais
        </h6>
        <p className="h-auto mt-4 text-xl font-normal text-gray-500">
          A Jacque fala mais sobre a comunidade aqui neste Podcast
          Quando a comunidade tinha 4 meses
        </p>
      </div>
    </SectionTemplate>
  )
}

export default function QuemSomos() {
  return (
    <>
      <Page>
        <SectionQuemSomos/>
        <SectionFundacao/>
      </Page>
      
    </>
  )
}
