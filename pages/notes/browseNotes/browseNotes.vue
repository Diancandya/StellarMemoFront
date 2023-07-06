<template>
  <div class="note-container">
    <!-- 笔记详情的展示 -->
    <h2>{{ note.title }}</h2>
	<div class="note-tags">
		<span v-for="(tag,tagIndex) in note.tags" :key="tagIndex" class="tag">{{tag}}</span>
	</div>
	<p class="note-text">{{note.preview}}</p>
	<div class="note-content">
		<div class="note-image">
			<img :src="note.image" alt="" mode="aspectFit" style="float: left;">
		</div>
		<div>\n</div>
	</div>
	<div class="note-icons">
		<br>
		<UniIcons 
		  :type="note.starFilled ? 'star-filled' : 'star'"
		  size="25" 
          @click="toggleStarFilled(index)"
		  :color="note.starColor"
		  ></UniIcons>
		<br>
	</div>
  </div>
</template>

<script>
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue';
export default {
  data() {
    return {
      note: {
		  title: '',
		  tags: [],
		  preview: '',
		  image: '',
	  } // 接收笔记信息
    };
  },
  onLoad(options) {
  	const { title, tags, preview } = options;
	console.log(title + tags + preview)
	
	this.note.title = title;
	this.note.tags = tags;
	this.note.preview = preview;
	// this.note.image = image;
  }
 //  methods() {
	// //点击star
	// toggleStarFilled(index) {
	//     this.note.starFilled = !this.note.starFilled;
	//   	this.note.starColor = this.note.starFilled ? '#F5DEB3' : '';
	// }
 //  },
  // mounted() {
	 //  const noteString = decodeURIComponent(this.$route.query.note);
	 //  this.note = JSON.parse(noteString);
  // }
  // created() {
  //   const noteString = this.$route.query.note;
  //   this.note = JSON.parse(noteString);
  // },
  // components: {
	 //  UniIcons
  // },
};
</script>

<style>

</style>
