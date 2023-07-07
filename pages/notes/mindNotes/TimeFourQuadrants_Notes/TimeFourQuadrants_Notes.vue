<template>
	<view>
		<view class="uni-form-item uni-column" >
			<input 
			class="noteTitle" 
			maxlength=12 
			focus
			placeholder="输入标题（不超过12字）"
			v-model="titleValue"
			/>
		</view>
		<view>
			<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
				<uni-col v-for="(tag, index) in tags_1" :key="index" :span="4" >
				      <button
				        class="tagButton"
						:class="{ 'tagButton-filled': selectedTags.includes(index) }"
				        @click="toggleTagButton(index)"
				      >
				        {{ tag }}
				      </button>
				    </uni-col>
				<uni-col :span="2" offset="1">
					<uni-icons 
					type="plusempty" 
					size="30"
					@click="toggle('bottom')"
					>
					</uni-icons>
				</uni-col>
			</uni-row>
		</view>
		<view>
						<checkbox-group v-model="checkboxValue">
							<label>
								<checkbox value="cb" />公开
							</label>
						</checkbox-group>
					</view>
		<view>
					<!-- 普通弹窗 -->
					<uni-popup ref="popup" background-color="#fff" @change="change">
						<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
							<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
								<uni-col v-for="(tag, index) in tags_1" :key="index" :span="4" :offset="index > 0 ? 1 : 0">
									 <button
									class="tagButton"
									:class="{ 'tagButton-filled': selectedTags.includes(index) }"
									@click="toggleTagButton(index)"
									>
									{{ tag }}
									</button>
								</uni-col>
							</uni-row>
							<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
								<uni-col v-for="(tag, index) in tags_2" :key="index" :span="4" :offset="index > 0 ? 1 : 0">
									 <button
									class="tagButton"
									:class="{ 'tagButton-filled': selectedTags.includes(index+5) }"
									@click="toggleTagButton(index+5)"
									>
									{{ tag }}
									</button>
								</uni-col>
							</uni-row>
							<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
								<uni-col v-for="(tag, index) in tags_3" :key="index" :span="4" :offset="index > 0 ? 1 : 0">
									 <button
									class="tagButton"
									:class="{ 'tagButton-filled': selectedTags.includes(index+10) }"
									@click="toggleTagButton(index+10)"
									>
									{{ tag }}
									</button>
								</uni-col>
							</uni-row>
							<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
								<uni-col v-for="(tag, index) in tags_4" :key="index" :span="4" :offset="index > 0 ? 1 : 0">
									 <button
									class="tagButton"
									:class="{ 'tagButton-filled': selectedTags.includes(index+15) }"
									@click="toggleTagButton(index+15)"
									>
									{{ tag }}
									</button>
								</uni-col>
							</uni-row>
							</view>
					</uni-popup>
				</view>
		<!-- <view class="row">
		  <view class="column">
		    <view class="block" :style="{ backgroundImage: 'url(' + Simage + ')' }">
		      <textarea v-model="textS" class="textarea" maxlength="160"></textarea>
		    </view>
		    <view class="block" :style="{ backgroundImage: 'url(' + Wimage + ')' }">
		      <textarea v-model="textW" class="textarea" maxlength="160"></textarea>
		    </view>
		  </view>
		  <view class="column">
		    <view class="block" :style="{ backgroundImage: 'url(' + Oimage + ')' }">
		      <textarea v-model="textO" class="textarea" maxlength="160"></textarea>
		    </view>
		    <view class="block" :style="{ backgroundImage: 'url(' + Timage + ')' }">
		      <textarea v-model="textT" class="textarea" maxlength="160"></textarea>
		    </view>
		  </view>
		  </view> -->
		  
		 
		
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
	<view class="buttonContainer">
    <button class="save-btn" @click="saveData">保存</button>
	</view>
  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
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
    textarea1: '',
    textarea2: '',
    textarea3: '',
    textarea4: '',
	backimage:'/static/TFQ.png',
	checkboxValue: [] ,
    };
  },
  methods: {
	  toggleTagButton(index) {
	  			 selectedTags: this.selectedTags;
	       const filledCount = this.selectedTags.length;
	       // Check if the clicked button is already selected
	       const selectedIndex = this.selectedTags.indexOf(index);
	       if (selectedIndex > -1) {
	         // Button is already selected, remove it from the selected tags
	         this.selectedTags.splice(selectedIndex, 1);
	       } else {
	         if (filledCount < this.max) {
	           // Button is not selected and max limit is not reached, add it to the selected tags
	           this.selectedTags.push(index);  
	         }
	       }
	     },
	     isTagFilled(index) {
	       // Check if the button at the given index is selected
	       return this.selectedTags.includes(index);
	     },
	     change(e) {
	     				console.log('当前模式：' + e.type + ',状态：' + e.show);
	     			},
	     toggle(type) {
	     				this.type = type
	     				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
	     				this.$refs.popup.open(type)
	     			},
    saveData() {
		var publicValue
				 if (this.checkboxValue.includes("cb")) {
				    publicValue=1
				 } else {
				 	publicValue=0
				     }
		const openid = wx.getStorageSync('openid')
		let noteData = "textarea1: "+this.textarea1+" textarea2: "+this.textarea2+" textarea3: "+this.textarea3+" textarea4: "+this.textarea4;
      const data = {
		  openid:this.openid,
		  title:this.titleValue,
		  selectedTags: this.selectedTags,
        data:noteData,
		publicValue:this.publicValue,
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
  

  align-items: flex-start;
  justify-content: center;
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
.buttonContainer{
	display: flex;
	  justify-content: center;
	  align-items: center;
}
.save-btn {
	
  width: 240rpx;
  height: 60rpx;
  background-color: #545D89;
  color: #E4BF98;
  border-radius: 5rpx;
  text-align:center;
  line-height: 60rpx;
  position: fixed;
  bottom: 10rpx;;
    bottom: 10rpx;
}
.noteTitle{
		height:35px;
		font-size: 25px;
	}
	.demo-uni-row {
			margin-bottom: 0px;
	
		}
		.demo-uni-col {
				height: 36px;
				border-radius: 0px;
			}
		
			.dark_deep {
				background-color: #99a9bf;
			}
		
			.dark {
				background-color: #d3dce6;
			}
		
			.light {
				background-color: #e5e9f2;
			}
		
			.tagButton {
				width: 100%;
				height: 36px;
				display: flex;
				/* justify-content: center;
				align-items: center; */
				border: 2px solid #000;
				cursor: pointer;
				font-weight: bold;
				font-size: 14px;
			  }
			
			.tagButton-filled {
				background-color: #0000003a;
				color: #fff;
			  }
</style>
