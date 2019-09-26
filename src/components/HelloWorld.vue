<template>
  <div class="hello">


    <div class="div" v-for="(chat,index) in data.chat.response.text" :key="index" >
        {{chat}}

    </div>

    <div class="div" v-for="(menu,index) in data.chat.response.menu" :key="index">
        {{menu.name}}

    </div>
    <form @submit.prevent="sendMessage()">
      <input type="text" v-model="message">
    <button type="submit">send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
mounted(){
    this.fetch()
  },

  data:()=>{

    return{
      data:{},
      message:'',
      postHeaders:{
        'Content-type':'text/plain'
      }
    }

  },

methods:{

  sendMessage(){
 this.data.chat.text = this.message

//  axios.post('url',this.data,{headers:postHeaders})

  },
    fetch(){
      let postData = {
           "chat": {
              "request": {
               "menuId": "root",
               "conversationId": "1",
               "type": "local",
               "languageCode": "EN"
                }
        }
      };



      axios.post('http://167.99.18.235/graple/bot/centonomy',postData,{headers:this.postHeaders}).then((response)=>{
        this.data = response.data
      })

    }


}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
