import { ProfilDatas } from "@/types/types";

export const getProfil = async (token : string) => {
  // const token = sessionStorage.getItem("token");
  const body = JSON.stringify(token);

  try {
    const reponse = await fetch("http://localhost:3001/api/v1/user/profile", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
    });

    const result: {
      body: ProfilDatas
      message: string;
      status: number;
    } = await reponse.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
