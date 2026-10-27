import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const navigationGroups = [
  {
    title: "Soluções",
    links: [
      { label: "Crédito", href: "/#features" },
      { label: "Câmbio", href: "/#features" },
      { label: "BPO", href: "/#features" },
      { label: "Investimentos", href: "/#features" },
    ],
  },
  {
    title: "DayTrade",
    links: [
      { label: "Quem somos", href: "/sobre-nos" },
      { label: "Carreira", href: "/" },
      { label: "Conteúdos", href: "/#blog" },
      { label: "Dúvidas frequentes", href: "/#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandColumn}>
            <Link className={styles.brandLink} href="/" aria-label="Voltar ao início">
              <Image
                src="/images/daytrade-logo-home.png"
                alt="DayTrade"
                width={515}
                height={167}
                className={styles.logo}
              />
            </Link>
            <p className={styles.brandDescription}>
              Soluções financeiras para decisões mais claras e negócios em movimento.
            </p>
            <Link className={styles.contactLink} href="/#faq">
              Fale com um especialista
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <nav className={styles.navigation} aria-label="Navegação do rodapé">
            {navigationGroups.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
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
            <Link href="/">Privacidade</Link>
            <Link href="/">Termos de uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
