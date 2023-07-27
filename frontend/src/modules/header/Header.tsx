"use client"

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { Provider } from "react-redux";
import { mainStore } from "@/redux/Store";

export default function Header() {
  


  return (
    <header className="flex justify-between h-16 items-center px-5">
      <Provider store={mainStore}>
      <Link href={"/"}>
        <Image
          src={"/images/argentBankLogo.png"}
          alt="Logo du site ArgentBank"
          width={456}
          height={124}
          className="w-[200px] h-[54px]"
        />
      </Link>
      <Navbar />
      </Provider>
    </header>
  );
}
