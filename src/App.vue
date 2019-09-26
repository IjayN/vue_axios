<template>
  <div id="app">
   <menu-bar></menu-bar>
   <side-bar></side-bar>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <chat-window></chat-window>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Sidebar from './components/Sidebar.vue'
import Chat from './components/Chat.vue'


import axios from 'axios'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    "menu-bar":Menu,
    "side-bar":Sidebar,
    "chat-window":Chat
  },

}
</script>

<style>
    @import 'assets/assets/styles/css/themes/lite-purple.min.css';
    @import 'assets/assets/styles/vendor/perfect-scrollbar.css';





</style>
