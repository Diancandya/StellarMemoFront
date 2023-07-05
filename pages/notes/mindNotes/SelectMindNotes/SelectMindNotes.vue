

<template>
	<view class="container">
		<view class="subContainer">
	<!-- <uni-section  type="line" padding> -->
		<uni-grid :column="2" :highlight="true" @change="change">
		  <uni-grid-item 
		  v-for="(item, index) in gridData" 
		  :index="index" 
		  :key="index" 
			class="cell"
		  >
			<view class="grid-item-box" style="background-color: #fff;">
			  <image class="image" v-if="item" :src="item.image" mode="aspectFit" />
			  <text class="text" v-if="item">{{ item.text }}</text>
			</view>
		  </uni-grid-item>
		</uni-grid>
		</view>
		</view>
	<!--  </uni-section> -->
	  
	<!-- <view class="container">
		<view>
		<uni-row class="demo-uni-row" :width="nvueWidth">
			<uni-col :span="12">
				<view class="cell" @click="gotoPage5W1H_Notes">
					<image class="image" src="../../../../static/5W1H.jfif"></image>
					<text class="text">5W1H</text>
				  </view>
			</uni-col>
			<uni-col :span="12">
				<view class="cell" @click="gotoPageTimeFourQuadrants_Notes">
					<image class="image" src="../../../../static/FTM.jfif"></image>
					<text class="text">四象限时间管理</text>
				  </view>
			</uni-col>
		</uni-row>
	</view>
	<view>
		<uni-row class="demo-uni-row" :width="nvueWidth">
			<uni-col :span="12">
				<view class="cell" @click="gotoPageSWOT_Notes">
					<image class="image" src="../../../../static/SWOT.jfif"></image>
					<text class="text">SWOT</text>
				  </view>
			</uni-col>
			<uni-col :span="12">
			</uni-col>
		</uni-row>
	</view>
  </view> -->
</template>

<script>
export default {
	data() {
			return {
				gutter: 0,
				nvueWidth: 730,
				gridData: [
      			{ image: '../../../../static/5W1H.png', text: '5W1H' },
      			{ image: '../../../../static/FTM.png', text: '四象限时间管理' },
     			{ image: '../../../../static/SWOT.png', text: 'SWOT' },
      			null // 第四个宫格为空
    			]
			}
		},
  methods: {
	 /* gotoNotePage(index) {
		  console.log("success")
	        switch (index) {
	          case 0:
	            this.gotoPage5W1H_Notes();
	            break;
	          case 1:
	            this.gotoPageTimeFourQuadrants_Notes();
	            break;
	          case 2:
	            this.gotoPageSWOT_Notes();
	            break;
	          // Handle other grid items as needed
	          default:
	            break;
	        }
	      }, */
	  change(e) {
		  /* console.log("1") */
	  				let {
	  					index
	  				} = e.detail
					/* console.log("2") */
					switch (index) {
					  case 0:
					    this.gotoPage5W1H_Notes();
					    break;
					  case 1:
					    this.gotoPageTimeFourQuadrants_Notes();
					    break;
					  case 2:
					    this.gotoPageSWOT_Notes();
					    break;
					  // Handle other grid items as needed
					  default:
					    break;
					}
	  				/* this.list[index].badge && this.list[index].badge++ */
	 /* console.log("3") */
	  				/* uni.showToast({
	  					title: `点击第${index+1}个宫格`,
	  					icon: 'none'
	  				}) */
	  			},
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

	
  }
};
</script>

<style scoped>
.container {
	height:100vh;
	background-image: linear-gradient(to top, #fbf3c7, #fed3ae, #fbb2a7, #e797af, #bd85bd, #9b76b7, #7369b0, #405da7, #304893, #21337f, #121e6b, #000957);
  /* display: flex; */
  
}
.subcontainer{
	background-color: transparent; /* 将容器的背景色设置为透明 */
}
.cell{
	background-color: transparent;
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
.demo-uni-row {
	margin-bottom: 10px;
	display: block;
}
.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
</style>

