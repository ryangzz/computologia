import FormCartComponent from "./FormCartComponent.js";
import TableCartComponent from "./TableCartComponent.js";
import TotalCartComponent from "./TotalCartComponent.js";
import frutas from "./frutas.js";
export default{
  data(){
    return{
      frutas,
      frutasCart:[],
    }
  },
  methods: {
    addFrutasCar(fruta){
      this.frutasCart.push(fruta);
    },
    delFrutaCar(key){
      this.frutasCart.splice(key, 1);
    }
  },
  components:{
    'form-cart-component':FormCartComponent,
    'table-cart-component':TableCartComponent,
    'total-cart-component':TotalCartComponent
  },
  template:`
  <h1>Mini Carrito de Frutas</h1>
	<form-cart-component :frutas="frutas" @addFrutasCar="addFrutasCar"></form-cart-component>
	<table-cart-component :frutasCart="frutasCart" @delFrutaCar="delFrutaCar"></table-cart-component>
  <total-cart-component :frutasCart="frutasCart"></total-cart-component>
  `
}