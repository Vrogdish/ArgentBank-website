"use client";

import { updateProfil } from "@/api/updateProfil";
import { updateUsernameState } from "@/redux/profilSlice";
import { AuthState, ProfilState } from "@/types/types";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

type Inputs = {
  username: string;
};

interface Props {
  closeEditor: Function;
  className?: string;
}

export default function UserEditor({ closeEditor, className }: Props) {
  const userProfil = useSelector((state: ProfilState) => state.profilState);
  const token = useSelector((state : AuthState)=> state.authState.token)
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    const newUsername = { userName: inputs.username };
    const updatedUsername = await updateProfil(newUsername,token);

    if (updatedUsername?.status === 200) {
      alert(updatedUsername.message);
      dispatch(updateUsernameState(updatedUsername.body.userName));
      closeEditor()
    }
  };

  return (
    <div className={` w-72  ${className}`}>
      <h2 className="text-2xl  text-white my-6 text-center">Edit user info</h2>
      <form className="space-y-2 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <label htmlFor="username" className="text-white">
            User name:
          </label>
          <input
            type="text"
            id="username"
            defaultValue={userProfil.userName}
            {...register("username", {
              required: "Type your new username",
            })}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="firstname" className="text-white">
            First name:
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            disabled
            defaultValue={userProfil.firstName}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="lastname" className="text-white">
            Last name:{" "}
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            disabled
            defaultValue={userProfil.lastName}
          />
        </div>
        <div className="pt-6 flex justify-between gap-4 text-white">
          <input type="submit" value={"Save"} className="bg-primary w-1/2" />
          <input
            type="button"
            value={"Cancel"}
            className="bg-primary w-1/2"
            onClick={() => {
              closeEditor();
            }}
          />
        </div>
      </form>
      <div className="text-red-400 text-center mt-4">
        <ErrorMessage
          name="username"
          errors={errors}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
    </div>
  );
}
