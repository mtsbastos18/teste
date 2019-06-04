// routes.js

import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Product from './components/Product.vue';
import Products from './components/Products.vue';

const routes = [
    { path: '/', component: Home, name: 'inicio' },
    { path: '/registrar', component: Register, name: 'registrar' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/produto/:id', component: Product, name: 'produto'},
    { path: '/produtos', component: Products, name: 'produtos'},
];

export default routes;