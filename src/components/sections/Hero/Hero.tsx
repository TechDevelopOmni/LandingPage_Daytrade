import Image from "next/image";
import { Navbar } from "../../layout/Navbar";
import { siteContent } from "../../../data/home";
import styles from "./Hero.module.css";

const customerLogos = [
  { name: "DOORDASH", label: "DoorDash", style: "doordash" },
  { name: "BCG", label: "Boston Consulting Group", style: "bcg" },
  { name: "VILLAGE", label: "Village Global", style: "village" },
  { name: "Tesi", style: "tesi" },
  { name: "Brevo", style: "brevo" },
  { name: "Railway", style: "railway" },
  { name: "yuno", style: "yuno" },
  { name: "Mistral AI", style: "mistral" },
];

export function Hero() {
  return (
    <section
      id="top"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <Image
        src={siteContent.hero.image.src}
        alt={siteContent.hero.image.alt}
        fill
        preload
        sizes="100vw"
        className={styles.backgroundImage}
        aria-hidden="true"
      />
      <div className={styles.baseOverlay} aria-hidden="true" />
      <div className={styles.directionalOverlay} aria-hidden="true" />

      <Navbar />

      <div className={styles.content}>
        <div className={styles.contentInner}>
          <a
            className={styles.compliance}
            href={siteContent.hero.complianceHref}
            rel="noopener noreferrer"
          >
            {siteContent.hero.compliance}
          </a>
          <h1
            id="hero-title"
            className={styles.title}
          >
            {siteContent.hero.title}
          </h1>
          <p className={styles.lede}>
            {siteContent.hero.description}
          </p>
          <div className={styles.cta}>
            <a
              className={styles.button}
              href={siteContent.hero.ctaHref}
            >
              {siteContent.hero.cta}
              <span
                className={`${styles.icon} ${styles.chevronIcon}`}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="16"
                  height="16"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <span
                className={`${styles.icon} ${styles.arrowIcon}`}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="16"
                  height="16"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
            <span className={styles.ctaNote}>
              {siteContent.hero.ctaNote}
            </span>
          </div>
          <p className={styles.trusted}>
            {siteContent.hero.trusted}
          </p>
        </div>
      </div>

      <div className={styles.reviewScore} aria-label="Avaliação de 4.9 de 5">
        <span className={styles.stars} aria-hidden="true">
          ★★★★★
        </span>
        <span>4.9 / 5.0</span>
        <span className={styles.reviewDivider} aria-hidden="true" />
        <span className={styles.reviewBadge} aria-hidden="true">G</span>
        <span className={styles.reviewBadge} aria-hidden="true">P</span>
      </div>

      <div
        className={styles.customerCarousel}
        aria-label="Empresas que confiam na plataforma"
      >
        <div className={styles.logoViewport}>
          <div className={styles.logoTrack}>
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? "duplicate" : "original"}
                className={styles.logoSequence}
                aria-hidden={isDuplicate}
              >
                {customerLogos.map((logo) => (
                  <span
                    key={logo.name}
                    className={`${styles.logo} ${styles[logo.style]}`}
                    aria-label={logo.label}
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <a className={styles.customersLink} href="#customers">
          Our Customers
        </a>
      </div>
    </section>
  );
}
