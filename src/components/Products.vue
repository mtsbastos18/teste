<template>
  <div class="container products">
    <div class="row">

      <div class="col-md-3 col-lg-3 card" v-for="p of produtos" :key="p.id">
          <img class="card-img-top" :src="getImgUrl(p.id)" alt="Card image cap">
          <div class="card-body">
            <p class="card-title">{{getPostBody(p.name)}}</p>
            <p
              class="card-text"
            >Valor: R$ {{p.price}}</p>
            <router-link class="nav-link btn btn-success float-right"  :to="{name: 'produto', params: {id: p.id}}">Detalhes</router-link>
          </div>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.card-img-top {
  width: 65% !important;
  margin: auto;
}
.products {
  margin-top: 2rem;
}
.row div {
  margin: auto;
  border: 0;

}
</style>

<script>
import Products from "../services/products";
export default {
  name: "products",

  data() {
    return {
      produto: {
        id: "",
        name: "",
        price: "",
        description: ""
      },
      produtos: []
    };
  },


  methods: {
    listar() {
      Products.listar().then(response => {this.produtos = response.data});
    },

    getPostBody (post) {
      console.log(post);
      let body = this.stripTags(post);

      return body.length > 30 ? body.substring(0, 30) + '...' : body;           
    },

    stripTags (text) {
      return text.replace(/(<([^>]+)>)/ig, '');
    },

    getImgUrl(pic) {
        return require('../assets/'+pic + ".jpg")
    }
  },

  
  mounted() {
      this.listar();
  },

};
</script>
