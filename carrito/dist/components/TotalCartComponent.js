export default{
  props:{
    frutasCart:{type:Array, default:()=>[]}
  },
  computed:{
    total(){
      let total = 0;
      total = this.frutasCart.reduce((acumulador, actual) => acumulador + actual.total, 0);
      return total.toFixed(2);
    }
  },
  template:`
  <div class="total">
  Total: $\{{total}}
</div>
  `
}