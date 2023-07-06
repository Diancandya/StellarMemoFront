<template>
	<background>
		<uni-search-bar
		    @confirm="search"
		    v-model="keyword" 
		    @input="input" 
		    @cancel="cancel" 
		    @clear="clear"
		></uni-search-bar>
		<view class="container">
			<uni-section title="标签" type="line" padding>
				<view class="example-body">
					<view class="tag-view">
						<uni-tag v-for="(tag,index) in tags" :key="index" :type="tag.type" @click="clickTag(index)" :text="tag.label"></uni-tag>
					</view>
				</view>
			</uni-section>
		</view>
	</background>
</template>

<script>
export default {
  data() {
    return {
	  keyword: "",
	  chosenNumber: 0,
	  chosenTags: new Array(3),
      tags: [
        { label: '情感', type: 'primary', isClicked: false },
        { label: '摄影', type: 'primary', isClicked: false },
        { label: '搞笑', type: 'primary', isClicked: false },
        { label: '游戏', type: 'primary', isClicked: false },
        { label: '绘画', type: 'primary', isClicked: false },
		{ label: '运动', type: 'primary', isClicked: false },
		{ label: '旅行', type: 'primary', isClicked: false },
		{ label: '美食', type: 'primary', isClicked: false },
		{ label: '穿搭', type: 'primary', isClicked: false },
		{ label: '学习', type: 'primary', isClicked: false },
		{ label: '音乐', type: 'primary', isClicked: false },
		{ label: '护肤', type: 'primary', isClicked: false },
		{ label: '壁纸', type: 'primary', isClicked: false },
		{ label: '手工', type: 'primary', isClicked: false },
		{ label: '心理', type: 'primary', isClicked: false }
      ]
    };
  },
  methods: {
	search() {
		const keyword = this.keyword;
		console.log(keyword + ":");
		for (var i = 0; i < this.chosenTags.length; i++) {
			console.log(this.chosenTags[i]);
		}
	},
    clickTag(index) {
	  // this.tags[index].isClicked = !this.tags[index].isClicked;
	  if (this.tags[index].isClicked) {
	  	  this.tags[index].type = "primary";
		  const labelIndex = this.chosenTags.indexOf(this.tags[index].label);
          if (labelIndex !== -1) {
            this.chosenTags.splice(labelIndex, 1);
          }
		  this.chosenNumber--;
		  this.tags[index].isClicked = !this.tags[index].isClicked;
	  }
	  else if (!this.tags[index].isClicked && this.chosenNumber < 3) {
		  this.tags[index].type = "success";
		  this.chosenTags.push(this.tags[index].label);
		  this.chosenNumber++;
		  this.tags[index].isClicked = !this.tags[index].isClicked;
	  }
    },
	input() {
		
	},
	cancel() {
		
	},
	clear() {
		
	}
  }
};
</script>

<style>
	.tag-view {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: flex-start;
	  gap: 10px; /* 添加标签之间的间距，可以根据需要进行调整 */
	}
	
	.uni-tag {
	  margin-bottom: 10px; /* 添加标签下方的间距，可以根据需要进行调整 */
	}
</style>