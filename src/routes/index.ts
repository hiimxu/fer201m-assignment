import { DefaultLayout, HeaderOnly } from '~/layouts';

import config from '~/config';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Detail from '~/pages/Detal';

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.detail,
        component: Detail,
        layout: HeaderOnly,
    },
];

export const privateRoutes = [];
