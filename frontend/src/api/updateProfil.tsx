export const updateProfil = async (username:{userName:string}) => {
    const token = sessionStorage.getItem("token");
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
            body : {
                createdAT : string,
                email : string, 
                firstName : string,
                id : string, 
                lastName:string,
                updatedAt:string,
                userName:string

            }
        } = await response.json()

        return result

    } catch (error) {
        console.log(error)
    }
}
