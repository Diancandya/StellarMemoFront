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
						<uni-tag v-for="(tag,index) in tags" :key="index" :type="tag.type" @click="clickTag(index)" text="tag.label"></uni-tag>
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
		titilevalue:'',
      tags: [
        { label: 'Tag 1', type: 'primary', isClicked: false },
        { label: 'Tag 2', type: 'primary', isClicked: false },
        { label: 'Tag 3', type: 'primary', isClicked: false },
        { label: 'Tag 4', type: 'primary', isClicked: false },
        { label: 'Tag 5', type: 'primary', isClicked: false }
      ]
    };
  },
  methods: {
    clickTag(index) {
	  this.tags[index].isClicked = !this.tags[index].isClicked;
	  this.tags[index].type = this.tags[index].isClicked ? "success" : "primary";
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
	/**/
</style>