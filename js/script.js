const { createApp } = Vue ;

createApp ({
    data(){
        
        return{
            message: "Hello Vue",
            image: "./img/Javascript.jpg",
        }
    }
}).mount('#app')