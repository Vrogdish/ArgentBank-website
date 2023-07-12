import { Inputs } from "@/components/signInForm/SignInForm";

export const auth = async (UserData:Inputs)=>{
try {
const body = JSON.stringify(UserData)

const reponse = await fetch("http://localhost:3001/api/v1/user/login", {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method : "POST",
    body : body
})

const result: {
    body : {token : string},
    message : string,
    status : number
} = await reponse.json()


return result

} catch (error) {
    console.log(error)
}
}