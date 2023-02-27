import { guid, ID } from '@datorama/akita';

export interface User {
  id: ID;
  name: string;
  active: boolean;
}

export function createUser({ name = '', active = false }: Partial<User>): User {
  return {
    id: guid(),
    name,
    active,
  };
}
