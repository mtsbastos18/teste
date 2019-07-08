<template>
  <!-- <div>ID do produto é: {{ $route.params.id }}</div> -->

  <div class="container card ">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
      </div>
      <div class="col-lg-6">
        <h5>{{produto.name}}</h5>
        <span>Descrição</span>
        <p class="pre-formatted">{{produto.description}}</p>
        <p>Categoria: {{produto.category.name}}</p>

        <p>Valor: <b>R$ {{produto.price}}</b></p>
        <a class="btn btn-success float-right"  @click="addToCart(produto)">Adicionar ao carrinho</a>
      </div>
    </div>
  </div>

</template>
<style scoped>
.container{
  padding: 2%;
}
.pre-formatted {
  white-space: pre;
}
</style>
<script>
import Products from "../services/products";

export default {
  name: 'product',

  data() {
    return {
      produto: {
        id: "",
        name: "",
        price: "",
        description: "",
        category_id: "",
        category: {
          id: "",
          name: ""
        }
      },
    };
  },

  methods: {
    buscar(id) {
      Products.getById(id).then(response => {this.produto = response.data});
    },
    addToCart(produto) {
        this.$store.commit('addToCart', produto);
        alert("Produto Adicionado");
    }
  },

  mounted() {
    this.buscar(this.$route.params.id);
  }


};
</script>
