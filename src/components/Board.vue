<template>
  <div>
    <video controls width="80%" height="80%" autoplay muted loop>
      <source src="http://localhost:8081/video" type="video/mp4"> 
    </video>
  </div>
</template>

<script>
export default {
  mounted: function() {
    console.log(this.$store.state.isSignin);
  },
  methods: {

  }
}
</script>

<style>

</style>