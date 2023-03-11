export default{
    name:'titulo app',
    props:{
      title:{
        type:String,
        default:''
      }
    },
    template:`
    <h1>{{title}}</h1>
    `
}