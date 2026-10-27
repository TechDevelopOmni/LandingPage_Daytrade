import Link from "next/link";
import { CallToAction } from "../../components/sections/CTA/cta";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";
import styles from "./About.module.css";

const principles = [
  {
    title: "Entender antes de indicar.",
    description:
      "Toda conversa começa pelo contexto da empresa, pelos objetivos e pelo momento que ela está vivendo.",
  },
  {
    title: "Transformar dados em direção.",
    description:
      "Organizamos informações e alternativas para deixar as escolhas financeiras mais claras.",
  },
  {
    title: "Avançar junto com o negócio.",
    description:
      "A proximidade é o que permite acompanhar decisões importantes com consistência ao longo do tempo.",
  },
];

function WorkspacePreview() {
  return (
    <div className={styles.workspacePreview} aria-hidden="true">
      <div className={styles.browserBar}>
        <span className={styles.browserDots} />
        <span className={styles.browserAddress}>daytrade.com</span>
        <span className={styles.browserStatus} />
      </div>
      <div className={styles.workspaceBody}>
        <aside className={styles.workspaceSidebar}>
          <span className={styles.workspaceMark}>D</span>
          <span />
          <span />
          <span />
          <span />
        </aside>
        <div className={styles.workspaceMain}>
          <div className={styles.workspaceTitleRow}>
            <span>
              Visão financeira <i />
            </span>
            <b>Atualizar</b>
          </div>
          <div className={styles.workspaceMetrics}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.workspaceChart}>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionPreview() {
  return (
    <div className={styles.decisionPreview} aria-hidden="true">
      <div className={styles.decisionHeading}>
        <span>Próximos movimentos</span>
        <i />
      </div>
      <div className={styles.decisionRows}>
        <div>
          <i />
          <span>
            <b>Crédito</b>
            <small>Em análise</small>
          </span>
          <em>Ver detalhes</em>
        </div>
        <div>
          <i />
          <span>
            <b>Investimentos</b>
            <small>Em acompanhamento</small>
          </span>
          <em>Ver detalhes</em>
        </div>
        <div>
          <i />
          <span>
            <b>Fluxo de caixa</b>
            <small>Atualizado hoje</small>
          </span>
          <em>Ver detalhes</em>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={styles.heroContent}>
            <p className={styles.heroBadge}>Conheça a DayTrade <span>↗</span></p>
            <h1 id="about-title">Uma relação mais clara com as finanças do seu negócio.</h1>
            <p className={styles.heroDescription}>
              Aproximamos estratégia, contexto e soluções para apoiar empresas em decisões que movimentam o futuro.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="/#faq">
                Fale com um especialista
              </Link>
              <a className={styles.secondaryAction} href="#nossa-forma-de-atuar">
                Conheça nossa forma de atuar
              </a>
            </div>
          </div>
          <div className={styles.heroVisualWrap}>
            <WorkspacePreview />
          </div>
        </section>

        <section className={styles.statement}>
          <div className={styles.narrowContainer}>
            <p>
              Acreditamos que escolhas financeiras se tornam mais consistentes quando são construídas com proximidade, leitura de cenário e visão de longo prazo.
            </p>
          </div>
        </section>

        <section className={styles.story} aria-labelledby="story-title">
          <div className={styles.contentGrid}>
            <div className={styles.copyBlock}>
              <p className={styles.eyebrow}>Nossa forma de trabalhar</p>
              <h2 id="story-title">A estratégia começa por entender o que realmente importa.</h2>
              <p>
                Cada empresa tem desafios, oportunidades e ritmos próprios. Por isso, começamos pelo diálogo e transformamos informações em caminhos possíveis para o momento atual.
              </p>
              <Link href="/#faq">Converse com a DayTrade <span>→</span></Link>
            </div>
            <DecisionPreview />
          </div>
        </section>

        <section id="nossa-forma-de-atuar" className={styles.principles} aria-labelledby="principles-title">
          <div className={styles.narrowContainer}>
            <p className={styles.eyebrow}>Em cada conversa</p>
            <h2 id="principles-title">Clareza para olhar o agora. Direção para construir o próximo passo.</h2>
          </div>
          <div className={styles.principlesGrid}>
            {principles.map((principle, index) => (
              <article key={principle.title} className={styles.principleCard}>
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <CallToAction
          id="about-cta"
          highlight="A próxima decisão começa com uma boa conversa."
          title="Entenda seu cenário e encontre caminhos mais claros para avançar."
          primaryLabel="Fale com um especialista"
          primaryHref="/#faq"
          secondaryLabel="Conheça a DayTrade"
          secondaryHref="#nossa-forma-de-atuar"
          note="Uma conversa inicial, sem compromisso."
          showPixels={false}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}
