import { ProfilDatas } from "@/types/types";

export const updateProfil = async (username:{userName:string},token : string) => {
    // const token = sessionStorage.getItem("token");
    const body = JSON.stringify(username)

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile",{
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            method : "PUT",
            body : body
        })

        const result : {
            status:number,
            message : string,
            body : ProfilDatas
        } = await response.json()

        return result

    } catch (error) {
        console.log(error)
    }
}
