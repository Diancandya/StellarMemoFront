<template>
  <view class="container">
    <view class="row">
      <view class="cell" @click="gotoPage5W1H_Notes">
        <image class="image" src="../../../../static/5W1H.jfif"></image>
        <text class="text">5W1H</text>
      </view>
      <view class="cell" @click="gotoPageTimeFourQuadrants_Notes">
        <image class="image" src="../../../../static/FTM.jfif"></image>
        <text class="text">四象限时间管理</text>
      </view>
    </view>
    <view class="row">
      <view class="cell" @click="gotoPageSWOT_Notes">
        <image class="image" src="../../../../static/SWOT.jfif"></image>
        <text class="text">SWOT</text>
      </view>
      <view class="cell" @click="gotoPage4">
        <image class="image" src="/path/to/image4.png"></image>
        <text class="text">Text 4</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {

	
	
  methods: {
    gotoPage5W1H_Notes() {
      uni.navigateTo({
        url: '../5W1H_Notes/5W1H_Notes'
      });
    },
    gotoPageTimeFourQuadrants_Notes() {
      uni.navigateTo({
        url: '../TimeFourQuadrants_Notes/TimeFourQuadrants_Notes'
      });
    },
    gotoPageSWOT_Notes() {
      uni.navigateTo({
        url: '../SWOT_Notes/SWOT_Notes'
      });
    },
    gotoPage4() {
      uni.navigateTo({
        url: '/pages/page4'
      });
    },
  }
};
</script>

<style scoped>
.container {
  display: flex;
  
}

.column {
	
	flex-direction: column;
  display: flex;
  justify-content: center;
   align-items: center;
  margin-bottom: 20rpx;
  width:100%
}

.cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30rpx;
  background-color: #f0f0f0;
}

.image {
  width:400rpx;
  height:300rpx;

}

.text {
  margin-top: 10rpx;
  font-size: 36rpx;
  color: #333333;
}
</style>
