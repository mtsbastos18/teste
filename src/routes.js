// routes.js

import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Product from './components/Product.vue';
import Products from './components/Products.vue';
import Carrinho from './components/Carrinho.vue';

const routes = [
    { path: '/', component: Products, name: 'inicio' },
    { path: '/registrar', component: Register, name: 'registrar' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/produto/:id', component: Product, name: 'produto'},
    { path: '/produtos', component: Products, name: 'produtos'},
    { path: '/carrinho', component: Carrinho, name: 'carrinho'}
];

export default routes;