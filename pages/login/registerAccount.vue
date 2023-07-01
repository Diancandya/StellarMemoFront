<template>
  <view class="container">
      <view class="form-group">
        <text class="label">邮箱：</text>
        <input class="input" type="text" v-model="email" />
        <text v-if="!isEmailValid" class="error">请输入有效的邮箱地址</text>
      </view>
      <view class="form-group">
        <text class="label">用户名：</text>
        <input class="input" type="text" v-model="username" />
        <text v-if="!isUsernameValid" class="error">用户名长度不能超过15个字符</text>
      </view>
      <view class="form-group">
        <text class="label">密码：</text>
        <input class="input" type="password" v-model="password1" />
      </view>
      <view class="form-group">
        <text class="label">确认密码：</text>
        <input class="input" type="password" v-model="password2" />
        <text v-if="!isPasswordMatch" class="error">两次输入的密码不一致</text>
      </view>
      <view class="button-group">
        <button class="button" @click="register">注册</button>
      </view>
    </view>
</template>

<script>
export default {
  data() {
    return {
			email: '',
            username: '',
            password1: '',
            password2: '',
            isEmailValid: true,
            isUsernameValid: true,
            isPasswordMatch: true
    };
  },
  methods: {
    register() {
          this.isEmailValid = this.validateEmail(this.email);
          this.isUsernameValid = this.validateUsername(this.username);
          this.isPasswordMatch = this.password1 === this.password2;
    
          if (this.isEmailValid && this.isUsernameValid && this.isPasswordMatch) {
            // Perform registration logic
            // ...
			if (this.email === "" || this.username === "" || this.password1 === "" || this.password2 === "") {
			        // Check if any field is empty
			        // Handle the empty field case
			        return;
			      }
				  			  
				  const registerData = {
				    username: this.username,
				    password: this.password,
					email: this.email
				  };
				  
				  // 发送 POST 请求到后端
				  uni.request({
				    url: 'http://localhost:8083/user/register', // 后端登录接口的 URL
				    method: 'POST',
				    data: registerData,
				    success: (res) => {
				      // 处理后端响应
				      console.log(res.data);
				    },
				    fail: (err) => {
				      // 处理请求失败情况
				      console.error(err);
				    }
				  });
	  
            console.log('Registration successful');
			uni.navigateTo({
			        url: '../index/login' // 登录页面的路径
			      });
          } else {
            console.log('Registration failed');
          }
        },
        validateEmail(email) {
          // Email validation logic
          // Return true if email is valid, false otherwise
          // You can use a regular expression or a library like validator.js
          // Example using a regular expression:
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        },
        validateUsername(username) {
          // Username validation logic
          // Return true if username is valid, false otherwise
          return username.length <= 15;
        }
  }
};
</script>

<style>
.container {
  padding: 20rpx;
}

.form-group {
  margin-bottom: 20rpx;
  display: flex;
  align-items: center;
}

.label {
  width: 100rpx;
}

.input {
  flex: 1;
  height: 60rpx;
  border: 1px solid #ccc;
  border-radius: 8rpx;
  padding: 0 10rpx;
}

.button-group {
  display: flex;
  justify-content: center;
}

.button {
  width: 200rpx;
  height: 60rpx;
  background-color: #007aff;
  color: #fff;
  border-radius: 8rpx;
  line-height: 60rpx;
  text-align: center;
}
</style>