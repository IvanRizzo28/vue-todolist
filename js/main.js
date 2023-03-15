const {createApp} = Vue;
createApp({
    data() {
      return {
        nuovaVoce: '',
        lista: [
            {
                todo: 'Vafo a fare la spesa',
                done: false
            },
            {
                todo: 'boh',
                done: false
            },
            {
                todo: 'prova',
                done: false
            }
        ]
      }
    },
    methods:{
        isDone(i){
            if (this.lista[i].done) return "check";
            return '';
        },
        deleteElement(i,event){
            this.lista.splice(i,1);
        },
        aggiungiElemento(element,event){
            if (this.nuovaVoce.trim() != '') this.lista.push({todo: this.nuovaVoce, done:false});
            this.nuovaVoce='';
        },
        doneChange(i,event){
            this.lista[i].done=!this.lista[i].done;
        }
    }
}).mount('#app');