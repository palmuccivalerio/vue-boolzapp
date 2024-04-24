const app = Vue.createApp({
    data() {
        return {
            userIndex: 0,
            userList: globalUsersList,
            selectedUser: {},
            searchInput: '',
            newMsg: {
                date:'',
                text: '',
                status: 'sent'
            }


            
        }
    },
    methods: {
        addMessage() {
            this.userList[this.userIndex].messages.push(this.newMsg);
        
            setTimeout (() => {
                
                const receivedMsg = {date: '', text: 'ok', status: 'received'};
                this.userList[this.userIndex].messages.push(receivedMsg);
    
                
            }, 1000)

        
        },


       
        
    }
}).mount('#app');



