<template>
  <view class="container">
    <view class="title">找回密码</view>
    <view class="form">
      <input
        type="text"
        placeholder="请输入注册的邮箱地址"
        v-model="email"
        class="input"
      />
      <button @click="sendResetEmail" class="button">发送重置邮件</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    sendResetEmail() {
      // 在此处编写发送重置邮件的逻辑
      // 可以使用uni.request或uni.request({
      //   url: 'your_api_endpoint',
      //   method: 'POST',
      //   data: {
      //     email: this.email
      //   },
      //   success: res => {
      //     // 处理成功响应
      //     console.log(res);
      //   },
      //   fail: err => {
      //     // 处理失败响应
      //     console.error(err);
      //   }
      // });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  padding: 10px 20px;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>