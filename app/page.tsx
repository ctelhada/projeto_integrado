"use client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./screens/main/Main";

export default function Page() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}
