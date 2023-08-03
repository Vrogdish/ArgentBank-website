export const getProfil = async () => {
  const token = sessionStorage.getItem("token");
  const body = JSON.stringify(token)

  try {
    const reponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        method : "POST",
        
    })
 
 
  const result = await reponse.json()
    console.log(result)
  return result

 } catch (error) {
    console.log(error)
  }

};
