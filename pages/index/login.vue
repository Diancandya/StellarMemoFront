<template>
	<view class="content">
		<image class="logo" :src="headerUrl"></image>
		<view class="is-textarea">
			<text class="title">{{nickName}}</text>
		</view>
		<view class="is-textarea button-style" @click="login()">
			<b>登录</b>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickName:'Hello',
				headerUrl:'../../static/logo.png'
			}
		},
		onLoad() {
			
		},
		methods: {
			login(){
				var that = this
				uni.showModal({
					mask: true,
					title:'温馨提示',
					content:'授权微信登录后才能正常使用小程序功能',
					success(res){
						if(res.confirm){
							uni.getUserProfile({
								desc:'获取你的昵称、头像',
								success: userRes =>{
									wx.setStorageSync('userInfo',userRes.userInfo)
								console.log("shabi\n");
									if(userRes.errMsg == 'getUserProfile:ok' && userRes.userInfo != undefined){
										var userInfo = {
											avatarUrl: userRes.userInfo.avatarUrl,
											nickName: userRes.userInfo.nickName
										}
										that.nickName = userRes.userInfo.nickName
										that.headerUrl = userRes.userInfo.avatarUrl
										that.getUserOpenId(userInfo)
										uni.navigateTo({
										  url: './index'
										});
									}else{
										uni.showToast({
											icon:"none",
											title:"获取失败，请重试"
										})
									}
								},
								fail: error =>{}
							});
						}else if (res.cancle){}
					}
				});
			},
			
			getUserOpenId(userInfo){
				var that = this
				uni.login({
					provider: 'weixin',
					success(loginAuth){
						var data = {'code':loginAuth.code}
						var path = 'http://localhost:8083/user/wxLogin'
						uni.request({
								url: path,
								method: 'POST',
								data: data
							}).then((response)=>{
							userInfo['openid'] = response.data.data
							const cookies=response.cookies
							const openid=response.cookies.openid
							wx.setStorageSync('cookies',cookies)
							wx.setStorageSync('openid',openid)
							console.log(userInfo)
						})
					}
				})
			}
		}
	}
</script>

<style>
.content{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 80rpx;
	background-color: #fff;
	height: 100vh;
}
.logo {
	width: 200rpx;
	height: 200rpx;
	margin-bottom: 60rpx;
}

.is-textarea {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	margin-bottom: 40rpx;
}

.title {
	font-size: 32rpx;
	color: #black;
	font-weight:bold;
}

.button-style {
	width: 200rpx;
	height: 68rpx;
	border-radius: 10%;
	background-color: #00f;
	cursor:pointer;
}

.button-style b {
    font-weight:bold; /* 将按钮内部的文本加粗 */
}
</style>
