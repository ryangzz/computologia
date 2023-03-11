export default{
  props:{
    task:{
      type:Object,
      required:true
    },
    idx:{
      type:Number,
      required:true
    }
  },
  watch:{
    task:{
      handler(val, oldVal) {
        Toastify({
          text: "Tarea Modificada",
          duration: 3000
          }).showToast();      },
      deep: true
    }
  },
  template:`
  <input type="checkbox" v-bind:id="'task-'+idx" v-model="task.completed">
  `
}