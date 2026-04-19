const BASE_URL = "http://localhost:3000/api";

// Auth
export async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
}

export async function registerUser(username, email, password) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  return data;
}

// Notes

export async function fetchNotes(userId) {
  const res = await fetch(`${BASE_URL}/users/${userId}/notes`);
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
}

export async function createNote(userId,data){
    const res = await fetch(`${BASE_URL}/users/${userId}/notes`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    })
    if (!res.ok) throw new Error("Something went wrong");
    return await res.json()
}

export async function updateNote(id,data){
    const res = await fetch(`${BASE_URL}/notes/${id}`,{
        method:"PATCH",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
    if (!res.ok) throw new Error("Something went wrong");
    return await res.json()
}

export async function deleteNote(id){
    const res = await fetch(`${BASE_URL}/notes/${id}`,{
        method:'delete'
    })
    if (!res.ok) throw new Error("Something went wrong");
    return await res.json()
}
