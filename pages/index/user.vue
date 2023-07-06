<template>
  <div class="community">
    <view class="background">
		<!-- 顶部搜索栏 -->
		<!-- <div class="search-bar">
		  <input type="text" v-model="keyword" placeholder="搜索笔记">
		  <button class="search-button" @click="searchNotes">查询</button>




		</div> -->
		<!-- 用户信息部分 -->
		<view class="content">
			<image class="avatar" :src="avatarUrl"></image>
					
				<text class="nickName">{{nickName}}</text>

		</view>
		
		<!-- 主体部分，可滑动查看他人笔记 -->
		<div class="note-list-container">
		  <div class="note-list">
		    <!-- 这里填充要展示的笔记内容 -->
			<ul>
			    <li v-for="(note, index) in notes" :key="index">
			      <div class="note-item">
			        <h3 class="note-title">{{ note.title }}</h3>
			        <div class="note-tags">
			          <span v-for="(tag, tagIndex) in note.tags" :key="tagIndex" class="tag">{{ tag }}</span>
			        </div>
					<p class="note-preview">{{ note.preview }}</p>
			        <div class="note-content">
			          <div class="note-image">
			            <img :src="note.image" alt="" mode="aspectFit" style="float: left;">
			          </div>
					  <div>\n</div>
			        </div>
					<div class="note-icons">
						<br>
						<br>
					    <UniIcons 
						  :type="notes[index].starFilled ? 'star-filled' : 'star'"
						  size="25" 
                          @click="toggleStarFilled(index)"
						  :color="notes[index].starColor"
						  ></UniIcons>
					</div>
			      </div>
			    </li>
			  </ul>
			
		  </div>
		</div>
		
		<!-- 底部导航栏 -->
		<uni-tab-bar :list="tabBarList" @click="handleTabClick"></uni-tab-bar>
	</view>
  </div>
</template>

<script>
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue';
export default {
  data() {
    return {
		avatarUrl:'',
		nickName:'',
		
	 /* keyword:'', */
      activeTab: 'community',
      tabBarList: [],
	  notes: [
	    { 
		  title: '原神日记', 
	      tags: ['开放世界', '欧皇'], 
	      preview: '受不了了好想玩原神，感觉一天不玩原神浑身好像有蚂蚁在爬，玩不到原神的每一秒都想打爆这个世界。玩原神的第一百零八天，十连三金出了地', 
	      image: '../../static/c1.png',
	      starFilled: false,
	      starColor:'',//处理star的点击
	    },  
	    { 
		  title: '笔记2', 
	      tags: ['标签3', '标签4'], 
	      preview: '这是笔记2的预览文字内容。', 
	      image: 'https://picsum.photos/200/300',
	      starFilled: false,
	      starColor:'',//处理star的点击
	    },
	    { 
	      title: '笔记3', 
	      tags: ['标签5', '标签6'], 
	      preview: '这是笔记3的预览文字内容。', 
	      image: 'https://picsum.photos/200/300',
	      starFilled: false,
	      starColor:'',//处理star的点击
	    },
	    { 
	      title: '笔记4', 
	      tags: ['标签7', '标签8'], 
	      preview: '这是笔记4的预览文字内容。', 
	      image: 'https://picsum.photos/200/300',
	      starFilled: false,
	      starColor:'',//处理star的点击
	    },
	    { 
	      title: '笔记5', 
	      tags: ['标签9', '标签10'], 
	      preview: '这是笔记5的预览文字内容。', 
	      image: 'https://picsum.photos/200/300',
	      starFilled: false,
	      starColor:'',//处理star的点击
	    }
	  ]
    }
  },
  onLoad(){
	  const userInfo=wx.getStorageSync('userInfo');
		  this.avatarUrl = userInfo.avatarUrl;
		  this.nickName = userInfo.nickName;
  },






  methods: {
	//按下enter搜索
	/* searchNotes() {
		//获取搜索栏输入值
		const keyword = this.keyword;
		console.log(keyword);
	}, */
	//点击star
	toggleStarFilled(index) {
	    this.notes[index].starFilled = !this.notes[index].starFilled;
		this.notes[index].starColor = this.notes[index].starFilled ? '#F5DEB3' : '';
	}
  },
  components: {
	  UniIcons
  },
}
</script>

<style lang="scss">
.community {
  height: 100vh;
  
  .background {
    height: 100vh;
    position: relative;
    background: linear-gradient(to bottom, #3D3170, #7B68EE);
  }
  
  
  /* .search-bar {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
	z-index: 100; */
    
    /* .input {
      width: 80%;
      height: 30px;
      background-color: #f5f5f5;
      border-radius: 15px;
      padding: 0 10px;
      box-sizing: border-box;
      border: thin solid;
      outline: none;
    } */
	
	/* .search-button{
	  width: 20%; /、 调整宽度以给按钮留出空间 
	  font-size: 100%;
	  height: 30px;
	  margin-left: 5px; // 添加边距以在输入框和按钮之间创建间隔 
      background-color: #8C7DEE;
      color: #fff;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      outline: none;
      display: flex; // 使用弹性盒子布局 
      justify-content: center; // 水平居中 
      align-items: center; // 垂直居中 
	} 
  }*/
  
  .note-list-container {
	  max-width: 100%;
      height: 500px; 
      overflow-y: scroll; /* 允许垂直滚动 */
	  overflow-x: hidden;
    }
  
  .note-list {
	max-width: 100%;
    height: calc(100vh - 30px);
    overflow-y: auto;
	overflow-x: hidden;
	  
    /* 添加样式，用于展示他人笔记 */
  }
  
  .note-item {
	  max-width: 100%;
      display: flex;
      flex-direction: column;
      padding: 10px;
	  position: relative;
      border-bottom: 3px solid #ddd;
	  z-index: 100;
    }
	.note-title {
	  color: #ddd;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    .note-tags {
      margin-bottom: 5px;
    }
  
    .tag {
      display: inline-block;
      background-color: #f2f2f2;
      color: #666;
      font-size: 12px;
      padding: 2px 5px;
	  border: thin dashed;
      border-radius: 3px;
      margin-right: 5px;
    }
  
    .note-content {
      display: flex;
      align-items: flex-start;
	  justify-content: flex-start;
      max-height: calc(100% - 150px);
    }
  
    .note-preview {
	  color: #F7F7FF;
      font-size: 14px;
      line-height: 1.5;
      max-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  
    .note-image {
      float: left;
	  max-height: 100%;
	  max-width: 100%;
      margin-left: 10px;
    }
	
	.note-icons {
	  height: 40;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	}
}
</style>
