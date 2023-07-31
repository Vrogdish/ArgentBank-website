
export const auth = async (userData:{email : string, password : string})=>{
try {
const body = JSON.stringify(userData)


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