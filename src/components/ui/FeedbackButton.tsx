"use client";

import { useEffect, useState } from "react";
import styles from "./FeedbackButton.module.css";

type FeedbackButtonProps = {
  children: React.ReactNode;
  message: string;
  className?: string;
  onActivate?: () => void;
};

export function FeedbackButton({
  children,
  message,
  className,
  onActivate,
}: FeedbackButtonProps) {
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!feedback) {
      return;
    }

    const timeout = window.setTimeout(() => setFeedback(""), 4000);
    return () => window.clearTimeout(timeout);
  }, [feedback]);

  return (
    <span className={styles.wrapper}>
      <button
        type="button"
        className={className}
        onClick={() => {
          setFeedback(message);
          onActivate?.();
        }}
      >
        {children}
      </button>
      <span className={styles.status} role="status" aria-live="polite">
        {feedback}
      </span>
      {feedback ? (
        <span
          className={styles.notification}
          aria-hidden="true"
        >
          {feedback}
        </span>
      ) : null}
    </span>
  );
}
