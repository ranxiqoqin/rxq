<template>
	<div>
		 <nav class="nav-bar nav-bar-tab">
		    <a v-link="{path:'/homepage'}" class="nav-tab-item v-link-active">
		        <span class="nav-icon icon-uniE90A"></span>
		        <span class="nav-tab-label">首页</span>
		    </a>
		    <a v-link="{path:'/addresslist'}" class="nav-tab-item">
		        <span class="nav-icon icon-uniE919"></span>
		        <span class="nav-tab-label">通讯录</span>
		    </a>
		    <a v-link="{path:'/msg'}" class="nav-tab-item">
		        <span class="nav-icon icon-uniE903"><span class="nav-badge">1</span></span>
		        <span class="nav-tab-label">消息</span>
		    </a>
		     <a v-link="{path:'/my'}" class="nav-tab-item">
		        <span class="nav-icon icon-uniE90B"></span>
		        <span class="nav-tab-label">我的</span>
		    </a>
		 </nav>
	</div>
	 
	
	
</template>

<script>
	export default {}
</script>

<style>
.v-link-active .nav-tab-label{
	color: #ff0000;
}
.v-link-active .nav-icon{
	color: #ff0000;
}
</style>