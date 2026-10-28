import type { Metadata } from "next";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";
import { CallToAction } from "../../components/sections/CTA/cta";
import styles from "./Sectors.module.css";

export const metadata: Metadata = {
  title: "Agro, Indústria e Construtora | DayTrade Invest",
  description:
    "Conheça as soluções financeiras da DayTrade para o agronegócio, a indústria e a construção em um só lugar.",
};

const sectors = [
  {
    id: "agronegocio",
    label: "Agro",
    title: "Recursos no ritmo da sua safra.",
    description:
      "Planejamento e crédito para acompanhar cada ciclo, do plantio à expansão do negócio.",
    tone: "mint",
    solutions: [
      { title: "Custeio da produção", description: "Capital para insumos, operação e compromissos da safra." },
      { title: "Planejamento financeiro", description: "Organize o caixa e os recebíveis conforme o calendário do campo." },
      { title: "Expansão do negócio", description: "Invista em tecnologia, equipamentos e novas oportunidades." },
    ],
  },
  {
    id: "industria",
    label: "Indústria",
    title: "Capital para a produção avançar.",
    description:
      "Soluções financeiras para manter a operação em movimento e preparar os próximos investimentos.",
    tone: "blue",
    solutions: [
      { title: "Capital de giro", description: "Recursos para compras, fornecedores e ciclos produtivos." },
      { title: "Máquinas e expansão", description: "Modernize equipamentos e amplie sua capacidade de produção." },
      { title: "Gestão de caixa", description: "Organize recebíveis e prioridades com mais previsibilidade." },
    ],
  },
  {
    id: "construtora",
    label: "Construtora",
    title: "Uma base sólida para cada obra.",
    description:
      "Crédito e planejamento alinhados ao cronograma, do canteiro ao próximo projeto.",
    tone: "lavender",
    solutions: [
      { title: "Financiamento de obras", description: "Capital para fornecedores, equipes e etapas do projeto." },
      { title: "Antecipação de recebíveis", description: "Organize entradas e compromissos para dar continuidade à obra." },
      { title: "Novos projetos", description: "Estruture os recursos para crescer com mais segurança." },
    ],
  },
];

export default function SectorsPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className={styles.page}>
        <section className={styles.intro} aria-labelledby="sectors-title">
          <p className={styles.eyebrow}>Setores que movem a economia</p>
          <h1 id="sectors-title">Agro, Indústria e Construtora.</h1>
          <p className={styles.introDescription}>
            Soluções financeiras para planejar, produzir e construir os próximos
            passos do seu negócio.
          </p>
          <nav className={styles.sectorLinks} aria-label="Navegue pelos setores">
            <a href="#agronegocio">Agro <span aria-hidden="true">↓</span></a>
            <a href="#industria">Indústria <span aria-hidden="true">↓</span></a>
            <a href="#construtora">Construtora <span aria-hidden="true">↓</span></a>
          </nav>
        </section>
        {sectors.map((sector, index) => (
          <section
            key={sector.id}
            id={sector.id}
            className={`${styles.sector} ${styles[sector.tone]}`}
            aria-labelledby={`${sector.id}-title`}
          >
            <div className={styles.sectorHeading}>
              <div>
                <p className={styles.eyebrow}>
                  <span className={styles.sectorNumber}>0{index + 1}</span>
                  {sector.label}
                </p>
                <h2 id={`${sector.id}-title`}>{sector.title}</h2>
              </div>
              <p className={styles.sectorDescription}>{sector.description}</p>
            </div>
            <div className={styles.solutionGrid}>
              {sector.solutions.map((solution) => (
                <article key={solution.title} className={styles.solutionCard}>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
        <CallToAction
          id="sectors-cta"
          highlight="Seu próximo passo começa com uma conversa."
          title="Encontre a solução financeira para o seu negócio."
          primaryLabel="Fale com um especialista"
          primaryHref="/#faq"
          secondaryLabel="Conheça a DayTrade"
          secondaryHref="/sobre-nos"
          showPixels={false}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}
