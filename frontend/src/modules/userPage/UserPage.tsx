"use client";

import Transactions from "@/components/transactions/Transactions";
import Welcome from "@/components/welcome/Welcome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserEditor from "../userEditor/UserEditor";

export default function UserPage() {
  const [editorMode, setEditorMode] = useState(false);

  const auth: boolean = useSelector((state: any) => state.authState.isLogged);

  // for exemple
  const userBalances = {
    checking : "2,082.79",
    saving : "10,928.42",
    creditCard :"184.30",
  }

  if (auth === true) {
    return (
      <div>
        {editorMode ? (
          <UserEditor
            className="m-auto"
            closeEditor={() => {
              setEditorMode(false);
            }}
          />
        ) : (
          <Welcome openEditor={() => setEditorMode(true)} />
        )}
        <Transactions
          title="Argent Bank Checking (x8349)"
          value= {userBalances.checking}
          balance="Available"
          className="my-8"
        />
        <Transactions
          title="Argent Bank Savings (x6712)"
          value={userBalances.saving}
          balance="Available"
          className="my-8"
        />
        <Transactions
          title="Argent Bank Credit Card (x8349)"
          value={userBalances.creditCard}
          balance="Current"
          className="my-8"
        />
      </div>
    );
  } else {
    return (
      <div className="text-2xl text-white text-center mt-10">ERROR ON PAGE</div>
    );
  }
}
