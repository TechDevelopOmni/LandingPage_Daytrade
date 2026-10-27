import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";
import { CallToAction } from "../../components/sections/CTA/cta";
import styles from "../setores/industria/Industry.module.css";

const capabilities = [
  "Visão financeira",
  "Fluxo de caixa",
  "Documentos",
  "Solicitações",
  "Acompanhamento",
  "Atendimento",
];

const highlights = [
  {
    eyebrow: "Visão consolidada",
    title: "Encontre o que importa em um só lugar.",
    description:
      "Acompanhe informações, solicitações e próximos passos com uma leitura simples e organizada.",
    tone: "blue",
  },
  {
    eyebrow: "Acompanhamento",
    title: "Saiba o que está acontecendo agora.",
    description:
      "Tenha visibilidade sobre cada conversa e oportunidade em andamento com a DayTrade.",
    tone: "mint",
  },
  {
    eyebrow: "Documentos",
    title: "Tudo organizado para quando precisar.",
    description:
      "Centralize materiais e informações importantes para tornar cada etapa mais objetiva.",
    tone: "lavender",
  },
];

const benefits = [
  ["Mais visibilidade", "Entenda o cenário atual com informações organizadas e fáceis de consultar."],
  ["Menos idas e vindas", "Acompanhe solicitações e documentos sem precisar procurar em diferentes canais."],
  ["Próximos passos claros", "Saiba o que está em andamento e quais decisões merecem sua atenção."],
  ["Relação próxima", "Conte com a DayTrade em uma experiência construída para acompanhar seu negócio."],
];

function ClientDashboard() {
  return (
    <div className={styles.dashboard} aria-hidden="true">
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardBrand}><span>D</span> DayTrade</div>
        <div className={styles.dashboardHeaderActions}><i /><i /><b>Meu perfil</b></div>
      </div>
      <div className={styles.dashboardBody}>
        <aside className={styles.dashboardSidebar}>
          <span className={styles.sidebarActive}>Visão geral</span>
          <span>Minha operação</span>
          <span>Solicitações</span>
          <span>Documentos</span>
          <span>Atendimento</span>
        </aside>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardTitle}>
            <div><strong>Olá, Marcos</strong><span>Veja o resumo da sua operação</span></div>
            <button type="button">+ Nova solicitação</button>
          </div>
          <div className={styles.metrics}>
            <div><span>Solicitações ativas</span><strong>03</strong><em>Atualizado hoje</em></div>
            <div><span>Documentos recentes</span><strong>12</strong><em>↑ 4 esta semana</em></div>
            <div><span>Próxima conversa</span><strong>14:30</strong><em>Quinta-feira</em></div>
          </div>
          <div className={styles.chartPanel}>
            <div className={styles.chartHeading}><span>Atividades recentes</span><small>Últimos 30 dias</small></div>
            <div className={styles.chartArea}>
              <svg viewBox="0 0 800 220" preserveAspectRatio="none" role="presentation">
                <defs>
                  <linearGradient id="client-area-chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1e78a7" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#1e78a7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 177 C68 158 111 165 177 138 S276 145 349 100 S439 118 518 78 S638 92 703 48 S755 36 800 24 L800 220 L0 220 Z" fill="url(#client-area-chart-fill)" />
                <path d="M0 177 C68 158 111 165 177 138 S276 145 349 100 S439 118 518 78 S638 92 703 48 S755 36 800 24" fill="none" stroke="#1e78a7" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className={styles.chartAxis}><span>Semana 1</span><span>Semana 2</span><span>Semana 3</span><span>Semana 4</span><span>Hoje</span><span>Próximo passo</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientAreaPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="client-area-title">
          <div className={styles.heroContent}>
            <div className={styles.certifications} aria-label="Benefícios da área do cliente">
              <span>Visão em tempo real</span>
              <span>Documentos organizados</span>
              <span>Atendimento próximo</span>
            </div>
            <p className={styles.eyebrow}>Área do Cliente</p>
            <h1 id="client-area-title">Tudo o que move seu negócio, em um só lugar.</h1>
            <p className={styles.heroDescription}>
              Acompanhe sua relação com a DayTrade de forma simples, com mais contexto para cada conversa, solicitação e próximo passo.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#acessar-area">Acessar minha área <span>→</span></a>
              <a className={styles.secondaryAction} href="#recursos">Conheça os recursos</a>
            </div>
          </div>
          <div className={styles.trustLine}>
            <span>Uma experiência mais clara para acompanhar sua operação</span>
            <div className={styles.trustMarks} aria-label="Recursos da área do cliente">
              <b>VISÃO</b><b>ORGANIZAÇÃO</b><b>CONTROLE</b><b>PROXIMIDADE</b>
            </div>
          </div>
          <div className={styles.dashboardWrap}><ClientDashboard /></div>
        </section>

        <section className={styles.capabilityStrip} aria-label="Recursos disponíveis">
          <div>{capabilities.concat(capabilities).map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div>
        </section>

        <section id="recursos" className={styles.solutions} aria-labelledby="resources-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>O que você encontra</p>
            <h2 id="resources-title">Uma experiência feita para deixar cada decisão mais próxima.</h2>
            <p>Da visão financeira ao acompanhamento de solicitações, sua Área do Cliente reúne o contexto que ajuda a seguir em frente.</p>
          </div>
          <div className={styles.solutionGrid}>
            {highlights.map((highlight, index) => (
              <article key={highlight.title} className={`${styles.solutionCard} ${styles[highlight.tone]}`}>
                <div className={styles.solutionVisual}><span>0{index + 1}</span><i /><i /><i /></div>
                <p>{highlight.eyebrow}</p>
                <h3>{highlight.title}</h3>
                <span>{highlight.description}</span>
                <a href="#acessar-area">Conhecer <b>→</b></a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.context} aria-labelledby="context-title">
          <div className={styles.contextIntro}>
            <p className={styles.eyebrow}>Acompanhamento sem ruído</p>
            <h2 id="context-title">Uma visão clara para saber o que precisa da sua atenção.</h2>
            <p>Organizamos informações relevantes para que você acompanhe a operação e aproveite melhor cada conversa com a DayTrade.</p>
            <a href="#acessar-area">Explorar a Área do Cliente <span>→</span></a>
          </div>
          <div className={styles.contextVisual} aria-hidden="true">
            <div className={styles.contextTop}><span>Próximos passos</span><i /></div>
            <div className={styles.contextRows}>
              <div><i /><span><b>Documentos solicitados</b><small>2 itens pendentes</small></span><em>Ver agora</em></div>
              <div><i /><span><b>Conversa com especialista</b><small>Quinta-feira, 14:30</small></span><em>Detalhes</em></div>
              <div><i /><span><b>Atualização da operação</b><small>Disponível hoje</small></span><em>Acessar</em></div>
            </div>
          </div>
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Feita para o seu dia a dia</p>
            <h2 id="benefits-title">Mais contexto para cuidar melhor das decisões do seu negócio.</h2>
          </div>
          <div className={styles.benefitGrid}>
            {benefits.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <div id="acessar-area">
          <CallToAction
            id="client-area-cta"
            highlight="Sua operação merece uma visão mais próxima."
            title="Acesse a Área do Cliente e acompanhe seus próximos passos."
            primaryLabel="Acessar minha área"
            primaryHref="#acessar-area"
            secondaryLabel="Falar com a DayTrade"
            secondaryHref="/#faq"
            note="Caso precise de ajuda, nossa equipe está pronta para conversar."
            showPixels={false}
            variant="blue"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
