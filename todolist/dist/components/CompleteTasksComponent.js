export default{
  data() {
    return {
      completeAll:false
    }
  },
  watch:{
    completeAll(newV){
      this.$emit("changeComplete", newV);
    }
  },
  template:`
  <div class="complete-all">
    <input type="checkbox" id="complete-all-checkbox" v-model="completeAll">
    <label for="complete-all-checkbox">Completar todas las tareas</label>
  </div>
  `
}