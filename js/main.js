const {createApp} = Vue;
createApp({
    data() {
      return {
        lista: [
            {
                todo: 'Vafo a fare la spesa',
                done: false
            },
            {
                todo: 'boh',
                done: false
            }
        ]
      }
    },
    methods:{
        isDone(i){
            if (this.lista[i].done) return "check";
            return '';
        }
    }
}).mount('#app');