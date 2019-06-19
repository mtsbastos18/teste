import Vue from 'vue'
let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
let store = {
    state: {
        cart: cart ? JSON.parse(cart) : [],
        cartCount: cartCount ? parseInt(cartCount) : 0,
    },

    mutations: {
        addToCart(state, produto) {
            let found = state.cart.find(item => item.id == produto.id);

            if (found) {
                found.quantity ++;
                found.totalPrice = found.quantity * found.price;
            } else {
                state.cart.push(produto);
                Vue.set(produto, 'quantity', 1);
                Vue.set(produto, 'totalPrice', produto.price);
            }

            state.cartCount++;
            this.commit('saveCart');

        },

        removeFromCart(state, produto) {
            let index = state.cart.indexOf(produto);
            if (index > -1) {
                let product = state.cart[index];
                state.cartCount -= product.quantity;
        
                state.cart.splice(index, 1);
                this.commit('saveCart');

            }
        },

        saveCart(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
            window.localStorage.setItem('cartCount', state.cartCount);
        }
        
        
    }
};



export default store;
