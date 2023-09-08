const BASE_URL = `http://${process.env.API_HOST || 'localhost'}:4000/api`;

interface PhxResponse<T> {
  data: T;
}

export interface Todo {
  id: string;
  title: string;
  content: string;
  inserted_at: string;
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const todos: PhxResponse<Todo[]> = await fetch(`${BASE_URL}/todos`).then((r) => r.json());

  return todos.data;
};

export const fetchTodoById = async (todoId: string): Promise<Todo> => {
  const todo: PhxResponse<Todo> = await fetch(`${BASE_URL}/todos/${todoId}`).then((r) => r.json());

  return todo.data;
};

export const createTodo = async (data: FormData) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    body: data
  });

  if (!response.ok) {
    throw "Couldn't create Todo";
  }
};

export const updateTodoById = async (todoId: string, data: FormData) => {
  const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
    method: 'PUT',
    body: data
  });

  if (!response.ok) {
    throw "Couldn't update Todo";
  }
};
