"use client";

import { useRef } from "react";
import styles from "./Blog.module.css";

const categories = [
  "Todos",
  "Crédito",
  "Câmbio",
  "Investimentos",
  "Gestão financeira",
  "+",
];

const articles = [
  {
    date: "26 Out, 2026",
    category: "Gestão financeira",
    title: "Como estruturar o fluxo de caixa para crescer com previsibilidade",
    variant: "workspace",
  },
  {
    date: "18 Out, 2026",
    category: "Crédito",
    title: "Quando o crédito pode acelerar os próximos passos do seu negócio",
    variant: "documents",
  },
  {
    date: "09 Out, 2026",
    category: "Investimentos",
    title: "O que analisar antes de diversificar a estratégia de investimentos",
    variant: "analytics",
  },
];

type PreviewProps = {
  variant: (typeof articles)[number]["variant"];
};

function ArticlePreview({ variant }: PreviewProps) {
  return (
    <div className={`${styles.preview} ${styles[variant]}`} aria-hidden="true">
      <div className={styles.previewTopbar}>
        <span className={styles.previewBrand}>DayTrade</span>
        <span className={styles.previewAction}>Compartilhar</span>
      </div>

      <div className={styles.previewBody}>
        <div className={styles.previewSidebar}>
          <span />
          <span />
          <span />
          <span />
        </div>

        {variant === "analytics" ? (
          <div className={styles.analyticsContent}>
            <div className={styles.analyticsHeading}>
              <span />
              <span />
            </div>
            <div className={styles.chart}>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className={styles.metricRow}>
              <span />
              <span />
              <span />
            </div>
          </div>
        ) : (
          <div className={styles.workspaceContent}>
            <div className={styles.workspaceHeading}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.workspaceToolbar}>
              <span />
              <span />
            </div>
            <div className={styles.fileRows}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Blog() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const showNextArticles = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: carousel.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  const showPreviousArticles = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: -carousel.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <section id="blog" className={styles.section} aria-label="Conteúdos DayTrade">
      <div className={styles.container}>
        <nav className={styles.categories} aria-label="Categorias do blog">
          {categories.map((category, index) => (
            <a
              key={category}
              className={index === 0 ? styles.categoryActive : styles.categoryLink}
              href="#blog-articles"
            >
              {category}
            </a>
          ))}
        </nav>

        <div className={styles.divider} />

        <div className={styles.carousel}>
          <div ref={carouselRef} id="blog-articles" className={styles.grid}>
            {articles.map((article) => (
              <article key={article.title} className={styles.card}>
                <a className={styles.cardLink} href="#blog">
                  <ArticlePreview variant={article.variant} />
                  <p className={styles.meta}>
                    {article.date}
                    <span aria-hidden="true">•</span>
                    {article.category}
                  </p>
                  <h2 className={styles.cardTitle}>{article.title}</h2>
                </a>
              </article>
            ))}
          </div>

          <button
            type="button"
            className={styles.previousButton}
            aria-label="Ver artigos anteriores"
            aria-controls="blog-articles"
            onClick={showPreviousArticles}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="m11 6-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.nextButton}
            aria-label="Ver próximos artigos"
            aria-controls="blog-articles"
            onClick={showNextArticles}
          >
            <svg
              width="20"
              height="20"
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
          </button>
        </div>
      </div>
    </section>
  );
}
