import { Typography } from "@/shared";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    description:
      "Trouvez votre prochaine escapade en quelques clics selon vos envies.",
    title: "Recherchez",
  },
  {
    description:
      "Profitez d'une réservation simple et de profils d'hôtes vérifiés.",
    title: "Réservez",
  },
  {
    description:
      "Installez-vous, profitez de votre séjour et sentez-vous chez vous.",
    title: "Vivez l'expérience",
  },
];

export function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-title">
      <Typography as="h2" id="how-title" variant="h2">
        Comment ça marche ?
      </Typography>
      <Typography className={styles.intro} variant="regular">
        Que vous partiez pour un week-end improvisé, des vacances en famille ou
        un voyage professionnel, Kasa vous aide à trouver un lieu qui vous
        ressemble.
      </Typography>

      <div className={styles.steps}>
        {steps.map((step) => (
          <article className={styles.step} key={step.title}>
            <Typography as="h3" variant="h3" color="light">
              {step.title}
            </Typography>
            <Typography
              className={styles.stepText}
              color="light"
              variant="medium"
            >
              {step.description}
            </Typography>
          </article>
        ))}
      </div>
    </section>
  );
}
