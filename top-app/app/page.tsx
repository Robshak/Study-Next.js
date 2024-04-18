import { Htag } from "@/Components/Htag/Htag";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <Htag tag="h1">Text</Htag>
    </main>
  );
}
