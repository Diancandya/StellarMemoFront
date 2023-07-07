<template>
  <view class="container">
	  <view class="uni-form-item uni-column" >
	  	<input 
	  	class="noteTitle" 
	  	maxlength=12 
	  	focus
	  	placeholder="输入标题（不超过12字）"
	  	v-model="titleValue"
	  	/>
	  </view>
    <view class="row">
      <view class="column">
        <view class="block" :style="{ backgroundImage: 'url(' + Simage + ')' }">
          <textarea v-model="textS" class="textarea" maxlength="160" placeholder="Strengths"></textarea>
        </view>
        <view class="block" :style="{ backgroundImage: 'url(' + Wimage + ')' }">
          <textarea v-model="textW" class="textarea" maxlength="160" placeholder="Weaknesses"></textarea>
        </view>
      </view>
      <view class="column">
        <view class="block" :style="{ backgroundImage: 'url(' + Oimage + ')' }">
          <textarea v-model="textO" class="textarea" maxlength="160" placeholder="Opportunities"></textarea>
        </view>
        <view class="block" :style="{ backgroundImage: 'url(' + Timage + ')' }">
          <textarea v-model="textT" class="textarea" maxlength="160" placeholder="Threats"></textarea>
        </view>
      </view>
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
					<checkbox-group v-model="checkboxValue" class="checkbox">
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
	  
    
    <button class="save-button" @click="save">保存</button>
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
	  Simage:'/static/SWOT/S.png',
	  Wimage:'/static/SWOT/W.png',
	  Oimage:'/static/SWOT/O.png',
	  Timage:'/static/SWOT/T.png',
      textS: '' ,
	  textW: '' ,
	  textO: '' ,
	  textT: '',
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
    save() {
		var publicValue
				 if (this.checkboxValue.includes("cb")) {
				    publicValue=1
				 } else {
				 	publicValue=0
				     }
		const openid = wx.getStorageSync('openid');
		let noteData = "Strengths: "+this.textS+" Weakness: "+this.textW+" Opportunities: "+this.textO+" Threats: "+this.textT;
		console.log(noteData)
      // 发送POST请求给后端，将textarea的内容发送过去
      uni.request({
        url: '后端接口地址',
        method: 'POST',
        data: {
		openid:openid,
		title:this.titleValue,
		selectedTags: this.selectedTags,
        content: this.noteData,
		publicValue:this.publicValue,
        },
        success: (res) => {
          console.log('保存成功');
		  // console.log(noteData)
        },
        fail: (err) => {
			// console.log("11111");
          console.error('保存失败', err);
		  // console.log(err.data)
		  // console.log(err)
        }
      });
    }
  }
};
</script>

<style>
.container {
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px; */ 
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
}

.block {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* 宽高相等 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.textarea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;
}

.save-button {
  align-self: flex-end;
  background-color: #F4C8D8;
  margin-top: 10px;
}
.noteTitle{

	  margin-bottom: 25rpx;
	  margin-left: 0;
	  margin-right: 0;
		height:35px;
		font-size: 25px;
	}
	.demo-uni-row {
		margin-top: 25rpx;
		  margin-bottom: 25rpx;
		  margin-left: 0;
		  margin-right: 0;

	
		}
		.demo-uni-col {
			margin-top: 25rpx;
			  margin-bottom: 25rpx;
			  margin-left: 0;
			  margin-right: 0;
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

				  margin-bottom: 25rpx;
				  margin-left: 0;
				  margin-right: 0;
				width: 100%;
				height: 36px;
				display: flex;
				/* justify-content: center;
				align-items: center; */
				border: 2px #d3d3d3;
				cursor: pointer;
				font-size: 14px;
				color:#FF5B00;
				background-color: #FFFAD7;
			  }
			
			.tagButton-filled {
				font-weight: bold;
				background-color: #E97777;
				color: #FEF2F4;
			  }
			  .checkbox{
margin-top: 25rpx;
  margin-bottom: 25rpx;
  margin-left: 0;
  margin-right: 0;
			  }
</style>
