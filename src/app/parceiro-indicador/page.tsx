import Link from "next/link";
import { CallToAction } from "../../components/sections/CTA/cta";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";
import styles from "../sobre-nos/About.module.css";

const steps = [
  {
    title: "Você apresenta.",
    description:
      "Indique empresas que podem se beneficiar de uma conversa financeira mais estratégica.",
  },
  {
    title: "Nós conduzimos.",
    description:
      "Nossa equipe entende o cenário, avalia alternativas e acompanha cada oportunidade com cuidado.",
  },
  {
    title: "Todos avançam.",
    description:
      "Construímos uma relação transparente, com retornos claros sobre cada indicação qualificada.",
  },
];

function PartnerPreview() {
  return (
    <div className={styles.workspacePreview} aria-hidden="true">
      <div className={styles.browserBar}>
        <span className={styles.browserDots} />
        <span className={styles.browserAddress}>daytrade.com/parceiros</span>
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
              Indicações <i />
            </span>
            <b>Nova indicação</b>
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

function ReferralPreview() {
  const referrals = [
    ["Empresa Aurora", "Em contato"],
    ["Grupo Horizonte", "Diagnóstico agendado"],
    ["Crescer Indústria", "Em acompanhamento"],
  ];

  return (
    <div className={styles.decisionPreview} aria-hidden="true">
      <div className={styles.decisionHeading}>
        <span>Suas indicações</span>
        <i />
      </div>
      <div className={styles.decisionRows}>
        {referrals.map(([company, status]) => (
          <div key={company}>
            <i />
            <span>
              <b>{company}</b>
              <small>{status}</small>
            </span>
            <em>Ver status</em>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnerPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="partner-title">
          <div className={styles.heroContent}>
            <p className={styles.heroBadge}>Programa de parceria <span>↗</span></p>
            <h1 id="partner-title">Boas conexões podem abrir novos caminhos para empresas.</h1>
            <p className={styles.heroDescription}>
              Torne-se um parceiro indicador DayTrade e conecte sua rede a soluções financeiras pensadas para cada momento do negócio.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="/#faq">
                Quero ser parceiro
              </Link>
              <a className={styles.secondaryAction} href="#como-funciona">
                Entenda como funciona
              </a>
            </div>
          </div>
          <div className={styles.heroVisualWrap}>
            <PartnerPreview />
          </div>
        </section>

        <section className={styles.statement}>
          <div className={styles.narrowContainer}>
            <p>
              Uma boa indicação nasce da confiança. A parceria transforma essa confiança em oportunidades mais bem acompanhadas para todos.
            </p>
          </div>
        </section>

        <section className={styles.story} aria-labelledby="partner-story-title">
          <div className={styles.contentGrid}>
            <div className={styles.copyBlock}>
              <p className={styles.eyebrow}>Visibilidade em cada etapa</p>
              <h2 id="partner-story-title">Você aproxima. A DayTrade cuida do próximo passo.</h2>
              <p>
                Nosso time recebe cada empresa com atenção ao contexto e compartilha o andamento das oportunidades de forma simples, respeitosa e transparente.
              </p>
              <Link href="/#faq">Converse sobre a parceria <span>→</span></Link>
            </div>
            <ReferralPreview />
          </div>
        </section>

        <section id="como-funciona" className={styles.principles} aria-labelledby="steps-title">
          <div className={styles.narrowContainer}>
            <p className={styles.eyebrow}>Como funciona</p>
            <h2 id="steps-title">Uma parceria direta, próxima e feita para gerar valor.</h2>
          </div>
          <div className={styles.principlesGrid}>
            {steps.map((step, index) => (
              <article key={step.title} className={styles.principleCard}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <CallToAction
          id="partner-cta"
          highlight="Boas conexões criam novas possibilidades."
          title="Apresente sua rede à DayTrade e construa uma parceria de confiança."
          primaryLabel="Quero ser parceiro"
          primaryHref="/#faq"
          secondaryLabel="Entenda a parceria"
          secondaryHref="#como-funciona"
          note="Vamos conversar sobre como indicar empresas à DayTrade."
          showPixels={false}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}
