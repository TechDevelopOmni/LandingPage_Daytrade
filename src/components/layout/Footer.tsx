import Image from "next/image";
import { siteContent } from "../../data/home";
import styles from "./Footer.module.css";

const navigationGroups = [
  {
    title: "Soluções",
    links: [
      { label: "Crédito", href: "#features" },
      { label: "Câmbio", href: "#features" },
      { label: "BPO", href: "#features" },
      { label: "Investimentos", href: "#features" },
    ],
  },
  {
    title: "DayTrade",
    links: [
      { label: "Quem somos", href: "#top" },
      { label: "Carreira", href: "#top" },
      { label: "Conteúdos", href: "#blog" },
      { label: "Dúvidas frequentes", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandColumn}>
            <a className={styles.brandLink} href="#top" aria-label="Voltar ao início">
              <Image
                src={siteContent.brand.logo.src}
                alt={siteContent.brand.logo.alt}
                width={siteContent.brand.logo.width}
                height={siteContent.brand.logo.height}
                className={styles.logo}
              />
            </a>
            <p className={styles.brandDescription}>
              Soluções financeiras para decisões mais claras e negócios em movimento.
            </p>
            <a className={styles.contactLink} href="#faq">
              Fale com um especialista
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <nav className={styles.navigation} aria-label="Navegação do rodapé">
            {navigationGroups.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2026 DayTrade. Todos os direitos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#top">Privacidade</a>
            <a href="#top">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
