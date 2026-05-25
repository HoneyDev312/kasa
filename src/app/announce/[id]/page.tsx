import styles from "../../page.module.css";

type AnnouncePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Announce({ params }: AnnouncePageProps) {
  const { id } = await params;

  return (
    <section className={styles.container}>
      <h1>Announce {id}</h1>
    </section>
  );
}
