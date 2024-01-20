import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button className="text-white">Hi</Button>
      </div>   
    </main>
  );
}
