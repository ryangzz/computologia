export default{
  props:{
    frutasCart:{
      type:Array,
      default:()=>[]
    }
  },
  methods: {
    delFruta(fruta, key){
      this.$emit("delFrutaCar", key);
    }
  },
  template:`
  <table>
		<tr>
			<th>Fruta</th>
			<th>Cantidad</th>
			<th>Precio Unitario</th>
			<th>Precio Total</th>
			<th>Eliminar</th>
		</tr>
		<tr v-for="(fruta, key) of frutasCart">
			<td>{{fruta.name}}</td>
			<td>{{fruta.cantidad}}</td>
			<td>$\{{fruta.precio}}</td>
			<td>$\{{fruta.total}}</td>
			<td><button type="button" @click="delFruta(fruta, key)">Eliminar</button></td>
		</tr>
	</table>
  `
}