import Link from "next/link";
import { CallToAction } from "../../../components/sections/CTA/cta";
import { Footer } from "../../../components/layout/Footer";
import { Navbar } from "../../../components/layout/Navbar";
import styles from "../industria/Industry.module.css";

const capabilities = [
  "Capital de giro",
  "Financiamento de obras",
  "Antecipação de recebíveis",
  "Gestão de fornecedores",
  "Fluxo de caixa",
  "Investimentos",
];

const solutions = [
  {
    eyebrow: "Fluxo da obra",
    title: "Recursos para cada etapa do projeto.",
    description:
      "Estruture o capital necessário para fornecedores, equipes e compromissos do cronograma da obra.",
    tone: "blue",
  },
  {
    eyebrow: "Planejamento",
    title: "Mais controle sobre o próximo marco.",
    description:
      "Antecipe cenários, organize recebíveis e reduza incertezas ao longo da execução.",
    tone: "lavender",
  },
  {
    eyebrow: "Expansão",
    title: "Cresça com uma base mais sólida.",
    description:
      "Transforme novos projetos, equipamentos e oportunidades em decisões financeiras viáveis.",
    tone: "mint",
  },
];

const benefits = [
  ["Cronogramas mais claros", "Organize recursos e compromissos em sintonia com o ritmo de cada obra."],
  ["Estratégia por projeto", "Encontre alternativas que respeitam a fase, o escopo e os objetivos da construtora."],
  ["Visão sobre o caixa", "Acompanhe entradas, saídas e oportunidades com informações organizadas."],
  ["Apoio para avançar", "Construa decisões de longo prazo com uma equipe próxima ao seu negócio."],
];

function ConstructionDashboard() {
  return (
    <div className={styles.dashboard} aria-hidden="true">
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardBrand}><span>D</span> DayTrade</div>
        <div className={styles.dashboardHeaderActions}><i /><i /><b>Atualizar</b></div>
      </div>
      <div className={styles.dashboardBody}>
        <aside className={styles.dashboardSidebar}>
          <span className={styles.sidebarActive}>Visão dos projetos</span>
          <span>Fluxo de caixa</span>
          <span>Obras</span>
          <span>Recebíveis</span>
          <span>Documentos</span>
        </aside>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardTitle}>
            <div><strong>Planejamento de obras</strong><span>Atualizado hoje, 09:42</span></div>
            <button type="button">+ Nova análise</button>
          </div>
          <div className={styles.metrics}>
            <div><span>Capital disponível</span><strong>R$ 3,1 mi</strong><em>↑ 10,6%</em></div>
            <div><span>Recebíveis projetados</span><strong>R$ 1,2 mi</strong><em>↑ 7,4%</em></div>
            <div><span>Índice de cobertura</span><strong>2,8x</strong><em>↑ 0,3x</em></div>
          </div>
          <div className={styles.chartPanel}>
            <div className={styles.chartHeading}><span>Fluxo projetado</span><small>Próximos 6 meses</small></div>
            <div className={styles.chartArea}>
              <svg viewBox="0 0 800 220" preserveAspectRatio="none" role="presentation">
                <defs>
                  <linearGradient id="construction-chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#5e5bab" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#5e5bab" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 184 C62 165 108 151 175 156 S267 114 340 123 S432 86 503 98 S597 66 671 55 S748 34 800 17 L800 220 L0 220 Z" fill="url(#construction-chart-fill)" />
                <path d="M0 184 C62 165 108 151 175 156 S267 114 340 123 S432 86 503 98 S597 66 671 55 S748 34 800 17" fill="none" stroke="#5e5bab" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className={styles.chartAxis}><span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConstructionPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="construction-title">
          <div className={styles.heroContent}>
            <div className={styles.certifications} aria-label="Atendimento especializado">
              <span>Atendimento especializado</span>
              <span>Estratégia financeira</span>
              <span>Visão de longo prazo</span>
            </div>
            <p className={styles.eyebrow}>Soluções para construtoras</p>
            <h1 id="construction-title">Finanças para construir cada próximo passo.</h1>
            <p className={styles.heroDescription}>
              A DayTrade conecta planejamento, capital e clareza para que sua construtora avance com mais segurança, do canteiro ao próximo projeto.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="/#faq">Fale com um especialista <span>→</span></Link>
              <a className={styles.secondaryAction} href="#solucoes">Conheça as soluções</a>
            </div>
          </div>
          <div className={styles.trustLine}>
            <span>Planejamento financeiro para cada etapa da obra</span>
            <div className={styles.trustMarks} aria-label="Benefícios da DayTrade">
              <b>PROJETO</b><b>ESTRATÉGIA</b><b>CONTROLE</b><b>CRESCIMENTO</b>
            </div>
          </div>
          <div className={styles.dashboardWrap}><ConstructionDashboard /></div>
        </section>

        <section className={styles.capabilityStrip} aria-label="Soluções disponíveis">
          <div>{capabilities.concat(capabilities).map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div>
        </section>

        <section id="solucoes" className={styles.solutions} aria-labelledby="solutions-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Onde a DayTrade atua</p>
            <h2 id="solutions-title">Estrutura financeira para decisões que mantêm a obra em movimento.</h2>
            <p>Do fluxo diário aos investimentos que viabilizam novos projetos, organizamos alternativas alinhadas à realidade da sua construtora.</p>
          </div>
          <div className={styles.solutionGrid}>
            {solutions.map((solution, index) => (
              <article key={solution.title} className={`${styles.solutionCard} ${styles[solution.tone]}`}>
                <div className={styles.solutionVisual}><span>0{index + 1}</span><i /><i /><i /></div>
                <p>{solution.eyebrow}</p>
                <h3>{solution.title}</h3>
                <span>{solution.description}</span>
                <Link href="/#faq">Saiba mais <b>→</b></Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.context} aria-labelledby="context-title">
          <div className={styles.contextIntro}>
            <p className={styles.eyebrow}>Visão para cada etapa</p>
            <h2 id="context-title">Construir mais exige que as finanças acompanhem o projeto.</h2>
            <p>Transformamos dados, cronogramas e objetivos em uma leitura mais clara para priorizar recursos e preparar os próximos movimentos.</p>
            <Link href="/#faq">Converse sobre sua operação <span>→</span></Link>
          </div>
          <div className={styles.contextVisual} aria-hidden="true">
            <div className={styles.contextTop}><span>Prioridades do projeto</span><i /></div>
            <div className={styles.contextRows}>
              <div><i /><span><b>Fornecedores</b><small>Próxima janela: 10 dias</small></span><em>Planejar</em></div>
              <div><i /><span><b>Nova etapa da obra</b><small>Em análise</small></span><em>Ver cenário</em></div>
              <div><i /><span><b>Recebíveis</b><small>Atualizado hoje</small></span><em>Detalhes</em></div>
            </div>
          </div>
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Uma relação mais clara com o financeiro</p>
            <h2 id="benefits-title">Menos incerteza em cada etapa. Mais direção para construir.</h2>
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

        <CallToAction
          id="construction-cta"
          highlight="Cada obra avança melhor com um plano claro."
          title="Vamos estruturar os próximos movimentos da sua construtora."
          primaryLabel="Fale com um especialista"
          primaryHref="/#faq"
          secondaryLabel="Conheça as soluções"
          secondaryHref="#solucoes"
          note="Converse sobre os projetos e as prioridades da sua operação."
          showPixels={false}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}
