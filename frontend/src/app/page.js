import Image from "next/image";
import styles from "./page.module.css";
import UsernameForm from "./UsernameForm";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>HaterFF</h1>
        <h3>
          A tool to see the <u>worst</u> scoring performances in the history of your
          fantasy football league.
        </h3>
        <UsernameForm />
      </main>
      <footer className={styles.footer}>
        <p>This tool is a work in progress. Please report any issues to BrianHJLee@proton.me</p>
      </footer>
    </div>
  );
}
