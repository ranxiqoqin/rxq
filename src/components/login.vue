<template>
      <div class="login-box">
        <div class="head-login">
        	<div class="logo">
            	<img src="../../static/images/logo-caiyunhui.png">
                <p>采社区</p>
        	</div>
        </div>
        <div class="login">
          	<form id="login" action="" method="post" class="input-group register-group" >
                <div class="input-row">
        			<label><i class="icon-uniE938"></i></label>
        			<input type="text" placeholder="手机号码">
        		</div>
        		<div class="input-row">
        			<label><i class="icon-uniE937"></i></label>
        			<input type="password" placeholder="输入密码">
        		</div>
                <div class="toolTip-box" style="display: none;">
                    <div class="toolTip-flop">
                        <i class="icon-uniE931 hint"></i>
                        <b>登录失败</b>
                        <p>用户名或密码不正确</p>
                        <div class="btnbox">
                            <a href="#" class="btn btn-b hidePopup">确定</a>
                        </div>
                        
                    </div>
                </div>
                <button type="button" class="btn cy-btn btn-red">登录</button>
        	</form>
        	<div class="login-reg">
                <a class="reg-left" href="resetpassword.html">忘记密码?</a>
                <a class="reg-right" href="register.html">注册账号</a>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
</style>