<template>
   <header>
        <div class="header">
            <h1>专家详情</h1>
            <a  @click="backhome" class="return"><i class="icon-16"></i></a>
        </div>
    </header>
    <div style="height: 2.5rem;"></div>
     <!--人物详情-->
            <div class="mien-d">  	
                    <div class="userPu-i">
                           <div class="user-i-i">
                                   <img src="../../static/images/ts1.jpg">
                           </div>
                           <div class="mien-n">
                                   <h1>郭小帅</h1>                   
                                   <p>机电高材生</p>
                                   <p>专注UI设计跟前端</p>
                           </div>
                      </div>
                    <a href="tel:#" class="compile-btn myaTel-btn mien-tel">
                            <i class="icon-3"></i>
                     </a>
                 <div class="mien-s">
                         <i class="icon-kunzy"></i>
                         <span>个人简介</span>        
                 </div>  
                 <div class="mien-con">       
                        <p>个人简介就不限丑了哈</p>  
                 </div>      
          </div>
          <!--人物详情end-->  
</template>
<script>
 export default{
         methods:{
              backhome(){
		this.$router.go("/homepage")
	   }
         }
 }
</script>
<style>

</style>