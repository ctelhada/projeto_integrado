"use client";
import styles from "./page.module.css";
import { BreakifyLogo } from "../../components";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Form } from "../../components";
import { useAppSelector } from "@/app/redux/hooks";
import { useEffect, useState } from "react";
import breakify from "../../utils/breakify";

export default function Main() {
  const { firstName } = useAppSelector((state) => state.counter);

  const [first, setFirst] = useState(["", "", ""]);
  const [last, setLast] = useState(["", "", ""]);

  useEffect(() => {
    setFirst(breakify(firstName));
  }, [firstName]);

  return (
    <Provider store={store}>
      <main className={styles.main}>
        <div>
          <BreakifyLogo result={first} />
          <Form />
        </div>
      </main>
    </Provider>
  );
}
