<template>
  <div class="hello">
      <router-view keep-alive></router-view>
      <footbottom></footbottom>
  </div>
</template>

<script>
import footbottom from './footer'
export default {
  components: {
      footbottom
      
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
