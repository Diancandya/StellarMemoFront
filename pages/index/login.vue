<template>
	<view class="content">
		<image class="logo" :src="logoUrl"></image>
		<view class="text-area">
			<text class="title">{{nickName}}</text>
		</view>
		<view class="text-area button-style" @click="login()">
			<u-button size="medium">夜雨</u-button>
			登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickName: 'Hello',
				logoUrl:"../../static/logo.png",
			}
		},
		onLoad() {

		},
		methods: {
			
			login(){
				var that=this
				uni.showModal({
					mask:true,
					title:'温馨提示',
					content:'授权微信登录后才能正常使用微信小程序功能',
					success(res){
						if(res.confirm){
							uni.getUserProfile({
								desc:'获取您的昵称、头像',
								success: userRes=>{
									if(userRes.errMsg == 'getUserProfile:ok' && userRes.userInfo != undefined){
										var userInfo = {
											avatarUrl: userRes.userInfo.avatarUrl,
											nickName:userRes.userInfo.nickName 
										}	
										that.nickName = userRes.userInfo.nickName
										that.logoUrl = userRes.userInfo.avatarUrl
										that.headerUrl = getUserOpenId(userInfo)
									}else{
										uni.showToast({
											icon:"none",
											title:"获取失败，请重试"
										})
									}
								},
								fail: error=>{}
							});
						}else if(res.cancel){}
					}
				});
			},
			getUserOpenId(userInfo){
				var that = this
				uni.login({
					provider: 'weixin',
					success(loginAuth){
						var data ={'code':loginAuth.code}
						var path = '/user/getOpenId'
						that.$http(path,data).then((response)=>{
							userInfo['Openid'] = response
							console.log(userInfo)
						})
					}
				})
			}
			
			
		}
	}
	
</script>

<style>

</style>
