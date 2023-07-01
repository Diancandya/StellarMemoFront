<template>
  <view class="container">
    <view class="analysis-model">
		<view class="container">
		  <view class="titleF" >What</view>
		  <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWhat" />
		</view>
		<input class="qWhat" type="text" placeholder="Question" />
		<input class="aWhat" type="text" placeholder="Answer" />
		<view v-for="(questionsWhatBox, qWhatIndex) in questionsWhatBoxes" :key="qWhatindex" >	
			<input class="qWhat" type="text" placeholder="Question" />
			<input class="aWhat" type="text" placeholder="Answer" />
		</view>
		
		<view class="container">
		  <view class="titleF" >Where</view>
		  <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWhere" />
		</view>
		<input class="qWhere" type="text" placeholder="Question" />
		<input class="aWhere" type="text" placeholder="Answer" />
		<view v-for="(questionsWhereBox, qWhereIndex) in questionsWhereBoxes" :key="qWhereindex">	
			<input class="qWhere" type="text" placeholder="Question" />
			<input class="aWhere" type="text" placeholder="Answer" />
		</view>
		
		<view class="container">
		  <view class="titleF" >When</view>
		  <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWhen" />
		</view>
		<input class="qWhen" type="text" placeholder="Question" />
		<input class="aWhen" type="text" placeholder="Answer" />
		<view v-for="(questionsWhenBox, qWhenIndex) in questionsWhenBoxes" :key="qWhenindex">	
			<input class="qWhen" type="text" placeholder="Question" />
			<input class="aWhen" type="text" placeholder="Answer" />
		</view>
		
		<view class="container">
		  <view class="titleF" >Why</view>
		  <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWhy" />
		</view>
		<input class="qWhy" type="text" placeholder="Question" />
		<input class="aWhy" type="text" placeholder="Answer" />
		<view v-for="(questionsWhyBox, qWhyIndex) in questionsWhyBoxes" :key="qWhyindex">	
			<input class="qWhy" type="text" placeholder="Question" />
			<input class="aWhy" type="text" placeholder="Answer" />
		</view>
		
		<view class="container">
		  <view class="titleF" >Who</view>
		  <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsWho" />
		</view>
		<input class="qWho" type="text" placeholder="Question" />
		<input class="aWho" type="text" placeholder="Answer" />
		<view v-for="(questionsWhoBox, qWhoIndex) in questionsWhoBoxes" :key="qWhoindex">	
			<input class="qWho" type="text" placeholder="Question" />
			<input class="aWho" type="text" placeholder="Answer" />
		</view>
		
		<view class="container">
		  <view class="titleF" >How</view>
		  <image class="questionIcon" src="../../../../static/QA.png" @click="QuestionsHow" />
		</view>
		<input class="qHow" type="text" placeholder="Question" />
		<input class="aHow" type="text" placeholder="Answer" />
		<view v-for="(questionsHowBox, qHowIndex) in questionsHowBoxes" :key="qHowindex">	
			<input class="qHow" type="text" placeholder="Question" />
			<input class="aHow" type="text" placeholder="Answer" />
		</view>
		
      </view>
      <button @click="saveData" class="save-button">保存</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    saveData() {
     let data = {};
         let inputs = document.querySelectorAll('input');
         inputs.forEach(input => {
           if (input.value) {
             data[input.className] = input.value;
           }
         });
         uni.request({
           url: '后端',
           method: 'POST',
           data: data,
           success: function (res) {
             console.log(res);
           }
         });
    },
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
  },
};
</script>

<style>
	.titleF{
		display: inline-block;
		font-size: 35px;
	}
	.titleS{
		font-size:30px;
	}
	.qWhat{
		color: #c53d43;
		font-size: 25px;
		}
	.aWhat{
		color: #1e50a2;
		font-size:25px;
	}
	.qWhere{
			color: #c53d43;
			font-size: 25px;
			}
	.aWhere{
			color: #1e50a2;
			font-size:25px;
		}
	.qWhen{
			color: #c53d43;
			font-size: 25px;
			}
	.aWhen{
			color: #1e50a2;
			font-size:25px;
		}
	.qWhy{
			color: #c53d43;
			font-size: 25px;
			}
	.aWhy{
			color: #1e50a2;
			font-size:25px;
		}
	.qWho{
		color: #c53d43;
		font-size: 25px;
		}
	.aWho{
		color: #1e50a2;
		font-size:25px;
	}
	.qHow{
		color: #c53d43;
		font-size: 25px;
		}
	.aHow{
		color: #1e50a2;
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
</style>
