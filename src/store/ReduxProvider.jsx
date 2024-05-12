"use client";
import { Provider } from "react-redux";
import store from "./index.js";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
