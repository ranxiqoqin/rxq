<template>
	 <router-view ></router-view>
	<header>
			<div class="header">
				<a class="returnA"><h1 class="htitle">LOGO</h1></a>
				<div class="hmap" id="gomap"><span class="icon-uniE902"></span>广州</div>
				<div class="head-input-row head-search">
					<input id="search" type="search" placeholder="搜索信息" >
						<span class=" head-icon-left icon-uniE90F"></span>
						<span class=" head-icon-right icon-uniE939"></span>
				</div>
			</div>
	</header>
	<div style="height: 2.5rem;"></div>
	<div class="all_box">
		<!-- 轮播图 -->
	    <div class="m-slider" id="slider">
		    <div class="ks_dbox ks_ts">
		         <div class="ks_wrap" v-for="imgbannar in msg.bannarimg" track-by="$index" >
		           <img :src = "imgbannar">
		         </div>
		    </div>
		    <div class="ks-circles"><ul class="ks_wt"></ul></div>
	    </div>
	    <!-- 轮播图 end-->
	    <!-- 功能板块 -->
	    <div class="big_button">
	    	<div class="big_left">
	    		<div class="big_left_p"><a v-link="{path:'/homepage/associationlist'}"><span class="icon-uniE92C"></span><h3>我的社区</h3></a></div>
	    		<div class="big_left_p2"><a v-link="{path:'/login'}"><h3>申请加入</h3></a></div>
	    		<div class="ind-bar"></div>
	    	</div>
	    	<div class="big_right">
				<div class="big_rigt_p plate_a fl">
					<a href="javascript:;"><span class="icon-17"></span><h3>热门资讯</h3></a>
					<div class="ind-bar2"></div>
				</div>
				<div class="big_rigt_p plate_b fr">
					<a v-link="{path:'/homepage/messcenter'}"><span class="icon--01"></span><h3>专家风采</h3></a>
					<div class="ind-bar3"></div>
				</div>
				<div class="big_rigt_p plate_c fl">
					<a href="javascript:;"><span class="icon-uniE932"></span><h3>企业展示</h3></a>
					<div class="ind-bar2"></div>
				</div>
				<div class="big_rigt_p plate_d fr" >
					<a href="javascript:;"><span class="icon-uniE93B"></span><h3>采销市场</h3></a>
					<div class="ind-bar3"></div>
				</div>
				<div class="cl"></div>
			</div>
	    </div>
	    <!-- 功能板块 end-->
	    <!-- 会员风采 -->
	    <div class="m-Mien">
	    	<b><em></em>知名专家</b>
	    	<ul>
	    		<li v-for="infor in msg.Mien" track-by="$index" >
	    			<a v-link="{path:'/miendetails/'+infor.id+''}" class="cl">
		    			<img :src="infor.avatar">
		    			<div class="mienIntro">
							<h1>{{infor.name}}</h1>
		    				<p>{{infor.degree}}</p>
		    				<p>{{infor.profession}}</p>
		    			</div>
	    			</a>
	    		</li>
	    	</ul>
            <div class="m-Mien-m">
            	<a href="javascript:;">查看更多</a>
            </div>
	    </div>
	    <!-- 会员风采 end-->
	    <!-- 协会活动列表 -->
		<div class="dynamic-list activity-list">
			<div class="dynamic-list-head">
				<i class="dynamic-i-l icon-uniE93D"></i>
				<b>热门活动</b>
				<a><i class="dynamic-i-r icon-uniE906 fr"></i></a>
			</div>
			<ul class="eventreminder">
				<li v-for="actinfor in msg.activity" track-by="$index">  		
		    		<a v-link="{path:'/activity/'+actinfor.id+'?edit=true'}">
		    			<div class="A-cimg">
                                <img :src="actinfor.img">
								<span class="i-activity p-free" V-text="typeMap[actinfor.type]"></span>
                                <span class="i-activity p-number">{{actinfor.number}}人报名</span>
                                <span class="activity-s activity-s-1"  v-text="stateMap[actinfor.state]"></span>
		    			</div>
	                    <div class="eventreminder-list">
	                        <p class="activity-h1">{{actinfor.activityname}}</p>
	                        <p class="activity-TimeXh"><span class="fr">{{actinfor.time}}</span> <span class="event-xh">{{actinfor.company}}</span></p>
	                    </div>  
					</a>
				</li>  
	        </ul>
		</div>
	    <!-- 协会活动列表 end-->
	    <!-- 协会动态列表 -->
		<ul class="dynamic-list">
			<div class="dynamic-list-head">
				<i class="dynamic-i-l icon-uniE925"></i>
				<b>热门动态</b>
				<i class="dynamic-i-r icon-uniE906 fr"></i>
			</div>
			<li v-for="dynamic in msg.dynamicstate">
				<a  v-link="{path:'/associationdt/'+dynamic.id+''}">
					<img class="cy-media-object pull-left" :src="dynamic.img">
					<div class="cy-media-body">
						<h3>{{dynamic.title}}</h3>
						<p class="cy-ellipsis">{{dynamic.content}}</p>
						<p class="cy-ellipsis cy-heatTime">
							<span><i class="icon-uniE92F"></i>{{dynamic.browse}}</span>&nbsp;&nbsp;
							<span><i class="icon-uniE930"></i>{{dynamic.like}}</span>
							<span class="fr">{{dynamic.time}}</span>
						</p>
					</div>
				</a>
			</li>
			
		</ul>
	</div>
    <!-- 协会动态列表 end-->
	
</template>

<script>
	export default {
		data() {
			return{
				msg:{}
			}
		},
		created() {
			 this.$http.get("../../../static/data.json").then((data)=>{
		        this.msg = data.body.homepage
				this.typeMap = ["缴费","免费"]
				this.stateMap = ["正在报名","活动进行中","已报名","报名截止"]
	    })
		},
	   computed() {
          
      
      }
	  
		
	}
	 
</script>

<style>

</style>