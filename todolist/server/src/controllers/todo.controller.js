import {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../services/todo.service.js";

export const getAllTodosController = async function (req, res) {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodoController = async function (req, res) {
  try {
    const { title, description, category } = req.body;
    const todo = await createTodo(title, description, category);
    res.status(201).json({ message: "Task added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodoController = async function (req, res) {
  try {
    const { id } = req.params;
    const update = req.body;

    const todo = await updateTodo(parseInt(id), update);
    res.status(201).json({ message: `Task (${id}) updated` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteTodoController = async function (req,res){
    try {
        const {id} = req.params
        const todo = await deleteTodo(parseInt(id))
        res.status(201).json({ message: `Task (${id}) deleted` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

