
import styles from "./cta.module.css";

const totalColumns = 60;
const totalRows = 25;

const pixels = Array.from(
    { length: totalColumns * totalRows },
    (_, index) => {
        const column = index % totalColumns;
        const row = Math.floor(index / totalColumns);

        const center = (totalColumns - 1) / 2;
        const distanceFromCenter = Math.abs(column - center);
        const normalizedDistance = distanceFromCenter / center;

        // Maior altura no centro e menor nas laterais
        const centerHeight = (1 - normalizedDistance) * 16;

        // Ondulações para deixar o desenho orgânico
        const wave =
            Math.sin(column * 0.28) * 2.2 +
            Math.cos(column * 0.14) * 1.6;

        // Variação irregular
        const noise = ((column * 17 + row * 11) % 5) - 2;

        const heightLimit = Math.max(
            0,
            Math.min(totalRows, 3 + centerHeight + wave + noise)
        );

        // Pixels crescem de baixo para cima
        const visible = row >= totalRows - heightLimit;

        return {
            id: index,
            visible,
            opacity: visible
                ? 0.4 + ((column * 13 + row * 7) % 45) / 100
                : 0,
        };
    }
);

export function CallToAction() {
    return (
        <section
            id="call-to-action"
            className={styles.section}
            aria-labelledby="cta-title"
        >
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.content}>
                        <h2 id="cta-title" className={styles.title}>
                            <span className={styles.highlight}>
                                Twelve seats. One bill.
                            </span>{" "}
                            Flat per-seat pricing, no surprises,
                            set up in a minute.
                        </h2>

                        <div className={styles.actions}>
                            <a href="#contact" className={styles.primaryButton}>
                                Start Free Trial
                                <span className={styles.key}>S</span>
                            </a>

                            <a href="#download" className={styles.secondaryButton}>
                                Download
                                <span className={styles.key}>D</span>
                            </a>
                        </div>

                        <p className={styles.note}>
                            Free 14-day trial included. No credit card required.
                        </p>
                    </div>

                    <div className={styles.pixelArt} aria-hidden="true">
                        {pixels.map((pixel) => (
                            <span
                                key={pixel.id}
                                className={`${styles.pixel} ${pixel.visible ? styles.pixelVisible : ""
                                    }`}
                                style={{ opacity: pixel.visible ? pixel.opacity : 0 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
