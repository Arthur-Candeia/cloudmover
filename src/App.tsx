import {useState} from 'react'
import Start from './components/Start/Start'
import Card from "./components/Card/Card"

function App() {
  const [inputName, setInputName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    setInputName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
    <Start />
    <main>
      <header>
        <h1>CLOUDMOVE</h1>
        <span>NÓS SOMOS O FUTURO</span>
      </header>
      <div id="content">
        <section id="banner">
          <img src="./banner/cloud1.jpg" alt="Cloudmover" id="bannerImg"/>
          <span>VAMOS <br />MELHORAR <br />O MUNDO</span>
        </section>
        <h2>Quem somos?</h2>
        <p>
          A CloudMover é uma startup inovadora que está revolucionando a forma como interagimos com as nuvens. Fundada por um grupo de potenciais Cientistas da Computação da Universidade Federal do Espírito que são apaixonados pela preservação e sustentabilidade ambiental, nossa empresa tem como objetivo combater a escassez de chuva em áreas secas e melhorar a distribuição equitativa de água no ambiente. Acreditamos que a água é um recurso vital e essencial para a vida, e é por isso que desenvolvemos uma tecnologia pioneira para fabricar e movimentar nuvens.
        </p>
        <h2>O que fazemos?</h2>
        <p>
          Na CloudMover, utilizamos uma abordagem inovadora que envolve a condensação de aerossóis para induzir a formação de nuvens em áreas secas. Por meio de extensas pesquisas e experimentos, desenvolvemos uma metodologia eficiente que consiste no lançamento de pequenas partículas, como sal marinho ou sulfato, na atmosfera. Essas partículas atuam como núcleos de condensação, permitindo que o vapor de água presente na atmosfera se agrupe em torno delas, formando nuvens. Com o uso de tecnologias avançadas, somos capazes de movimentar essas nuvens, direcionando-as para áreas específicas que sofrem com a escassez de chuva. Dessa forma, podemos trazer alívio e benefícios para regiões afetadas pela seca.
        </p>
        <h2>Mapa interativo</h2>
        <p>
          Para proporcionar transparência e permitir que nossos clientes, principalmente entidades governamentais, acompanhem de perto nossas operações, desenvolvemos um mapa interativo em nosso site. Essa ferramenta inovadora permite visualizar em tempo real as áreas que possuem seca, onde as nuvens poderiam estar sendo criadas e as regiões que seriam beneficiadas com a chuva induzida.
        </p>
        <iframe title="Untitled" src="https://ion.cesium.com/stories/viewer/?id=88b3500c-619d-478d-a7e2-f9cf29d5363f" allow="fullscreen" allowFullScreen={true} ></iframe>
        <h2>Investimentos</h2>
        <p>
          Estamos em busca de investimentos estratégicos para impulsionar o crescimento e aprimorar ainda mais nossa tecnologia. Reconhecemos que a pesquisa e o desenvolvimento contínuo são fundamentais para aperfeiçoar nossa abordagem de condensação de aerossóis e maximizar seus benefícios. Além disso, queremos expandir nossa capacidade de atender a uma maior demanda de áreas afetadas pela seca em todo o mundo. Se você está interessado em investir em nossa startup inovadora e fazer parte dessa jornada revolucionária, entre em contato conosco para discutir oportunidades de investimento. Estamos abertos a parcerias estratégicas e a colaborações que possam impulsionar nosso crescimento e impacto positivo no combate à escassez de água.
        </p>
        <h2>Responsabilidade social/ambiental</h2>
        <p>
          Na CloudMover, assumimos uma responsabilidade sólida em relação aos aspectos sociais e ambientais de nossas operações. Estamos comprometidos em garantir que nosso trabalho esteja em conformidade com as normas ambientais e de segurança, além de minimizar quaisquer efeitos adversos associados à nossa tecnologia. Trabalhamos em estreita colaboração com especialistas ambientais e reguladores para garantir que nossas operações sejam conduzidas com os mais altos padrões éticos e sustentáveis. Além disso, promovemos ações de responsabilidade social, buscando parcerias com organizações locais e internacionais para desenvolver programas de conscientização e sustentabilidade. Nossos esforços visam promover o uso responsável e ético de nossa tecnologia, contribuindo para a conservação dos recursos hídricos e o bem-estar das comunidades afetadas pela seca.
        </p>
        <section id="cards">
          <Card symbol="♻️" name="Reciclagem"></Card>
          <Card symbol="⚡" name="Conservação"></Card>
          <Card symbol="🌳" name="Biodegradável"></Card>
          <Card symbol="☁️" name="Clima"></Card>
        </section>
        <h2>Tecnologia</h2>
        <p>
          A tecnologia desenvolvida pela CloudMover é baseada uma pesquisa e desenvolvimento intensivos na área de ciência atmosférica e tecnológica. Nossa equipe de especialistas altamente qualificados e dedicados trabalha constantemente para aprimorar nossa metodologia e otimizar a eficiência do processo de condensação de aerossóis. Investimos em tecnologia avançada e em parcerias estratégicas para impulsionar a inovação e aprimorar a viabilidade em larga escala de nossa técnica. Além disso, continuamos a realizar estudos e pesquisas para entender melhor os efeitos ambientais, os impactos climáticos e a interação com os ecossistemas locais. Nossa abordagem tecnológica está em constante evolução, sempre em busca de soluções mais eficientes e sustentáveis para enfrentar os desafios relacionados à escassez de chuva e à gestão de recursos hídricos.
        </p>
        <h2>Contate-nos</h2>
        <p>
          Se você deseja obter mais informações sobre a CloudMover, nossa tecnologia de criação de nuvens ou explorar possíveis parcerias e oportunidades de investimento, entre em contato conosco. Estamos ansiosos para compartilhar informações adicionais, responder a perguntas e discutir como podemos trabalhar juntos para enfrentar os desafios da escassez de água e promover um futuro mais sustentável e resiliente.
        </p>
        <form onSubmit={(ev) => handleSubmit(ev)} autoComplete="off">
          <input type="text" id="name" placeholder="Qual o seu nome?" required
          value={inputName} onChange={(ev) => setInputName(ev.target.value)}/>
          <input type="email" id="email" placeholder="email@example.com" required
          value={email} onChange={(ev) => setEmail(ev.target.value)}/>
          <textarea id="message" cols={30} rows={6} placeholder="Digite aqui sua mensagem" required
          value={message} onChange={(ev) => setMessage(ev.target.value)}/>
          <input type="submit" value="ENVIAR" />
        </form>
      </div>
      <footer>
        <p>Direitos de criação reservados à CloudMover © 2023</p>
      </footer>
    </main>
    </>
  )
}

export default App
