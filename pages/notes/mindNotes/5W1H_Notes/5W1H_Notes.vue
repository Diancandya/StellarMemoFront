<template>
  <view class="container">
	  <view class="uni-form-item uni-column" >
	  	<input 
	  	class="noteTitle" 
	  	maxlength=12 
	  	focus
	  	placeholder="输入标题（不超过12字）"
		placeholder-style="color:#489F90;"
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
				color="#EBE645"
	  			>
	  			</uni-icons>
	  		</uni-col>
	  	</uni-row>
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
	  
   <form @submit="handleSubmit" action="后端url" >
     <view class="analysis-model">
       <view>
         <view class="titleF">What</view>
         <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWhat" />
       </view>
       <input name="qWhatInput" class="qWhat" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
       <input name="aWhatInput" class="aWhat" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       <view v-for="(questionsWhatBox, qWhatIndex) in questionsWhatBoxes" :key="qWhatindex">
         <input name="qWhatInput" class="qWhat" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
         <input name="aWhatInput" class="aWhat" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       </view>
   
       <view>
         <view class="titleF">Where</view>
         <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWhere" />
       </view>
       <input name="qWhereInput" class="qWhere" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
       <input name="aWhereInput" class="aWhere" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       <view v-for="(questionsWhereBox, qWhereIndex) in questionsWhereBoxes" :key="qWhereindex">
         <input name="qWhereInput" class="qWhere" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
         <input name="aWhereInput" class="aWhere" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       </view>
   
       <view>
         <view class="titleF">When</view>
         <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWhen" />
       </view>
       <input name="qWhenInput" class="qWhen" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
       <input name="aWhenInput" class="aWhen" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       <view v-for="(questionsWhenBox, qWhenIndex) in questionsWhenBoxes" :key="qWhenindex">
         <input name="qWhenInput" class="qWhen" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
         <input name="aWhenInput" class="aWhen" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       </view>
   
       <view>
         <view class="titleF">Why</view>
         <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWhy" />
       </view>
       <input name="qWhyInput" class="qWhy" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
       <input name="aWhyInput" class="aWhy" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       <view v-for="(questionsWhyBox, qWhyIndex) in questionsWhyBoxes" :key="qWhyindex">
         <input name="qWhyInput" class="qWhy" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
         <input name="aWhyInput" class="aWhy" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       </view>
   
       <view>
         <view class="titleF">Who</view>
         <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWho" />
       </view>
       <input name="qWhoInput" class="qWho" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
       <input name="aWhoInput" class="aWho" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       <view v-for="(questionsWhoBox, qWhoIndex) in questionsWhoBoxes" :key="qWhoindex">
         <input name="qWhoInput" class="qWho" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
         <input name="aWhoInput" class="aWho" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       </view>
   
       <view>
         <view class="titleF">How</view>
         <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsHow" />
       </view>
       <input name="qHowInput" class="qHow" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
       <input name="aHowInput" class="aHow" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       <view v-for="(questionsHowBox, qHowIndex) in questionsHowBoxes" :key="qHowindex">
         <input name="qHowInput" class="qHow" type="text" placeholder="Question" placeholder-style="color:#489F90;" />
         <input name="aHowInput" class="aHow" type="text" placeholder="Answer" placeholder-style="color:#489F90;" />
       </view>
   
       <view>
         <checkbox-group v-model="checkboxValue" class="checkbox">
           <label>
             <checkbox value="cb" />公开
           </label>
         </checkbox-group>
       </view>
     </view>
     <input name="openid" type="hidden" />
     <input name="titleValue" type="hidden" />
     <input name="selectedTags" type="hidden" />
     <input name="publicValue" type="hidden" />
     <button type="submit" class="save-button">保存</button>
   
   </form>
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
	  questionsWhatBoxes: [],
	  answerWhatBoxes:[],
	  questionsWhereBoxes: [],
	  answerWhereBoxes:[],
	  questionsWhenBoxes: [],
	  answerWhenBoxes:[],
	  questionsWhyBoxes: [],
	  answerWhyBoxes:[],
	  questionsWhoBoxes: [],
	  answerWhoBoxes:[],
	  questionsHowBoxes: [],
	  answerHowBoxes:[],
	  checkboxValue: [] ,
    };
  },
  methods: {
	  handleSubmit(event) {
		  console.log("?")
	    event.preventDefault();
	  
	    // Get all the question and answer inputs
	    const questionInputs = Array.from(document.querySelectorAll('.qWhat, .qWhere, .qWhen, .qWhy, .qWho, .qHow'));
	    const answerInputs = Array.from(document.querySelectorAll('.aWhat, .aWhere, .aWhen, .aWhy, .aWho, .aHow'));
	  
	    // Extract the values from the inputs and concatenate them
	    const questions = questionInputs.map(input => input.value);
	    const answers = answerInputs.map(input => input.value);
	    const allQuestions = questions.join(';'); // Join questions with a separator
	    const allAnswers = answers.join(';'); // Join answers with a separator
	  
	    // Set the form values
	    this.$refs.openidInput.value = uni.getStorageSync('openid');
	    this.$refs.titleValueInput.value = this.titleValue;
	    this.$refs.selectedTagsInput.value = this.selectedTags;
	    this.$refs.publicValueInput.value = this.checkboxValue.includes('cb') ? 1 : 0;
	  
	    // Append the concatenated questions and answers to the form data
	    const questionsInput = document.createElement('input');
	    questionsInput.name = 'questions';
	    questionsInput.value = allQuestions;
	    questionsInput.type = 'hidden';
	    event.target.appendChild(questionsInput);
	  
	    const answersInput = document.createElement('input');
	    answersInput.name = 'answers';
	    answersInput.value = allAnswers;
	    answersInput.type = 'hidden';
	    event.target.appendChild(answersInput);
	  
	    // Submit the form
	    event.target.submit();
	  },
   /* saveData() {
		let data={};
		
		    // 获取What部分的非空输入框的内容
		    if (this.$refs.qWhatInput && this.$refs.qWhatInput.value.trim() !== '') {
				// console.log($refs.qWhatInput.value)
		      data.qWhat = this.$refs.qWhatInput.value.trim();
		    }
		    if (this.$refs.aWhatInput && this.$refs.aWhatInput.value.trim() !== '') {
		      data.aWhat = this.$refs.aWhatInput.value.trim();
		    }
		    for (let i = 0; i < this.questionsWhatBoxes.length; i++) {
		      const qInput = this.$refs.qWhatInput[i];
		      const aInput = this.$refs.aWhatInput[i];
		      if (qInput && qInput.value.trim() !== '') {
		        data[`qWhat${i}`] = qInput.value.trim();
		      }
		      if (aInput && aInput.value.trim() !== '') {
		        data[`aWhat${i}`] = aInput.value.trim();
		      }
		    }
			//获取Where部分的非空输入框的内容
			    if (this.$refs.qWhereInput && this.$refs.qWhereInput.value.trim() !== '') {
			      data.qWhere = this.$refs.qWhereInput.value.trim();
			    }
			    if (this.$refs.aWhereInput && this.$refs.aWhereInput.value.trim() !== '') {
			      data.aWhere = this.$refs.aWhereInput.value.trim();
			    }
			    for (let i = 0; i < this.questionsWhereBoxes.length; i++) {
			      const qInput = this.$refs.qWhereInput[i];
			      const aInput = this.$refs.aWhereInput[i];
			      if (qInput && qInput.value.trim() !== '') {
			        data[`qWhere${i}`] = qInput.value.trim();
			      }
			      if (aInput && aInput.value.trim() !== '') {
			        data[`aWhere${i}`] = aInput.value.trim();
			      }
			    }
			
			    //获取When部分的非空输入框的内容
			    if (this.$refs.qWhenInput && this.$refs.qWhenInput.value.trim() !== '') {
			      data.qWhen = this.$refs.qWhenInput.value.trim();
			    }
			    if (this.$refs.aWhenInput && this.$refs.aWhenInput.value.trim() !== '') {
			      data.aWhen = this.$refs.aWhenInput.value.trim();
			    }
			    for (let i = 0; i < this.questionsWhenBoxes.length; i++) {
			      const qInput = this.$refs.qWhenInput[i];
			      const aInput = this.$refs.aWhenInput[i];
			      if (qInput && qInput.value.trim() !== '') {
			        data[`qWhen${i}`] = qInput.value.trim();
			      }
			      if (aInput && aInput.value.trim() !== '') {
			        data[`aWhen${i}`] = aInput.value.trim();
			      }
			    }
				
				//获取Why部分的非空输入框的内容
				    if (this.$refs.qWhyInput && this.$refs.qWhyInput.value.trim() !== '') {
				      data.qWhy = this.$refs.qWhyInput.value.trim();
				    }
				    if (this.$refs.aWhyInput && this.$refs.aWhyInput.value.trim() !== '') {
				      data.aWhy = this.$refs.aWhyInput.value.trim();
				    }
				    for (let i = 0; i < this.questionsWhyBoxes.length; i++) {
				      const qInput = this.$refs.qWhyInput[i];
				      const aInput = this.$refs.aWhyInput[i];
				      if (qInput && qInput.value.trim() !== '') {
				        data[`qWhy${i}`] = qInput.value.trim();
				      }
				      if (aInput && aInput.value.trim() !== '') {
				        data[`aWhy${i}`] = aInput.value.trim();
				      }
				    }
					
					//获取Who部分的非空输入框的内容
					    if (this.$refs.qWhoInput && this.$refs.qWhoInput.value.trim() !== '') {
					      data.qWho = this.$refs.qWhoInput.value.trim();
					    }
					    if (this.$refs.aWhoInput && this.$refs.aWhoInput.value.trim() !== '') {
					      data.aWho = this.$refs.aWhoInput.value.trim();
					    }
					    for (let i = 0; i < this.questionsWhoBoxes.length; i++) {
					      const qInput = this.$refs.qWhoInput[i];
					      const aInput = this.$refs.aWhoInput[i];
					      if (qInput && qInput.value.trim() !== '') {
					        data[`qWho${i}`] = qInput.value.trim();
					      }
					      if (aInput && aInput.value.trim() !== '') {
					        data[`aWho${i}`] = aInput.value.trim();
					      }
					    }
			//获取How部分的非空输入框的内容
			    if (this.$refs.qHowInput && this.$refs.qHowInput.value.trim() !== '') {
			      data.qHow = this.$refs.qHowInput.value.trim();
			    }
			    if (this.$refs.aHowInput && this.$refs.aHowInput.value.trim() !== '') {
			      data.aHow = this.$refs.aHowInput.value.trim();
			    }
			    for (let i = 0; i < this.questionsHowBoxes.length; i++) {
			      const qInput = this.$refs.qHowInput[i];
			      const aInput = this.$refs.aHowInput[i];
			      if (qInput && qInput.value.trim() !== '') {
			        data[`qHow${i}`] = qInput.value.trim();
			      }
			      if (aInput && aInput.value.trim() !== '') {
			        data[`aHow${i}`] = aInput.value.trim();
			      }
			    }
		 const jsonData = JSON.stringify(data);
		 console.log(jsonData)
		 const openid = wx.getStorageSync('openid')
		 var publicValue
		 if (this.checkboxValue.includes("cb")) {
		    publicValue=1
		 } else {
		 	publicValue=0
		     }
		 let noteData = {
		   openid:this.openid,
		   title: this.titleValue,
		   selectedTags: this.selectedTags,
		   data:jsonData,
		   publicValue:this.publicValue,
		 }; 
         uni.request({
           url: '后端',
           method: 'POST',
           data: noteData,
           success: function (res) {
             console.log(res);
           }
         });
    }, */
	QuestionsWhat(){
		this.questionsWhatBoxes.push({});
	},
	QuestionsWhere(){
		this.questionsWhereBoxes.push({});
	},
	QuestionsWhen(){
		this.questionsWhenBoxes.push({});
	},
	QuestionsWhy(){
		this.questionsWhyBoxes.push({});
	},
	QuestionsWho(){
		this.questionsWhoBoxes.push({});
	},
	QuestionsHow(){
		this.questionsHowBoxes.push({});
	},
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
	   				/* console.log('当前模式：' + e.type + ',状态：' + e.show); */
	   			},
	   toggle(type) {
	   				this.type = type
	   				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
	   				this.$refs.popup.open(type)
	   			},
  },
};
</script>

