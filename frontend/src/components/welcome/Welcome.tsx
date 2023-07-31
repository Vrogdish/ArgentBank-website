
import Button from "@/components/button/Button";
import React from "react";
import {  useSelector } from "react-redux";

export default function Welcome() {
    
  const userProfil = useSelector((state: any) => state.profilState);
 

  return (
    <div>
      <h1 className="text-center text-white text-3xl font-bold my-5">
        Welcome Back <br /> {userProfil.firstName} {userProfil.lastName}!
      </h1>
      <Button className="text-white p-[10px] mx-auto block">
        Edit Name
      </Button>
    </div>
  );
}
