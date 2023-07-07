import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between h-16 items-center px-5">
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
    </header>
  );
}
