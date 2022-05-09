// *********************** 05 / 05 / 2022 ************************
// // Milestone 1

// // Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// // Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// // Note:
// // non è importante per ora che tutti gli elementi grafici siano presenti, l’importante che la struttura sia come da specifiche
// // l’elenco degli utenti deve essere generato con un v-for e stampare almeno il nome e l’avatar (ultimo messaggio e data per ora possono essere fake)
// // provate sia con tanti e pochi messaggi con messaggi lunghi o corti. La pagina non si deve mai spaccare

// *********************** 06 / 05 / 2022 ************************

// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti


dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_calendar);
dayjs.locale('it');


const app = new Vue({

    el:'#app',
    data: {
        user:{
            name: 'Luca Gaddini',
            avatar:'_io'
        },
        contact:[
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federica',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],

        selectedContact: 0,
        textNewMessage: '',
        searchInputText:'',
        filteredContacts:[]

    }, methods: {

        getSelectedContact(index){
            console.log(index);
            this.selectedContact = index;
        },

        getCurrentTime(){
            const currentdate = new Date(); 

            let day, month, hours, minutes, seconds;

            if (currentdate.getDate() < 10){
                day = "0" + currentdate.getDate();
            } else day = currentdate.getDate();

            if (currentdate.getMonth()+1 < 10){
                month = "0" + (currentdate.getMonth()+1);
            } else month = currentdate.getMonth()+1;

            if (currentdate.getHours() < 10){
                hours = "0" + currentdate.getHours();
            } else hours = currentdate.getHours();

            if (currentdate.getMinutes() < 10){
                minutes = "0" + currentdate.getMinutes();
            } else minutes = currentdate.getMinutes();

            if (currentdate.getSeconds() < 10){
                seconds = "0" + currentdate.getSeconds();
            } else seconds = currentdate.getSeconds();


            const datetime = 
                day + "/" 
                + month + "/" 
                + currentdate.getFullYear() + "  "  
                + hours + ":"  
                + minutes + ":" 
                + seconds;

            return datetime;
        },

        sendNewMessage(){
            
            const newMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.textNewMessage,
                status: 'sent'
            }

            this.contact[this.selectedContact].messages.push(newMessage);
            setTimeout(this.sendAutoAnswer, 1000);
        },

        sendAutoAnswer(){
            
            const newAnswer = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: 'Ok! :)',
                status: 'received'
            }

            this.contact[this.selectedContact].messages.push(newAnswer);
        },

        searchMessages(){
            
            let filter, nameValue;
            filter = this.searchInputText.toUpperCase();

            this.contact.forEach(element => {

                nameValue = element.name;
                if (nameValue.toUpperCase().indexOf(filter) > -1) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }

            });
        },
        
        deleteMessage(index){
            this.contact[this.selectedContact].messages.splice(index,1);
        }
    }

});