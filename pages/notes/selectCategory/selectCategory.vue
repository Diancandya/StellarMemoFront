<template>
  <view class="container">
    <view class="dailyNotes">
      <image class="image" src="/static/dailyNotes.png" @click="redirectToDailyNotesPage"/> 
      <text class="text">日常笔记</text>
    </view>
    <view class="mindNotes">
      <image class="image" src="/static/mindNotes.png" @click="redirectToMindNotesPage"/>
      <text class="text">思维笔记</text>
    </view>
  </view>
</template>

<script>
	export default {
	   /* data() {
	    return {
	      daily-Notes-url: '../../static/dailyNotes'
	      mind-Notes-url: '../../static/mindNotes'
	    };
	  }, */
	  methods: {
	    redirectToDailyNotesPage() {
	      // 在这里执行跳转到另一个页面的操作
	      uni.navigateTo({
	        url: '../dailyNotes/dailyNotes'
	      });
	    },
		redirectToMindNotesPage() {
		  // 在这里执行跳转到另一个页面的操作
		  uni.navigateTo({
		    url: '../mindNotes/SelectMindNotes/SelectMindNotes'
		  });
		}
	  }
	};
</script>

<style >
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20rpx;
}

.dailyNotes,
.mindNotes {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.image {
  width: 200rpx;
  height: 200rpx;
}

.text {
  margin-top: 10rpx;
  font-size: 24rpx;
}
</style>