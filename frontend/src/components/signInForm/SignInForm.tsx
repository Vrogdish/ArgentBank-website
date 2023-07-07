"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

type Inputs = {
  username: string;
  password: string;
};

interface Props {
  className?: string;
}

export default function SignInForm({ className }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div
      className={`w-[300px] bg-white p-8 flex flex-col items-center ${className}`}
    >
      <FontAwesomeIcon icon={faCircleUser} className="h-4" />
      <h1 className="text-2xl font-bold my-5">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username" className="font-bold">
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register("username")}
          className="w-full border mb-2 p-1"
        />
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          type="text"
          id="password"
          {...register("password")}
          className="w-full border mb-2 p-1"
        />
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" id="remember" className="mb-0.5" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <input
          type="submit"
          value={"Sign in"}
          className="text-lg font-bold text-white underline bg-primary w-full p-1 cursor-pointer"
        />
      </form>
    </div>
  );
}
