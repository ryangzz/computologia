const { createApp } = Vue;
import TitleComponent from "./components/TitleComponent.js";
import ListTasksComponent from "./components/ListTasksComponent.js";
import AddTaskComponent from "./components/AddTaskComponent.js";
import CompleteTasksComponent from "./components/CompleteTasksComponent.js";
createApp({
  data() {
    return {
      title:'TODO LIST IN VUE',
      nameTask:'',
      completeAllP:false
    }
  },
  methods: {
    changeAdd(task){
      this.nameTask = task;
    },
    changeComplete(value){
      this.completeAllP = value;
    }
  },
  components:{
    'title-component':TitleComponent,
    'list-task-component':ListTasksComponent,
    'add-task-component':AddTaskComponent,
    'complete-task-component':CompleteTasksComponent
  },
  template: /* html */`
  <title-component :title="title"></title-component>
  <list-task-component :nameTask="nameTask" :completeAllP="completeAllP"></list-task-component>
  <add-task-component @changeAdd="changeAdd" ></add-task-component>
  <complete-task-component @changeComplete="changeComplete"></complete-task-component>
  `
}).mount('#app')