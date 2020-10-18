import Vue from 'vue';
import VueRouter, { RawLocation, Route, RouteConfig } from 'vue-router';

import { hasAccessToken } from '@/lib/auth';
import Login from '@/views/login/index.vue';
import Profile from '@/views/profile/index.vue';
import ResetPassword from '@/views/reset-password/index.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    // Home 미구현
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPassword,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to: Route, from: Route, next: (to?: RawLocation) => void) => {

//     if (hasAccessToken()) {
//         next();
//     } else {
//         next({ name: 'login' });
//     }

// });

export default router;
