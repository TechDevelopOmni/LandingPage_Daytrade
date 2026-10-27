import Image from "next/image";
import { Navbar } from "../../layout/Navbar";
import { siteContent } from "../../../data/home";
import styles from "./Hero.module.css";

type CustomerLogo = {
  name: string;
  label?: string;
  style: string;
  src?: string;
};

const customerLogos: CustomerLogo[] = [
  {
    name: "WBA",
    label: "WBA",
    style: "wba",
    src: "/images/logos/wba_software_240x80.png",
  },
  {
    name: "DTI",
    label: "DTI",
    style: "dti",
    src: "/images/logos/dti_240x80.png",
  },
  {
    name: "CRDC",
    label: "CRDC",
    style: "crdc",
    src: "/images/logos/crdc_240x80.png",
  },
  {
    name: "Rendimento",
    label: "Rendimento",
    style: "rendimento",
    src: "/images/logos/rendimento-preto.png",
  },
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
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.04 2a9.9 9.9 0 0 0-8.55 14.88L2 22l5.27-1.39A9.96 9.96 0 1 0 12.04 2Zm0 18.12a8.17 8.17 0 0 1-4.17-1.15l-.3-.18-3.13.82.84-3.05-.2-.32A8.21 8.21 0 1 1 12.04 20.12Zm4.5-6.15c-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.12-.57.12-.17.25-.66.8-.8.96-.15.17-.3.19-.55.06a6.7 6.7 0 0 1-1.97-1.21 7.37 7.37 0 0 1-1.36-1.69c-.14-.25-.01-.39.1-.51.1-.1.24-.27.36-.4.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.76 2.68 4.26 3.76.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.14-1.2-.06-.11-.23-.17-.48-.29Z" />
                </svg>
              </span>
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
        <span>5.0</span>
        <span className={styles.reviewDivider} aria-hidden="true" />
        <a
          href="https://maps.app.goo.gl/BVcKheDrHqhPvkdB9"
          target="_blank"
          rel="noreferrer"
          className={styles.googleBusinessLink}
          aria-label="Ver avaliações no Google Meu Negócio (abre em nova aba)"
        >
          <Image
            src="/images/google-my-business.png"
            alt="Google Meu Negócio"
            width={24}
            height={24}
            className={styles.googleBusinessLogo}
          />
        </a>
      </div>

      <div
        className={styles.customerCarousel}
        aria-label="Empresas que confiam na plataforma"
      >
        <div className={styles.logoViewport}>
          <div className={styles.logoTrack}>
            {[0, 1, 2].map((copyIndex) => (
              <div
                key={`sequence-${copyIndex}`}
                className={styles.logoSequence}
                aria-hidden={copyIndex > 0}
              >
                {customerLogos.map((logo, index) => (
                  <span
                    key={`${logo.name}-${index}`}
                    className={`${styles.logo} ${styles[logo.style]}`}
                    aria-label={logo.src ? undefined : logo.label}
                  >
                    {logo.src ? (
                      <Image
                        src={logo.src}
                        alt={logo.label ?? logo.name}
                        width={140}
                        height={48}
                        className={styles.logoImage}
                      />
                    ) : (
                      logo.name
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <a className={styles.customersLink} href="#customers">
          Nossos parceiros
        </a>
      </div>
    </section>
  );
}
