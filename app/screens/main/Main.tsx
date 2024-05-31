"use client";
import styles from "./page.module.css";
import { BreakifyLogo } from "../../components";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Form } from "../../components";
import { useAppSelector } from "@/app/redux/hooks";
import { useEffect, useState } from "react";
import breakify from "../../utils/breakify";
import { count } from "console";

export default function Main() {
  const { firstName, counter, myEnum } = useAppSelector(
    (state) => state.counter
  );

  let [check, setCheck] = useState(0);

  // const myBox = () => {
  //   return (
  //     <>
  //       {myEnum.map((str) => {
  //         <p
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             alignItems: "center",
  //             marginTop: "40px",
  //             color: "black",
  //             backgroundColor: "whitesmoke",
  //           }}
  //         >
  //           {str}
  //         </p>;
  //       })}
  //     </>
  //   );
  // };

  useEffect(() => {
    setCheck(check++);
  }, [counter]);

  console.log({ counter });

  return (
    <Provider store={store}>
      <main className={styles.main}>
        <div>
          <BreakifyLogo />
          <Form />
          <>
            {myEnum?.map((str, index) => (
              <p
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "40px",
                  color: "black",
                  backgroundColor: "whitesmoke",
                }}
              >
                {str}
              </p>
            ))}
          </>
        </div>
      </main>
    </Provider>
  );
}
