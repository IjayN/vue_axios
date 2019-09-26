<div class="hello">
    <div class="row">
      <small>click this to select menu </small>
      <button @click="setMenu('checking')">menu a</button>
      
      <div class="col-md-3" v-for="(user,index) in collection" :key="index">

      </div>
      <small>Type message here</small>
      <input v-on:keyup.enter="sendToApi" v-model="message">

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data(){
      return {
        collection:{},
        data:{},
        objectsFromApi:{},
        message:'',
        menu:''
      }
  },
methods:{
  setMenu(passedMenu){
    this.menu = passedMenu

  },
sendToApi(){
  this.objectsFromApi.message = this.message
  this.objectsFromApi.menu = this.menu
  console.log(" ++ Data to be sent ++",this.objectsFromApi)

}
},
