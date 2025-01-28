"use client"; // Este componente é explicitamente client-side

import { Provider } from "react-redux";
import { store } from "@/store/store";

// Um simples wrapper para Redux Provider
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
