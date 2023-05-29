const { createApp } = Vue;

createApp({
    data() {
        return {
            mailList : []
        };
    },

    mounted () {
        axios
            .get (`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((result) => {
                let nuovaMail = result.data.response;
                this.mailList.push(nuovaMail);
                console.log(this.mailList);
            });
            
    }

}).mount("#app");