<template>
  <view class="container" >
	   <image class="bg-set" src="../../../../static/TFQ.png"></image>
    <view class="row">
      <textarea class="textarea1" v-model="textarea1" maxlength="-1"></textarea>
      <textarea class="textarea1" v-model="textarea2" maxlength="-1"></textarea>
    </view>
    <view class="row">
      <textarea class="textarea2" v-model="textarea3" maxlength="-1"></textarea>
      <textarea class="textarea2" v-model="textarea4" maxlength="-1"></textarea>
    </view>
    <button class="save-btn" @click="saveData">保存</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: '',
      textarea3: '',
      textarea4: '',
	  backimage:'/static/TFQ.png'
    };
  },
  methods: {
    saveData() {
      const data = {
        textarea1: this.textarea1,
        textarea2: this.textarea2,
        textarea3: this.textarea3,
        textarea4: this.textarea4
      };

      // 使用UniApp的请求方法发送POST请求到后端
      uni.request({
        url: '后端接口URL',
        method: 'POST',
        data: data,
        success: (res) => {
          // 请求成功处理逻辑
          console.log('保存成功');
        },
        fail: (err) => {
          // 请求失败处理逻辑
          console.error('保存失败', err);
        }
      });
    }
  }
};
</script>

<style>
.container {
  
  flex-direction: column;
  align-items: flex-start;
 
  width:750rpx;
  height: 1420rpx;
}
.bg-set{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}
.row {
  display: flex;
  flex-direction: row;
  margin-bottom: 10rpx;
}

.textarea1 {
  width: 360rpx;
  height: 720rpx;
  margin-right: 10rpx;
  margin-bottom: 40rpx;
}
.textarea2 {
  width: 360rpx;
  height: 600rpx;
  margin-top: 10rpx;
  margin-right: 10rpx;
}

.save-btn {
  width: 120rpx;
  height: 60rpx;
  background-color: #007aff;
  color: #fff;
  border-radius: 5rpx;
  text-align:center;
  line-height: 60rpx;
}
</style>
