
import styles from "./Features.module.css";

const features = [
  {
    id: 1,
    title: "Pay supplier invoices",
    description:
      "Our goal is to streamline SMB trade, making it easier and faster than ever.",
    className: "cardLarge",
  },
  {
    id: 2,
    title: "Pay supplier invoices",
    description:
      "Our goal is to streamline SMB trade, making it easier and faster than ever.",
    className: "cardSmall",
  },
  {
    id: 3,
    title: "Pay supplier invoices",
    description:
      "Our goal is to streamline SMB trade, making it easier and faster than ever.",
    className: "cardSmall",
  },
  {
    id: 4,
    title: "Pay supplier invoices",
    description:
      "Our goal is to streamline SMB trade, making it easier and faster than ever.",
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
          <span className={styles.badge}>Platform</span>

          <h2 id="features-title" className={styles.title}>
            Something new!
          </h2>

          <p className={styles.subtitle}>
            Managing a small business today is already tough.
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
      </div>
    </section>
  );
}
