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
  const { firstName, secondName } = useAppSelector((state) => state.counter);

  const [first, setFirst] = useState(["", "", ""]);
  const [last, setLast] = useState(["", "", ""]);

  useEffect(() => {
    setFirst(breakify(firstName));
  }, [firstName]);

  useEffect(() => {
    setLast(breakify(secondName));
  }, [secondName]);

  return (
    <Provider store={store}>
      <main className={styles.main} style={{ backgroundColor: "#202020" }}>
        <div>
          <BreakifyLogo result={first} />
          <BreakifyLogo result={last} />
          <Form />
        </div>
      </main>
    </Provider>
  );
}
