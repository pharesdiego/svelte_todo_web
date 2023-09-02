import type { PageServerLoad } from './$types';
import { createTodo, fetchTodos } from '../services/todos';
import { fail, type Actions } from '@sveltejs/kit';


export const load: PageServerLoad = async ({ params }) => {
  const todos = await fetchTodos();

  return {
    todos
  };
};

export const actions = {
  default: async ({ request }) => {
    try {
      await createTodo(await request.formData())
    } catch (e) {
      return fail(400, { message: "◉_◉" })
    }
  }
} satisfies Actions;
