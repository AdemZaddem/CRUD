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


// Expenses


export async function getExpenses(userId,filter = 'all'){
    const url = filter === 'all'? `${BASE_URL}/user/${userId}/expense`:`${BASE_URL}/user/${userId}/expense?category=${encodeURIComponent(filter)}`
    const res = await fetch(url)
    if(!res.ok)throw new Error('Something went wrong')
    const data = await res.json()

    return data
}


export async function createExpenses(userId,newExpense){
    const res = await fetch(`${BASE_URL}/user/${userId}/expense`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(newExpense)
    })
    if (!res.ok) throw new Error("Something went wrong");
    return await res.json()
}

export async function deleteExpense(id){
    const res = await fetch(`${BASE_URL}/expense/${id}`,{
        method:"DELETE"
    })
    if (!res.ok) throw new Error("Something went wrong");
    return await res.json()
}