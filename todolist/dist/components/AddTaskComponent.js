export default{
  props:{
    addTaskP:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      task:'',
    }
  },
  methods: {
    addTask(){
      this.$emit("changeAdd", this.task);
      this.task = "";
      Toastify({
        text: "Tarea Agregada",
        duration: 3000
        }).showToast();
    }
  },
  template:`
  <div class="add-task">
    <input type="text" id="new-task" placeholder="Añadir nueva tarea..." v-model="task" @keyup.enter="addTask">
    <button id="add-task-btn" type="button" v-on:click="addTask" v-bind:disabled="task==''">Agregar</button>
  </div>
  `
}
