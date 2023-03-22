import { DefaultLayout, HeaderOnly } from '~/layouts';

import config from '~/config';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Detail from '~/pages/Detail';

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
        path: config.routes.register,
        component: Register,
        layout: HeaderOnly,
    },
    {
        path: config.routes.detail,
        component: Detail,
        layout: HeaderOnly,
    },
    {
        path: config.routes.typeMovie,
        component: Home,
        layout: DefaultLayout,
    },
];

export const customerRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: DefaultLayout,
    },

    {
        path: config.routes.detail,
        component: Detail,
        layout: HeaderOnly,
    },
    {
        path: config.routes.typeMovie,
        component: Home,
        layout: DefaultLayout,
    },
];
