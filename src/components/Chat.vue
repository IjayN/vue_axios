<template>
  <div class="main-content-wrap sidenav-open">
      <div data-sidebar-container="chat" class="card chat-sidebar-container" style="background-color:#ad200e2b">
          <div class="chat-content-wrap">
              <div class="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden  chat-topbar">
                  <div class="d-flex align-items-center">
                      <p class="m-0 text-title text-16 flex-grow-1">Welcome to Bawa Connect</p>
                  </div>
                  </div>

                    <perfect-scrollbar>
                      <div class="chat-content" height="100%">
                          <div class="d-flex mb-4" v-for="(chat,index) in data.chat.response.text" :key="index">
                              <div class="message flex-grow-1">
                                  <div class="d-flex">
                                      <p class="mb-1 text-title text-16 flex-grow-1">Centenomy</p>
                                      <span class="text-small text-muted">25 min ago</span>
                                  </div>
                                  <p class="m-0">{{chat}}</p>
                                  <hr>
                                  <button @click="updateMenu(menu.id)" class="btn btn-outline-dark m-1" v-for="(menu,index2) in data.chat.response.menu" :key="index2"> {{menu.name}}</button>
                              </div>
                              <img src="../assets/assets/images/bawa_white.png" alt="" class="avatar-sm rounded-circle ml-3">
                          </div>
                      </div>
                    </perfect-scrollbar>
                </div>

                <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
                   <form class="inputForm">
                       <div class="form-group">
                           <textarea @keyUp="sendToApi" class="form-control form-control-rounded" placeholder="Type your message" name="message" id="message" cols="20" rows="2"></textarea>
                       </div>
                       <div class="d-flex">
                           <div class="flex-grow-1"></div>
                           <button class="btn btn-rounded btn-primary mr-3" type="submit">
                               <i class="i-Paper-Plane"> Send</i>

                           </button>

                          </div>
                    </form>
                </div>

            </div>

        </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Chat',
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
      },
      baseURL:'http://167.99.18.235/graple/bot/centonomy',
      newmenu:'',
      newconversationId:'',
      newsessionId:''
    }

  },

methods:{

  updateMenu(menu){
    this.menu = menu
  },

  // sendMessage(){
  //        this.data.chat.response.message = this.message
  //      },

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

     axios.post(this.baseURL,postData,{headers:this.postHeaders}).then((response)=>{
        this.data = response.data

            // console.log(this.data)

      })
    },

    nwconversationId:function(){
      this.newconversationId = this.data.chat.response.conversationId++
    },
    nwsessionId:function(){
     this.newsessionId = this.data.chat.response.sessionId
    },

    sendToApi(){
      this.data.message = this.message
      this.data.sessionId = this.newsessionId
      this.data.conversationId = this.newconversationId

      this.data =  this.data.concat(this.postData)

      console.log(this.data)

    }


}

}
</script>

<style scoped>


</style>
