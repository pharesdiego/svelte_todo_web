import { faker } from '@faker-js/faker'
import type { PageServerLoad } from './$types';

type Todo = {
  id: string;
  title: string;
  content: string;
};

const createTodo = (): Todo => {
  return {
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 2, max: 4 } }),
    content: faker.lorem.sentences()
  };
};


export const load: PageServerLoad = ({ params }) => {
  const todos = Array.from({ length: 10 }, createTodo)

  return {
    todos: todos,
  };
};
