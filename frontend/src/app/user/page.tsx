"use client";

import UserPage from "@/modules/userPage/UserPage";

import { mainStore } from "@/redux/Store";
import React from "react";
import { Provider } from "react-redux";

export default function page() {
  return (
    <main className="flex-1 bg-secondary ">
      <Provider store={mainStore}>
        <UserPage />
      </Provider>
    </main>
  );
}
