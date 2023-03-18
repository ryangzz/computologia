const {createApp} = Vue;
import ShoppingCartComponent from "./components/ShoppingCartComponent.js";
createApp({
  components:{
    'shopping-cart-component':ShoppingCartComponent
  }
}).mount("#app");