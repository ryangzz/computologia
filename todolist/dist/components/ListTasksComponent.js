import CheckComponent from "./CheckComponent.js";
export default{
  props:{
    nameTask:{
      type:String,
      default:''
    },
    completeAllP:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      tasks:[
        {
          title:'Hacer la compra',
          completed:false
        }, 
        {
          title:'Ir al gimnasio',
          completed:false
        }
      ]
    }
  },
  watch:{
    nameTask(title){
      if(title !=''){
        this.tasks.push({
          title,
          completed:false
        });
      }
    },
    completeAllP(newV){
      this.tasks = this.tasks.map(el=>{el.completed = newV; return el;});
        Toastify({
        text: `Tareas ${(newV) ? 'Completadas': 'Pendientes'}`,
        duration: 3000
        }).showToast();
    },
    tasks: {
      handler(val, oldVal) {
        console.log(val);
      },
      deep: true
    }
  },
  components:{
    'check-component':CheckComponent
  },
  template:/* html */`
  <ul>
    <li v-for="(task, index) of tasks">
      <check-component :idx="index" :task="task"></check-component>
      <label v-bind:for="'task-'+index">{{task.title}}</label>
    </li>
  </ul>
  `
}
