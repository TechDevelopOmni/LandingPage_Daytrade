
import Image from "next/image";
import styles from "./Features.module.css";

type FeatureIconName = "credit" | "exchange" | "bpo" | "investment";

const features = [
  {
    id: 1,
    title: "Crédito",
    description:
      "Capital para impulsionar seus negócios e transformar oportunidades em crescimento.",
    className: "cardLarge",
    image: "/images/features/credito-escritorio.png",
    icon: "credit" as const,
  },
  {
    id: 2,
    title: "Câmbio",
    description:
      "Conecte seu negócio ao mundo com agilidade e eficiência.",
    className: "cardSmall",
    image: "/images/features/cambio.png",
    icon: "exchange" as const,
  },
  {
    id: 3,
    title: "BPO",
    description:
      "Mais controle, menos burocracia e uma gestão financeira eficiente.",
    className: "cardSmall",
    image: "/images/features/bpo.png",
    icon: "bpo" as const,
  },
  {
    id: 4,
    title: "Investimento",
    description:
      "Estratégia e inteligência para potencializar seus resultados.",
    className: "cardLarge",
    image: "/images/features/investimento-executivo.png",
    icon: "investment" as const,
  },
];

function FeatureIcon({ icon }: { icon: FeatureIconName }) {
  const iconProps = {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (icon === "credit") {
    return (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.8 8.8c-.55-.5-1.28-.8-2.18-.8-1.42 0-2.42.72-2.42 1.86 0 2.88 4.72 1.34 4.72 4.1 0 1.16-1.03 1.94-2.53 1.94-.95 0-1.82-.33-2.43-.9" />
        <path d="M12.5 6.7v10.6" />
      </svg>
    );
  }

  if (icon === "exchange") {
    return (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.25 2.46 3.42 5.46 3.42 9S14.25 18.54 12 21c-2.25-2.46-3.42-5.46-3.42-9S9.75 5.46 12 3Z" />
        <path d="m15.5 7 2 2-2 2" />
        <path d="m8.5 17-2-2 2-2" />
      </svg>
    );
  }

  if (icon === "bpo") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 16v-3" />
        <path d="M12 16V9" />
        <path d="M17 16v-5" />
        <path d="M6 8h12" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="m4 16 5-5 4 3 7-8" />
      <path d="M15 6h5v5" />
      <path d="M4 20h16" />
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
              <Image
                src={feature.image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 34vw"
                className={`${styles.cardImage} ${
                  feature.id === 1
                    ? styles.creditImage
                    : feature.id === 4
                      ? styles.investmentImage
                      : ""
                }`}
              />
              <div className={styles.cardOverlay} aria-hidden="true" />
              <div className={styles.cardIcon}>
                <FeatureIcon icon={feature.icon} />
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
