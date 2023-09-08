import type { PageServerLoad } from './$types';
import { createTodo, fetchTodos } from '../services/todos';
import { fail, type Actions, error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const todos = await fetchTodos();

		return {
			todos
		};
	} catch (e) {
		throw error(404, 'API not available yet');
	}
};

export const actions = {
	default: async ({ request }) => {
		try {
			await createTodo(await request.formData());
		} catch (e) {
			return fail(400, { message: '◉_◉' });
		}
	}
} satisfies Actions;
