"use client";

import SignInForm from "@/components/signInForm/SignInForm";
import { mainStore } from "@/redux/Store";
import React from "react";
import { Provider } from "react-redux";

export default function page() {
  return (
    <main className="flex-1 bg-secondary ">
        <Provider store={mainStore}>
          <SignInForm className="mx-auto mt-12 " />
        </Provider>
    </main>
  );
}
