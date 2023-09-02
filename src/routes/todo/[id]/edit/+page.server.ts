import { fetchTodoById } from '../../../../services/todos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const todo_id = params.id;
  const todo = await fetchTodoById(todo_id);

  return {
    todo
  };
};
