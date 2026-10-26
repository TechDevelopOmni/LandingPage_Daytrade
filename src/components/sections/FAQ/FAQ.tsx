import styles from "./FAQ.module.css";

const questions = [
  {
    question: "Quais soluções financeiras a DayTrade oferece?",
    answer:
      "A DayTrade reúne soluções de crédito, câmbio, BPO e investimento. A indicação mais adequada é definida a partir do momento e dos objetivos do seu negócio.",
  },
  {
    question: "Como posso começar uma conversa com a equipe?",
    answer:
      "Você pode entrar em contato pelo canal de atendimento para compartilhar o contexto da sua empresa. A equipe direciona os próximos passos de acordo com a sua necessidade.",
  },
  {
    question: "A DayTrade atende empresas de todos os portes?",
    answer:
      "Cada demanda é analisada de forma individual. Assim, a conversa inicial ajuda a entender o porte, o momento e os objetivos financeiros da sua empresa.",
  },
  {
    question: "Posso receber orientação antes de escolher uma solução?",
    answer:
      "Sim. O atendimento parte do entendimento do seu cenário para que as alternativas sejam avaliadas com mais contexto e segurança.",
  },
  {
    question: "Como acompanho o andamento da minha solicitação?",
    answer:
      "Os responsáveis pelo atendimento combinam os canais e as atualizações necessárias durante cada etapa do processo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.badge}>Perguntas frequentes</span>
          <h2 id="faq-title" className={styles.title}>
            Respostas claras para você tomar o próximo passo.
          </h2>
          <p className={styles.description}>
            Reunimos as dúvidas iniciais para facilitar a sua conversa com a DayTrade.
          </p>
        </div>

        <div className={styles.list}>
          {questions.map((item, index) => (
            <details key={item.question} className={styles.item} open={index === 0}>
              <summary className={styles.question}>
                <span>{item.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  +
                </span>
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
