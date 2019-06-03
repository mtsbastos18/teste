// routes.js

import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Product from './components/Product.vue';

const routes = [
    { path: '/', component: Home, name: 'inicio' },
    { path: '/register', component: Register, name: 'registrar' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/product/:id', component: Product, name: 'produto'},
];

export default routes;