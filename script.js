Vue.config.devtools = true;

new Vue ({
    el: "#main-container",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],
            },
        ],
        activeChat:{},
        newMessage:"",
        userToFind:"",
        isActive: false,
        activeIndex: undefined,

    },
    methods: {
        getLastMessage(messages) {
            if (messages.length === 0) {
                return "";
            };

            return messages[messages.length - 1].text;
        },
        getLastDate(messages) {
            
            return messages[messages.length -1].date;
        },
        getActiveChat(utenteAttivo) {
    
            this.activeChat = utenteAttivo;     
        },

        getMessagesUser(messagesUser){
            this.messagesUser = this.activeChat.messages;
            return messagesUser
        },
        addNewMessage() {

            this.activeChat.messages.push({
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                text: this.newMessage,
                status: 'sent'
            })
            setTimeout(() =>{
                this.activeChat.messages.push({
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: "ok",
                    status: 'received'   
                });
            }, 1000)    
        },
        searchUser(){

            if (!this.userToFind) {
                return this.contacts;
            }


            return this.contacts.filter((user) => {
                return user.name.toLowerCase()
                .includes(this.userToFind.toLowerCase().trim());
            })
        },
        
        toggleDropDown(index){
            this.activeIndex = index;
            this.isActive = !this.isActive;
        },

        removeMessage(activeIndex){
            this.activeChat.messages.splice(activeIndex, 1);
            this.activeIndex = undefined;
            this.isActive = false;
        }

        
        
    },
    beforeMount() {
        this.activeChat = this.contacts[0];
    },   
});