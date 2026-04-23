const BASE_URL = 'http://localhost:3000/api'

//AUTH
export async function createUser(username,email,password){
    const res = await fetch(`${BASE_URL}/register`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({username,email,password})
    })
    const data = await res.json()

    if(!res.ok)throw new Error(data.message)
    return data
}


export async function getUser(email,password){
    const res = await fetch(`${BASE_URL}/login`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({email,password})
    })

    const data = await res.json()
    if(!res.ok)throw new Error(data.message)
    return data
}