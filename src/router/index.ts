import Vue from 'vue';
import VueRouter, { RawLocation, Route, RouteConfig } from 'vue-router';

import Login from '@/views/login/index.vue';
import Profile from '@/views/profile/index.vue';
import ResetPassword from '@/views/reset-password/index.vue';

Vue.use(VueRouter);

const isLogined = (to: Route, from: Route, next: (to?: RawLocation) => void) => {

    if (sessionStorage.getItem('accessToken')) {
        next();
    }

    next({ name: 'login' });

};

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'profile',
        component: Profile,
        beforeEnter: isLogined,
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
];

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes,
});

export default router;
