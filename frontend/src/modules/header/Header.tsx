import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

export default function Header() {
  return (
    <header className="flex justify-between h-16 items-center px-5">
      <Image
        src={"/images/argentBankLogo.png"}
        alt="Logo du site ArgentBank"
        width={456}
        height={124}
        className="w-[200px] h-[54px]"
      />
      <Navbar/>
    </header>
  );
}
