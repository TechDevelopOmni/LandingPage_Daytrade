import Link from "next/link";
import { CallToAction } from "../../../components/sections/CTA/cta";
import { Footer } from "../../../components/layout/Footer";
import { Navbar } from "../../../components/layout/Navbar";
import styles from "./Industry.module.css";

const capabilities = [
  "Capital de giro",
  "Antecipação de recebíveis",
  "Câmbio",
  "Financiamento de máquinas",
  "Gestão de caixa",
  "Investimentos",
];

const solutions = [
  {
    eyebrow: "Capital de giro",
    title: "Mantenha a operação em movimento.",
    description:
      "Estruture recursos para compras, fornecedores e ciclos produtivos com mais previsibilidade.",
    tone: "blue",
  },
  {
    eyebrow: "Crescimento",
    title: "Planeje os próximos investimentos.",
    description:
      "Apoio para modernizar, expandir capacidade e transformar oportunidades em novos resultados.",
    tone: "mint",
  },
  {
    eyebrow: "Visão financeira",
    title: "Decida com o cenário completo.",
    description:
      "Conecte dados, prioridades e alternativas para tomar decisões financeiras com mais clareza.",
    tone: "lavender",
  },
];

const benefits = [
  ["Ciclos sob controle", "Leia o caixa com atenção aos prazos de compra, produção e recebimento."],
  ["Estratégia sob medida", "Encontre alternativas que respeitam o momento e os objetivos da sua indústria."],
  ["Acompanhamento próximo", "Conte com uma equipe que traduz cenários complexos em próximos passos possíveis."],
  ["Decisões mais rápidas", "Organize prioridades e oportunidades em uma conversa mais objetiva."],
];

function IndustryDashboard() {
  return (
    <div className={styles.dashboard} aria-hidden="true">
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardBrand}><span>D</span> DayTrade</div>
        <div className={styles.dashboardHeaderActions}><i /><i /><b>Atualizar</b></div>
      </div>
      <div className={styles.dashboardBody}>
        <aside className={styles.dashboardSidebar}>
          <span className={styles.sidebarActive}>Visão geral</span>
          <span>Fluxo de caixa</span>
          <span>Crédito</span>
          <span>Investimentos</span>
          <span>Documentos</span>
        </aside>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardTitle}>
            <div><strong>Visão da operação</strong><span>Atualizado hoje, 09:42</span></div>
            <button type="button">+ Nova análise</button>
          </div>
          <div className={styles.metrics}>
            <div><span>Disponibilidade</span><strong>R$ 2,4 mi</strong><em>↑ 12,8%</em></div>
            <div><span>Próximos recebimentos</span><strong>R$ 846 mil</strong><em>↑ 8,2%</em></div>
            <div><span>Índice de cobertura</span><strong>2,6x</strong><em>↑ 0,4x</em></div>
          </div>
          <div className={styles.chartPanel}>
            <div className={styles.chartHeading}><span>Fluxo projetado</span><small>Últimos 6 meses</small></div>
            <div className={styles.chartArea}>
              <svg viewBox="0 0 800 220" preserveAspectRatio="none" role="presentation">
                <defs>
                  <linearGradient id="industry-chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1e78a7" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#1e78a7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 182 C90 158 103 170 178 138 S280 130 354 113 S452 126 520 72 S643 81 704 44 S753 30 800 20 L800 220 L0 220 Z" fill="url(#industry-chart-fill)" />
                <path d="M0 182 C90 158 103 170 178 138 S280 130 354 113 S452 126 520 72 S643 81 704 44 S753 30 800 20" fill="none" stroke="#1e78a7" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className={styles.chartAxis}><span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndustryPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="industry-title">
          <div className={styles.heroContent}>
            <div className={styles.certifications} aria-label="Atendimento especializado">
              <span>Atendimento especializado</span>
              <span>Estratégia financeira</span>
              <span>Visão de longo prazo</span>
            </div>
            <p className={styles.eyebrow}>Soluções para indústria</p>
            <h1 id="industry-title">Finanças para uma indústria que não pode parar.</h1>
            <p className={styles.heroDescription}>
              Centralize as decisões que movem sua operação. A DayTrade aproxima estratégia, capital e clareza para cada próximo ciclo.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="/#faq">Fale com um especialista <span>→</span></Link>
              <a className={styles.secondaryAction} href="#solucoes">Conheça as soluções</a>
            </div>
          </div>
          <div className={styles.trustLine}>
            <span>Uma operação mais clara começa por aqui</span>
            <div className={styles.trustMarks} aria-label="Benefícios da DayTrade">
              <b>CAPITAL</b><b>ESTRATÉGIA</b><b>CONTROLE</b><b>CRESCIMENTO</b>
            </div>
          </div>
          <div className={styles.dashboardWrap}><IndustryDashboard /></div>
        </section>

        <section className={styles.capabilityStrip} aria-label="Soluções disponíveis">
          <div>{capabilities.concat(capabilities).map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div>
        </section>

        <section id="solucoes" className={styles.solutions} aria-labelledby="solutions-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Onde a DayTrade atua</p>
            <h2 id="solutions-title">Estrutura financeira para decisões que sustentam a produção.</h2>
            <p>Do caixa diário aos investimentos que ampliam capacidade, organizamos alternativas alinhadas à realidade da sua operação.</p>
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
            <h2 id="context-title">Produzir mais exige que as finanças acompanhem o mesmo ritmo.</h2>
            <p>Transformamos dados e objetivos em uma leitura clara para priorizar recursos, reduzir atritos e preparar os próximos movimentos.</p>
            <Link href="/#faq">Converse sobre sua operação <span>→</span></Link>
          </div>
          <div className={styles.contextVisual} aria-hidden="true">
            <div className={styles.contextTop}><span>Prioridades da operação</span><i /></div>
            <div className={styles.contextRows}>
              <div><i /><span><b>Matéria-prima</b><small>Próxima janela: 12 dias</small></span><em>Planejar</em></div>
              <div><i /><span><b>Máquinas e equipamentos</b><small>Expansão em estudo</small></span><em>Ver cenário</em></div>
              <div><i /><span><b>Recebíveis</b><small>Atualizado hoje</small></span><em>Detalhes</em></div>
            </div>
          </div>
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Uma relação mais clara com o financeiro</p>
            <h2 id="benefits-title">Menos ruído nas decisões. Mais direção para o negócio.</h2>
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
          id="industry-cta"
          highlight="A próxima etapa da operação merece clareza."
          title="Vamos organizar os recursos que movem a sua indústria."
          primaryLabel="Fale com um especialista"
          primaryHref="/#faq"
          secondaryLabel="Conheça as soluções"
          secondaryHref="#solucoes"
          note="Converse sobre os desafios e as oportunidades da sua operação."
          showPixels={false}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}
