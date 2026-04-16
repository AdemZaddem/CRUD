const BASE_URL = "http://localhost:3000/api/todos"

// GET - no body, no id
export const fetchTodos = async () => {
    const res = await fetch(BASE_URL)
    return res.json()
}

// POST - needs body, no id
export const createTodo = async (data) => {
    const res = await fetch(`${BASE_URL}`,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
}

// PATCH - needs both id and body
export const updateTodo = async (id, data) => {
    const res = await fetch(`${BASE_URL}/${id}`,{
        method:'PATCH',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
 }

// DELETE - needs id, no body
export const deleteTodo = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`,{
        method:'DELETE',
    })
 }