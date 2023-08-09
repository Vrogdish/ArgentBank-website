"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { auth } from "@/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { getProfil } from "@/api/getProfil";
import { authState, tokenState } from "@/redux/authSlice";
import { loadProfilState } from "@/redux/profilSlice";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
};

interface Props {
  className?: string;
}

export default function SignInForm({ className }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // init redux dispatch and router() for redirect
  const dispatch = useDispatch();
  const router = useRouter();
  // const token = useSelector((state : AuthState) => state.authState.token)


  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    const userData = { email: inputs.email, password: inputs.password };

    // save email and password if remember checked
    const rememberMe = (tokenToSave:string) => {
    if (inputs.remember === true) {
      
      localStorage.setItem("token",tokenToSave);
      
    } else {
      localStorage.clear();
    }
  }

    // connect
    const login = await auth(userData);
    if (login?.status === 200) {
      // sessionStorage.setItem("token", login.body.token);
      dispatch(tokenState(login.body.token));
      dispatch(authState(true));
      rememberMe(login.body.token)
      const profil = await getProfil(login.body.token);

      if (profil?.status === 200) {
        dispatch(loadProfilState(profil.body));
        
        router.push(`/user`);
      }
    } else {
      alert(login?.message);
    }
  };

  return (
    <div
      className={`w-[300px] bg-white p-8 flex flex-col items-center ${className}`}
    >
      <FontAwesomeIcon icon={faCircleUser} className="h-4" />
      <h1 className="text-2xl font-bold my-5">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="font-bold">
          Username
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full border mb-2 p-1"
        />
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
          className="w-full border mb-2 p-1"
        />
        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            id="remember"
            {...register("remember")}
            className="mb-0.5"
            defaultChecked
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <input
          type="submit"
          value={"Sign in"}
          className="text-lg font-bold text-white underline bg-primary w-full p-1 cursor-pointer"
        />
      </form>
      <div className="mt-4 text-red-400">
        <ErrorMessage
          name="email"
          errors={errors}
          render={({ message }) => <p>{message}</p>}
        />
        <ErrorMessage
          name="password"
          errors={errors}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
    </div>
  );
}
