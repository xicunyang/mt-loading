<template>
  <div id="app" style="padding-left: 100px;">
    <div style="float: left">
      <div v-if="div1Show" v-mt-loading='loading' style="border: 1px solid black; width: 500px; text-align: center; ">
        <img alt="Vue logo" src="./assets/logo.png" >
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>

      <button @click="changeLoading" style="margin-left: 200px;margin-top:20px;">修改loading</button>
      <button @click="hide">消失</button>
    </div>

    <div style="padding-left: 20px; overflow: hidden"  >
      <div v-mt-loading.bounce='loading2'>
        Lorem ipsumD dolor sit amet consectetur adipisicing elit. Magni et libero provident soluta nobis. Rem est distinctio excepturi? Doloremque beatae vel quos ut aut. Vero debitis esse reiciendis corporis itaque!
        Lorem ipsumD dolor sit amet consectetur adipisicing elit. Magni et libero provident soluta nobis. Rem est distinctio excepturi? Doloremque beatae vel quos ut aut. Vero debitis esse reiciendis corporis itaque!
        Lorem ipsumD dolor sit amet consectetur adipisicing elit. Magni et libero provident soluta nobis. Rem est distinctio excepturi? Doloremque beatae vel quos ut aut. Vero debitis esse reiciendis corporis itaque!

      </div>
      <button @click="changeLoading2" style="margin-left: 200px;margin-top:20px;">修改loading</button>

    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data(){
      return {
        loading: true,
        loading2: true,
        div1Show: true
      }
    },
    methods: {
      changeLoading() {
        this.loading = !this.loading
      },
      changeLoading2() {
        this.loading2 = !this.loading2
      },
      hide(){
        this.div1Show = !this.div1Show
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
