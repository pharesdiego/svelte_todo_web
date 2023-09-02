import type { PageServerLoad } from './$types';
import { fetchTodos } from '../services/todos';


export const load: PageServerLoad = async ({ params }) => {
  const todos = await fetchTodos();

  console.log(todos);

  return {
    todos
  };
};