<style>
	.container{
		color:#EBE645;
		background-image: linear-gradient(to top, #49549a, #454b92, #414289, #3e3981, #3a3078, #362d73, #33296f, #2f266a, #2b2769, #262867, #222866, #1e2964);
	}
		
		.titleF{
		display: inline-block;
		font-size: 35px;
	}
	.titleS{
		font-size:30px;
	}
	.qWhat{
		margin-bottom: 15rpx;
		height: 35px;
		color: #96BC00;
		font-size: 25px;
		}
	.aWhat{
		margin-bottom: 15rpx;
		height: 35px;
		color: #F2FEDC;
		font-size:25px;
	}
	.qWhere{
		margin-bottom: 15rpx;
		height: 35px;
			color: #96BC00;
			font-size: 25px;
			}
	.aWhere{
		margin-bottom: 15rpx;
		height: 35px;
			color: #F2FEDC;
			font-size:25px;
		}
	.qWhen{
		margin-bottom: 15rpx;
		height: 35px;
			color: #96BC00;
			font-size: 25px;
			}
	.aWhen{
		margin-bottom: 15rpx;
		height: 35px;
			color: #F2FEDC;
			font-size:25px;
		}
	.qWhy{
		margin-bottom: 15rpx;
		height: 35px;
			color: #96BC00;
			font-size: 25px;
			}
	.aWhy{
		margin-bottom: 15rpx;
		height: 35px;
			color: #F2FEDC;
			font-size:25px;
		}
	.qWho{
		margin-bottom: 15rpx;
		height: 35px;
		color:#96BC00;
		font-size: 25px;
		}
	.aWho{
		margin-bottom: 15rpx;
		height: 35px;
		color: #F2FEDC;
		font-size:25px;
	}
	.qHow{
		margin-bottom: 15rpx;
		height: 35px;
		color: #96BC00;
		font-size: 25px;
		}
	.aHow{
		margin-bottom: 15rpx;
		height: 35px;
		color: #F2FEDC;
		font-size:25px;
	}
.questionIcon{
	display: inline-block;
	padding: 10px 10px;
	width: 35px;
	height: 35px;
	cursor: pointer;
	font-size: 35px;
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
				/* border: 2px solid #000; */
				cursor: pointer;
				font-weight: bold;
				font-size: 14px;
				background-color: #DAF5FF;
				color:#146C94;
			  }
			
			.tagButton-filled {
				background-color: #AE83CE;
				/* background-color: #0000003a; */
				color: #EBE645;
			  }
	.save-button{
		height: auto;
		 background-color: #E6AB17; /* 设置背景颜色为红色 */
		    color:#FFF9EA; /* 设置字体颜色为白色 */
			font-size: 25px;
			font-weight: bold;
	}
	.checkbox{
		margin-top: 25rpx;
		margin-bottom: 25rpx;
	}
</style>
