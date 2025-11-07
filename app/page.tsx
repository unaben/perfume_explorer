import MainDisplay from "@/components/MainDisplay/MainDisplay";
import styles from "./App.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainDisplay />
    </div>
  );
}
