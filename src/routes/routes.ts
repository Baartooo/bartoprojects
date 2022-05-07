import { Route } from './routes.types';

export const getProjectRoute = (slug: string) => `${Route.Projects}/${slug}`;
