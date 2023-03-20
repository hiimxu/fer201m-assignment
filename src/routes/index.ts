import { DefaultLayout } from '~/layouts';

import config from '~/config';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: DefaultLayout,
    }
];

export const privateRoutes = [];
