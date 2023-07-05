<template>
  <view class="container">
	  <view class="row">
    <view class="notesCategory" @click="redirectToDailyNotesPage">
      <image class="image" src="/static/dailyNotes.png" /> 
      <text class="text">日常笔记</text>
    </view>
    <view class="notesCategory" @click="redirectToMindNotesPage">
      <image class="image" src="/static/mindNotes.png" />
      <text class="text">思维笔记</text>
	  </view>
    </view>
	 <!-- <view>
		 <image class="backgroundImage" src="/static/stars.jpg"/>
	 </view> -->
  </view>
  
 

</template>

<script>
	export default {
		titleValue:'',
		type: 'center',
		gutter: 0,
		nvueWidth: 730,
		tags_1: ['情感','摄影','搞笑','游戏','绘画'],
		tags_2: ['运动','旅行','美食','穿搭','学习'],
		tags_3: ['音乐','护肤','壁纸','手工','心理'],
		tags_4: ['动漫','职场','机车','家装','文化'],
		selectedTags: [],
		max: 10,
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
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  padding: 20rpx;
}

.notesCategory {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.image {
  width: 300rpx;
  height: 300rpx;
}

.text {
  margin-top: 10rpx;
  font-size: 36rpx;
}
.backgroundImage{
	height: 150vh;
	width: 300rpx;
	align-items: center;
	height: 300rpx;
}
</style>