const app = new Vue({
    el: '#app',
    data: {
        newOggetto: '',
        oggetti: [
            {
                text: 'Panca piana',
            },
            {
                text: 'Bilanciere',
               
            },
            {
                text: 'Pesi da 10K',
                
            },
        ],
    },
    methods: {
        addOggetti: function(){
            if( this.newOggetto !== ''){
                let oggetto =  {
                    text: this.newOggetto
                };
                this.oggetti.push(oggetto)
                this.newOggetto = '';
            } else {
                alert('Devi scrivere qualcosa per poterlo aggiungere alla lista')
            }
            
        },
        delateTodo(i) {
                 
            this.oggetti.splice(i , 1);
        },
        cart(i){
            this.oggetti.splice(i , 1);
            alert(`Hai aggiunto al carrello l'ogetto`)
        }
    }
});