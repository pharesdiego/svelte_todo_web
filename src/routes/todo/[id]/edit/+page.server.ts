import { fail } from '@sveltejs/kit';
import { fetchTodoById, updateTodoById } from '../../../../services/todos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const todo_id = params.id;
  const todo = await fetchTodoById(todo_id);

  return {
    todo
  };
};

export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData()

    try {
      await updateTodoById(params.id, data)

      // Make it look like it's thinking
      await new Promise((resolve) => {
        setTimeout(resolve, 800)
      })

      return { success: true }
    } catch (e) {
      return fail(400, { error: true, message: "Something failed during update" })
    }
  }
}
