import Link from "next/link";
import Background from "../components/Background/Background";
import styles from "../styles/error.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        404 - This Is Not The Web Page You Are Looking For...
      </h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
}
