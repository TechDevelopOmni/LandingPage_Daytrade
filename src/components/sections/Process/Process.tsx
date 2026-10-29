import { SpecialistContactButton } from "../../contact/SpecialistContact";
import styles from "./Process.module.css";

const steps = [
  {
    number: "1",
    title: "Converse com um especialista",
    description:
      "Entendemos o momento da sua empresa e identificamos a solução financeira mais adequada.",
  },
  {
    number: "2",
    title: "Envie a documentação necessária.",
    description:
      "Organizamos os documentos para seguir com a análise de crédito e a formalização da proposta.",
  },
  {
    number: "3",
    title: "Receba e aprove a proposta",
    description:
      "Você recebe as condições da operação com clareza para avaliar e assinar digitalmente.",
  },
  {
    number: "4",
    title: "Receba com praticidade na conta digital DTI",
    description:
      "Após a conclusão da operação, os recursos são disponibilizados na sua conta digital DTI, com praticidade e segurança para sua empresa.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function Process() {
  return (
    <section
      id="process"
      className={styles.section}
      aria-labelledby="process-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 id="process-title" className={styles.sectionTitle}>
            Gerando oportunidades em poucos passos.
          </h2>

          <p className={styles.description}>
            Uma jornada simples, com acompanhamento especializado em cada etapa.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>
              Como Funciona
            </span>

            <h3 className={styles.title}>
              Do primeiro contato ao crédito em sua conta.
            </h3>
          </div>

          <div className={styles.timeline}>
            <ol className={styles.steps}>
              {steps.map((step) => (
                <li key={step.number} className={styles.step}>
                  <span
                    className={styles.stepNumber}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  <article className={styles.card}>
                    <div className={styles.cardHeading}>
                      <span className={styles.checkIcon}>
                        <CheckIcon />
                      </span>

                      <h3 className={styles.cardTitle}>
                        {step.title}
                      </h3>
                    </div>

                    <p className={styles.cardDescription}>
                      {step.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          <SpecialistContactButton className={styles.specialistButton}>
            Fale com um especialista
          </SpecialistContactButton>
        </div>
      </div>
    </section>
  );
}
