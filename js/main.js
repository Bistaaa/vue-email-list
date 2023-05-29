const { createApp } = Vue;

createApp({
    data() {
        return {
            mailList : []
        };
    },

    methods: {
        stampaMails() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get (`https://flynn.boolean.careers/exercises/api/random/mail`)
                    .then((result) => {
                        let nuovaMail = result.data.response;
                        this.mailList.push(nuovaMail);
                    });
            };
        }
    }

    

}).mount("#app");