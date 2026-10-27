import Link from "next/link";
import { CallToAction } from "../../../components/sections/CTA/cta";
import { Footer } from "../../../components/layout/Footer";
import { Navbar } from "../../../components/layout/Navbar";
import styles from "../industria/Industry.module.css";

const capabilities = [
  "Custeio agrícola",
  "Crédito rural",
  "Proteção cambial",
  "Compra de insumos",
  "Gestão de recebíveis",
  "Investimentos",
];

const solutions = [
  {
    eyebrow: "Custeio e produção",
    title: "Recursos no tempo certo da safra.",
    description:
      "Estruture o capital necessário para insumos, operação e compromissos de cada ciclo produtivo.",
    tone: "mint",
  },
  {
    eyebrow: "Planejamento",
    title: "Mais segurança para cada colheita.",
    description:
      "Antecipe cenários e organize alternativas para atravessar etapas decisivas com mais previsibilidade.",
    tone: "blue",
  },
  {
    eyebrow: "Crescimento",
    title: "Invista no próximo horizonte.",
    description:
      "Transforme planos de expansão, tecnologia e estrutura em caminhos financeiros viáveis.",
    tone: "lavender",
  },
];

const benefits = [
  ["Ciclos mais previsíveis", "Organize recursos e compromissos de acordo com o calendário da sua operação."],
  ["Estratégia que respeita a safra", "Considere sazonalidade, mercado e objetivos antes de escolher o próximo caminho."],
  ["Visão sobre o caixa", "Acompanhe entradas, saídas e oportunidades com informações organizadas."],
  ["Apoio para crescer", "Construa decisões de longo prazo com uma equipe próxima ao seu negócio."],
];

function AgribusinessDashboard() {
  return (
    <div className={styles.dashboard} aria-hidden="true">
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardBrand}><span>D</span> DayTrade</div>
        <div className={styles.dashboardHeaderActions}><i /><i /><b>Atualizar</b></div>
      </div>
      <div className={styles.dashboardBody}>
        <aside className={styles.dashboardSidebar}>
          <span className={styles.sidebarActive}>Visão da safra</span>
          <span>Fluxo de caixa</span>
          <span>Custeio</span>
          <span>Recebíveis</span>
          <span>Documentos</span>
        </aside>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardTitle}>
            <div><strong>Planejamento da safra</strong><span>Atualizado hoje, 09:42</span></div>
            <button type="button">+ Nova análise</button>
          </div>
          <div className={styles.metrics}>
            <div><span>Capital disponível</span><strong>R$ 1,8 mi</strong><em>↑ 9,4%</em></div>
            <div><span>Recebíveis projetados</span><strong>R$ 672 mil</strong><em>↑ 6,7%</em></div>
            <div><span>Índice de cobertura</span><strong>2,3x</strong><em>↑ 0,2x</em></div>
          </div>
          <div className={styles.chartPanel}>
            <div className={styles.chartHeading}><span>Fluxo projetado</span><small>Próximos 6 meses</small></div>
            <div className={styles.chartArea}>
              <svg viewBox="0 0 800 220" preserveAspectRatio="none" role="presentation">
                <defs>
                  <linearGradient id="agro-chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#218574" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#218574" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 176 C68 168 108 134 172 145 S280 88 352 109 S449 122 518 86 S610 72 684 50 S754 48 800 18 L800 220 L0 220 Z" fill="url(#agro-chart-fill)" />
                <path d="M0 176 C68 168 108 134 172 145 S280 88 352 109 S449 122 518 86 S610 72 684 50 S754 48 800 18" fill="none" stroke="#218574" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className={styles.chartAxis}><span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AgribusinessPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="agribusiness-title">
          <div className={styles.heroContent}>
            <div className={styles.certifications} aria-label="Atendimento especializado">
              <span>Atendimento especializado</span>
              <span>Estratégia financeira</span>
              <span>Visão de longo prazo</span>
            </div>
            <p className={styles.eyebrow}>Soluções para agronegócio</p>
            <h1 id="agribusiness-title">Finanças para quem cultiva o próximo ciclo.</h1>
            <p className={styles.heroDescription}>
              A DayTrade conecta planejamento, capital e clareza para que sua operação avance no ritmo certo, da safra ao crescimento do negócio.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="/#faq">Fale com um especialista <span>→</span></Link>
              <a className={styles.secondaryAction} href="#solucoes">Conheça as soluções</a>
            </div>
          </div>
          <div className={styles.trustLine}>
            <span>Planejamento financeiro para cada etapa da operação</span>
            <div className={styles.trustMarks} aria-label="Benefícios da DayTrade">
              <b>SAFRA</b><b>ESTRATÉGIA</b><b>CONTROLE</b><b>CRESCIMENTO</b>
            </div>
          </div>
          <div className={styles.dashboardWrap}><AgribusinessDashboard /></div>
        </section>

        <section className={styles.capabilityStrip} aria-label="Soluções disponíveis">
          <div>{capabilities.concat(capabilities).map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div>
        </section>

        <section id="solucoes" className={styles.solutions} aria-labelledby="solutions-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Onde a DayTrade atua</p>
            <h2 id="solutions-title">Estrutura financeira para decisões que acompanham o campo.</h2>
            <p>Do custeio da produção aos investimentos que ampliam o negócio, organizamos alternativas alinhadas ao calendário e aos seus objetivos.</p>
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
            <h2 id="context-title">O campo exige planejamento. As finanças também.</h2>
            <p>Transformamos dados, sazonalidade e objetivos em uma leitura mais clara para priorizar recursos e preparar os próximos movimentos.</p>
            <Link href="/#faq">Converse sobre sua operação <span>→</span></Link>
          </div>
          <div className={styles.contextVisual} aria-hidden="true">
            <div className={styles.contextTop}><span>Prioridades da safra</span><i /></div>
            <div className={styles.contextRows}>
              <div><i /><span><b>Compra de insumos</b><small>Próxima janela: 8 dias</small></span><em>Planejar</em></div>
              <div><i /><span><b>Custeio da safra</b><small>Em análise</small></span><em>Ver cenário</em></div>
              <div><i /><span><b>Recebíveis</b><small>Atualizado hoje</small></span><em>Detalhes</em></div>
            </div>
          </div>
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Uma relação mais clara com o financeiro</p>
            <h2 id="benefits-title">Menos incerteza em cada ciclo. Mais direção para o negócio.</h2>
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
          id="agribusiness-cta"
          highlight="Cada safra começa com um bom planejamento."
          title="Vamos organizar os próximos movimentos do seu agronegócio."
          primaryLabel="Fale com um especialista"
          primaryHref="/#faq"
          secondaryLabel="Conheça as soluções"
          secondaryHref="#solucoes"
          note="Converse sobre os ciclos e os objetivos da sua operação."
          showPixels={false}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}
