import styles from "./Insights.module.css";

const metrics = [
  { value: "400+", label: "Clientes atendidos" },
  { value: "R$ 500mi", label: "Em operações realizadas" },
  { value: "10.000+", label: "Operações realizadas" },
  { value: "4 passos", label: "Sem burocracia" },
];

// Edite estes valores (0 a 100) para atualizar a curva do gráfico.
const performanceSeries = [12, 18, 25, 31, 39, 47, 55, 66, 78, 91];

const chartWidth = 1200;
const chartHeight = 260;
const chartPaddingTop = 14;
const chartBaseline = 244;
const chartDrawableHeight = chartBaseline - chartPaddingTop;

const points = performanceSeries.map((value, index) => {
  const x = (index / (performanceSeries.length - 1)) * chartWidth;
  const y = chartBaseline - (value / 100) * chartDrawableHeight;

  return { x, y };
});

const linePoints = points.map(({ x, y }) => `${x},${y}`).join(" ");
const areaPath = `M ${linePoints.replaceAll(" ", " L ")} L ${chartWidth},${chartBaseline} L 0,${chartBaseline} Z`;

export function Insights() {
  return (
    <section className={styles.section} aria-labelledby="insights-title">
      <div className={styles.container}>
        <h2 id="insights-title" className={styles.title}>
          <span className={styles.titleStrong}>
            Insights financeiros em tempo real.
          </span>{" "}
          <span className={styles.titleMuted}>
            Dados claros para acompanhar resultados, orientar decisões e acelerar oportunidades.
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
          <svg
            className={styles.chartSvg}
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            preserveAspectRatio="none"
            role="img"
            aria-label="Evolução crescente dos indicadores financeiros"
          >
            <defs>
              <linearGradient id="insights-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6ca8ff" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#insights-area)" />
            <polyline
              points={linePoints}
              fill="none"
              stroke="#3b82f6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
