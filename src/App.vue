<template>
   <div class="box">
      <router-view ></router-view>
      
    </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  components: {
      Hello
      
     
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.box{
	 height: 100%;
	 width: 100%;
}

</style>
