<template>
  <div class="container products">
    <div class="row">
      <div class="col-md-3 col-lg-3">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-lg-3">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-lg-3">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card-img-top {
  width: 65% !important;
  margin: auto;
}
.products {
  margin-top: 2rem;
}
.row div {
  margin: auto;
}
</style>

<script>
import Products from "../services/products";
export default {
  name: "products",

  data() {
    return {
      produto: {
        name: "",
        price: "",
        description: ""
      },
      produtos: []
    };
  },


  methods: {
    listar() {
      Products.listar().then(response => {console.log(response)});
    }
  },

  
  mounted() {
      this.listar();
  },

};
</script>
