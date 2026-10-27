
import Image from "next/image";
import styles from "./cta.module.css";

type CallToActionProps = {
    id?: string;
    highlight?: string;
    title?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    note?: string;
    showPixels?: boolean;
    variant?: "default" | "blue";
};

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

export function CallToAction({
    id = "call-to-action",
    highlight = "DTI Digital: ",
    title = "sua conta digital PJ com soluções para sua empresa.",
    primaryLabel = "Conheça a DTI",
    primaryHref = "#contact",
    secondaryLabel = "Conheça as soluções",
    secondaryHref = "#download",
    note = "",
    showPixels = true,
    variant = "default",
}: CallToActionProps) {
    return (
        <section
            id={id}
            className={styles.section}
            aria-labelledby={`${id}-title`}
        >
            <div className={styles.container}>
                <div className={`${styles.banner} ${variant === "blue" ? styles.blueBanner : ""}`}>
                    <div className={styles.content}>
                        {variant === "default" ? (
                            <Image
                                src="/images/dti-logo-cta.png"
                                alt="DTI"
                                width={171}
                                height={50}
                                className={styles.dtiLogo}
                            />
                        ) : null}
                        <h2 id={`${id}-title`} className={styles.title}>
                            <span className={styles.highlight}>
                                {highlight}
                            </span>{" "}
                            {title}
                        </h2>

                        <div className={styles.actions}>
                            <a href={primaryHref} className={styles.primaryButton}>
                                {primaryLabel}
                                <span className={styles.buttonIcon} aria-hidden="true">
                                    {variant === "default" ? <AccountIcon /> : <ArrowUpRightIcon />}
                                </span>
                            </a>

                            <a href={secondaryHref} className={styles.secondaryButton}>
                                {secondaryLabel}
                                <span className={styles.buttonIcon} aria-hidden="true">
                                    <ArrowRightIcon />
                                </span>
                            </a>
                        </div>

                        <p className={styles.note}>
                            {note}
                        </p>
                    </div>

                    {variant === "default" ? (
                        <Image
                            src="/images/dti-smartphones-frame.png"
                            alt=""
                            width={555}
                            height={786}
                            className={styles.dtiPhonePreview}
                            aria-hidden="true"
                        />
                    ) : null}

                    {showPixels && (
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
                    )}
                </div>
            </div>
        </section>
    );
}

function AccountIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10.5 12 4l9 6.5" />
            <path d="M5 10v8" />
            <path d="M9.5 10v8" />
            <path d="M14.5 10v8" />
            <path d="M19 10v8" />
            <path d="M3 20h18" />
        </svg>
    );
}

function ArrowUpRightIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}
