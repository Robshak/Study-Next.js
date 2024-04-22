"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Button, Htag, Ptag, Rating, Tag } from "@/Components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <main className={styles.main}>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="down">Button</Button>
      <Button appearance="ghost" arrow="right">Button</Button>
      <Ptag tag="p1">Напишу сразу в двух курсах, так как проходил оба.
        Java будет многим непросвещённым сложновата в изучении,
        но здесь перевес из-за лидирующего положения языка как самого
        популярного в программировании. Выбор мой пал на эту профессию
        еще и потому, что Java-разработчики получают самую большую зарплату.
        Хотя Python начинает догонять Java по многим моментам, но вот в
        крупном екоме разработке Джава все-таки остается главенствующей сейчас.
        Скажу так – полнота программы и интенсивность присуща обоим курсам
        GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете
        к практике и получаете опыт коммерческой разработки уже в свое резюме.
        Скажу вам как прошедший это – реально помогло в трудоустройстве!</Ptag>
      <Tag color={"green"} href="#">green</Tag>
      <Rating isEditable rating={rating} setRating={setRating}></Rating>
    </main>
  );
}
