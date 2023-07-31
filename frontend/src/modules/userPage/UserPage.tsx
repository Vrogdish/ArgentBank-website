"use client"

import Transactions from "@/components/transactions/Transactions";
import Welcome from "@/components/welcome/Welcome";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export default function UserPage() {

    const auth: boolean = useSelector((state: any) => state.authState.isLogged);
    const userName = useSelector((state : any ) => state.profilState.firstName)
    const params = useSearchParams()

    if (auth === true ){

        return (
            <div> 
              <Welcome />
              <Transactions
                title="Argent Bank Checking (x8349)"
                value="2,082.79"
                balance="Available"
                className="my-8"
              />
              <Transactions
                title="Argent Bank Savings (x6712)"
                value="10,928.42"
                balance="Available"
                className="my-8"
              />
              <Transactions
                title="Argent Bank Credit Card (x8349) (x8349)"
                value="184.30"
                balance="Current"
                className="my-8"
              />
            </div>
          );

    } else {
     
        return (
            <div>
                ERROR
            </div>
        )
     }


}
