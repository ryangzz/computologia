export default{
  props:{
    frutas:{
      type:Array,
      default:()=>[]
    },    
  },
  data() {
    return {
      fruta:{
        name:"Manzana",
        precio:5
      },
      cantidad:1,
    }
  },
  methods: {
    agregar(){
      if(this.fruta == null && this.cantidad == 0) return;
      this.$emit("addFrutasCar", {
        ...this.fruta,
        cantidad:this.cantidad,
        total:(this.fruta.precio*this.cantidad),
      });
      this.cantidad = 1;
    }
  },
  template:`
  <form>
		<label for="frutas">Fruta:</label>
		<select id="frutas" v-model="fruta">
			<option  v-for="(fruta, key) of frutas" :value="fruta">{{fruta.name}} ($\{{fruta.precio}}/unidad)</option>
		</select>
		<label for="cantidad">Cantidad:</label>
		<input type="number" id="cantidad"  v-model="cantidad">
		<input type="button" value="Agregar" @click="agregar">
	</form>
  `
}