<template>
    <div>
        <div>
		<header>
			<div class="header">
				<h1>活动详情</h1>
				<a class="return" @click="backhome"><i class="icon-16"></i></a>
			</div>
		</header>
		<div style="height: 2.5rem;"></div>
	</div>
	<div class="all_box all_boxNodown">
		<!-- 活动详情 activity-->   
        	<div class="A-cimg activity-pic">
            	<img src="../../static/images/hd2.jpg">
                <span class="i-activity p-number"><i class=" icon-uniE92F"></i>78</span>
                <h1>广州50Km徒步活动</h1>
                <a href="#">广州-徒步社</a>
                 <span>| 2015-09-06 18:26 15:00</span>
            </div>     	
		   <ul class="activity-info">
                <li><i class="icon-uniE924"></i><span>活动时间：</span>2016-04-23&nbsp;&nbsp;早上10:00</li>
                <li><i class="icon-uniE94A"></i><span>报名截止：</span>2016-04-22&nbsp;&nbsp;下午18:00</li>
                <li><i class="icon-uniE902"></i><span>活动地址：</span>广州天河区</li>
                <li><i class="icon-uniE952"></i><span>是否收费：</span>否/报名费200采云币</li>
                <li><i class="icon-18"></i><span>发布单位：</span>广州-徒步社</li>
	       </ul>        
	       <div class="activity-details">
	       		<p>万众瞩目的NBA总决赛将在勇士和骑士之间展开，博彩公司开出了最新的夺冠赔率。勇士显然是更被看好的一方，他们夺冠概率高达66%，而在总决赛MVP赔率榜上，詹姆斯和库里并列第1。</p>
	    	    <img src="../../static/images/act1.jpg">
	            <p>对于体育赛事，博彩公司有着自己一整套的计算模式，他们往往能做出精确的预测。同大多数人看好勇士一样，博彩公司也认为，勇士是更有机会夺冠的那支球队。</p>

				<p>根据最新的夺冠赔率，勇士为-205，也就是你需要下注205元，才能够赢得100元。而骑士的夺冠赔率则为+185，你下注100元，就能够赢得185元。</p>

				<p>我们都知道，博彩公司会先算出两支球队的夺冠概率，然后才会给出赔率，以供球迷们下注。换言之，我们也可以根据这个赔率，得出在博彩公司的算法中勇士和骑士各自的夺冠概率。</p>

				<p>根据相应的计算公式，在博彩公司的预测中，勇士夺冠概率已经达到了66%，而骑士只有34%。而之前权威媒体ESPN公布的BPI指数中，勇士赢得总冠军的概率高达75%。所以，无论是博彩公司还是篮球媒体，都认定勇士的优势还是非常明显的。</p>

				<p>同时，博彩公司也更新了总决赛MVP的赔率。目前，詹姆斯和库里处于并列第1的局面，赔率都是1赔2，下注100元能够赢200元。（肖恩）</p>
	            <!--<img src="../../static/images/zhny.png">            -->
	    	    <a  href="javascript:;" class="compile-btn compile-btn-apply">
                    <i class="icon-uniE93D"></i>
                    <span>去报名</span>
			    </a>
		   </div> 
	</div>
   
    </div>
</template>
<script>
export default{
	data () {
    return {
      msg: 'Hello World!'
    }
  },
 methods:{
     backhome(){
		this.$router.go("/homepage")
	 }
   },
   created() {
      console.log(this.$route.params.id)
	  console.log(this.$route.query.edit)
	  
    }
	
	}

</script>
<style></style>