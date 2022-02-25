const app = new Vue(
    {
        el: '#tutto',
        data: {

            newOggetto : [{text: '' }],

            oggetti: [
                {
                    text: 'Panca piana',
                    done:  'si',
                },
                {
                    text: 'Bilanciere',
                    done: 'no',
                },
                {
                    text: 'Pesi da 10K',
                    done: 'si',
                },
                {
                    text: '',
                }
            ],
        },

        methods: {
            addOggetti: function(){
                /* this.oggetti.push( { ...this.newOggetto } ); */
                /* this.oggetti.push({ newOggetto: this.newOggetto}); */
                this.ogetti.push({ text: '' });
            }
            

        }
}) 