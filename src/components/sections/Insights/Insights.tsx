import styles from "./Insights.module.css";

const metrics = [
  { value: "400+", label: "Clientes atendidos" },
  { value: "R$ 500M+", label: "Em operações realizadas" },
  { value: "10.000+", label: "Operações realizadas" },
  { value: "4 passos", label: "Jornada simples" },
];

const yearlyProjection = [
  { year: 2017, value: 1_800_000 },
  { year: 2018, value: 6_400_000 },
  { year: 2019, value: 10_200_000 },
  { year: 2020, value: 13_500_000 },
  { year: 2021, value: 21_700_000 },
  { year: 2022, value: 26_100_000 },
  { year: 2023, value: 32_800_000 },
  { year: 2024, value: 39_600_000 },
  { year: 2025, value: 50_000_000 },
];

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const chartWidth = 1200;
const chartHeight = 260;
const chartPaddingTop = 14;
const chartBaseline = 244;
const chartDrawableHeight = chartBaseline - chartPaddingTop;

const highestProjection = yearlyProjection.at(-1)?.value ?? 1;

const points = yearlyProjection.map(({ year, value }, index) => {
  const x = (index / (yearlyProjection.length - 1)) * chartWidth;
  const y = chartBaseline - (value / highestProjection) * chartDrawableHeight;

  return { x, y, year, value };
});

const linePoints = points.map(({ x, y }) => `${x},${y}`).join(" ");
const areaPath = `M ${linePoints.replaceAll(" ", " L ")} L ${chartWidth},${chartBaseline} L 0,${chartBaseline} Z`;

export function Insights() {
  return (
    <section className={styles.section} aria-labelledby="insights-title">
      <div className={styles.container}>
        <h2 id="insights-title" className={styles.title}>
          <span className={styles.titleStrong}>
            Daytrade Invest, há mais de 9 anos no mercado de securitização,
          </span>{" "}
          <span className={styles.titleMuted}>
            ajudando empresas com crédito estruturado, alternativas sob medidas para empresas.
          </span>
        </h2>

        <dl className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <dt className={styles.metricValue}>{metric.value}</dt>
              <dd className={styles.metricLabel}>{metric.label}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.chart}>
          <div className={styles.chartGraphic}>
            <svg
              className={styles.chartSvg}
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              preserveAspectRatio="none"
              role="img"
              aria-label={`Projeção de operações de ${currencyFormatter.format(yearlyProjection[0].value)} em 2017 até ${currencyFormatter.format(highestProjection)} em 2025`}
            >
              <defs>
                <linearGradient id="insights-area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#A8CF45" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaPath} fill="url(#insights-area)" />
              <polyline
                points={linePoints}
                fill="none"
                stroke="#A8CF45"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {points.map((point) => (
              <span
                key={point.year}
                className={styles.chartPoint}
                style={{
                  left: `${(point.x / chartWidth) * 100}%`,
                  top: `${(point.y / chartHeight) * 100}%`,
                }}
                tabIndex={0}
                role="img"
                aria-label={`${point.year}: ${currencyFormatter.format(point.value)} em operações`}
              >
                <span className={styles.chartTooltip} aria-hidden="true">
                  <strong>{point.year}</strong>
                  <span>{currencyFormatter.format(point.value)}</span>
                </span>
              </span>
            ))}
          </div>

          <div className={styles.chartYears} aria-hidden="true">
            {yearlyProjection.map(({ year }) => (
              <span key={year}>{year}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
