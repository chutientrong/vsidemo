import Image from "next/image";
import styles from "./page.module.css";
import { data } from "@/data-fake";
import { CardTypes } from "@/components/types";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {data.map((item: CardTypes) => {
          return <Card key={`index-${item.id}`} data={item}></Card>;
        })}
      </div>
    </main>
  );
}
