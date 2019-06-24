// carrinho

<template>
  <div class="container">
    <div class="card">
      <table class="table table-hover shopping-cart-wrap">
        <thead class="text-muted">
          <tr>
            <th scope="col">Produto</th>
            <th scope="col" width="120">Quantidade</th>
            <th scope="col" width="150">Valor Unitário</th>
            <th scope="col" width="120">Valor Total</th>
            <th scope="col" width="200" class="text-right">Ação</th>
          </tr>
        </thead>
        <tbody v-if="$store.state.cart.length > 0">
          <tr v-for="product in $store.state.cart" :key="product.id">
            <td>
              <figure class="media">
                <div class="img-wrap">
                  <img src="../assets/logo.png" class="img-thumbnail img-sm">
                </div>
                <figcaption class="media-body">
                  <h6 class="title text-truncate">{{product.name}}</h6>
                  <dl class="param param-inline small">
                    <dt>Categoria:</dt>
                    <dd>{{product.category.name}}</dd>
                  </dl>
                </figcaption>
              </figure>
            </td>
            <td>{{product.quantity}}</td>
            <td>
              <div class="price-wrap">
                <var class="price">R$ {{product.price}}</var>
              </div>
              <!-- price-wrap .// -->
            </td>
            <td>
              <div class="price-wrap">
                <var class="price">R$ {{ product.totalPrice }}</var>
              </div>
            </td>
            <td class="text-right">
              <a href class="btn btn-outline-danger" @click.prevent="removeFromCart(product)">× Remover</a>
            </td>
          </tr>
          <span class="float-right">Total: R$ {{ totalPrice }}</span>
        </tbody>
      </table>
      <div class="col-lg-4 endereco">
        <p>Endereço para entrega</p>
        <form action="">
          <div class="form-group">
            <input type="text" class="form-control cep" placeholder="CEP" >
            <a class="btn btn-success float-right" @click.prevent="buscaCep()">Buscar</a>
          </div>
          <div class="form-group">
            <input class="form-control" type="text" name="" id="" readonly :value="endereco.logradouro">
          </div>
          <div class="form-group">
            <input class="form-control" type="text" name="" id="" placeholder="Numero">
          </div>
          <div class="form-group">
            <input class="form-control" type="text" name="" id="" placeholder="Complemento">
          </div>
        </form>
      </div>
    </div>
    <!-- card.// -->
  </div>
</template>
<script>
import Cep from '../services/cep';
export default {
  data() {
    return {
      endereco: {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        unidade: "",
        ibge: "",
        gia: "",
      }
    };
  },

  computed: {
    totalPrice() {
      let total = 0;

      for (let product of this.$store.state.cart) {
        total += product.totalPrice;
      }

      return total.toFixed(2);
    }
  },

  methods: {
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
    },

    buscaCep() {
      Cep.buscarCep("91750740").then(resposta => {this.endereco = resposta.data; console.log(this.endereco)});
    }
  }
};
</script>
<style scoped>
.param {
  margin-bottom: 7px;
  line-height: 1.4;
}
.cep{
  width: 60%;
  display: inline-flex;
}
.param-inline dt {
  display: inline-block;
}
.param dt {
  margin: 0;
  margin-right: 7px;
  font-weight: 600;
}
.param-inline dd {
  vertical-align: baseline;
  display: inline-block;
}

.param dd {
  margin: 0;
  vertical-align: baseline;
}

.shopping-cart-wrap .price {
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
  display: block;
}
var {
  font-style: normal;
}

.media img {
  margin-right: 1rem;
}
.img-sm {
  width: 90px;
  max-height: 75px;
  object-fit: cover;
}
</style>
