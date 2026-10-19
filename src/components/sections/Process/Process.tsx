
import styles from "./Process.module.css";

const steps = [
  {
    number: "1",
    title: "Understand",
    description:
      "Clarify the people, process, and outcome that matter.",
  },
  {
    number: "2",
    title: "Shape",
    description:
      "Turn the right idea into a focused plan and interface.",
  },
  {
    number: "3",
    title: "Build",
    description:
      "Deliver the smallest reliable version with feedback built in.",
  },
  {
    number: "4",
    title: "Improve",
    description:
      "Measure the result and strengthen what is already working.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function Process() {
  return (
    <section
      id="process"
      className={styles.section}
      aria-labelledby="process-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>
              Delivery Framework
            </span>

            <h2 id="process-title" className={styles.title}>
              A delivery rhythm your team can follow.
            </h2>

            <p className={styles.description}>
              A clear sequence keeps strategic choices,
              practical implementation, and learning connected.
            </p>
          </div>

          <div className={styles.timeline}>
            <ol className={styles.steps}>
              {steps.map((step) => (
                <li key={step.number} className={styles.step}>
                  <span
                    className={styles.stepNumber}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  <article className={styles.card}>
                    <div className={styles.cardHeading}>
                      <span className={styles.checkIcon}>
                        <CheckIcon />
                      </span>

                      <h3 className={styles.cardTitle}>
                        {step.title}
                      </h3>
                    </div>

                    <p className={styles.cardDescription}>
                      {step.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
