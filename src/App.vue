<template>
  <div id="app">
    <div v-if="!isClick">
      <img src="./assets/metdol.png" class="metdol_logo" @click="mainRoute">
    </div>
    <div v-else>
      <board></board>
    </div>
  </div>
</template>

<script>
import board from "./components/Board.vue";

export default {
  name: 'App',
  components: {board},
  mounted: function() {
    
  },
  data: function() {
    return {
      isClick: false,
    }
  },
  methods: {
    mainRoute: function() {
      this.$store.state.isSignin = true;
      this.isClick = true;
      
    }
  },
}
</script>

<style>
html, body {
  /* height: 100%; */
  margin: 0;
  padding: 0;
}
#app {
  /* height: 100%; */
  display: grid;
  text-align: center;
  align-items: center;
}
.metdol_logo {
  padding: 10%;
  width: 50%;
  animation: rotate_img 5s linear 1;
  transform-origin: 50% 50%;
}
@keyframes rotate_img {
  from {
    transform: rotate(0deg) scale(0.1);
  }
  to { 
    transform: rotate(7200deg) scale(1);
  }
}
</style>
