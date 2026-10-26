
import styles from "./Features.module.css";

const features = [
  {
    id: 1,
    title: "Crédito",
    description:
      "Capital para impulsionar seus negócios e transformar oportunidades em crescimento.",
    className: "cardLarge",
  },
  {
    id: 2,
    title: "Câmbio",
    description:
      "Conecte seu negócio ao mundo com agilidade e eficiência.",
    className: "cardSmall",
  },
  {
    id: 3,
    title: "BPO",
    description:
      "Mais controle, menos burocracia e uma gestão financeira eficiente.",
    className: "cardSmall",
  },
  {
    id: 4,
    title: "Investimento",
    description:
      "Estratégia e inteligência para potencializar seus resultados.",
    className: "cardLarge",
  },
];

function FeatureIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
    </svg>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className={styles.section}
      aria-labelledby="features-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Produtos e Serviços</span>
          <p className={styles.subtitle}>
            Como a DayTrade pode te ajudar hoje?
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article
              key={feature.id}
              className={`${styles.card} ${styles[feature.className]}`}
            >
              <div className={styles.cardIcon}>
                <FeatureIcon />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {feature.title}
                </h3>

                <p className={styles.cardDescription}>
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <a className={styles.productsLink} href="#features">
          <span>Conheça todos os nossos produtos</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
