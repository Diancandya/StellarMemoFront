<template>
	<view class="container">
		<view class="page-body">
			<view class='wrapper'>
				<view class='toolbar' @tap="format">
					<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold"></view>
					<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti" data-name="italic"></view>
					<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian" data-name="underline"></view>
					<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian" data-name="strike"></view>
					<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi" data-name="align"
					 data-value="left"></view>
					<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi" data-name="align"
					 data-value="center"></view>
					<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi" data-name="align"
					 data-value="right"></view>
					<view :class="formats.align === 'justify' ? 'ql-active' : ''" class="iconfont icon-zuoyouduiqi" data-name="align"
					 data-value="justify"></view>
					<view :class="formats.lineHeight ? 'ql-active' : ''" class="iconfont icon-line-height" data-name="lineHeight"
					 data-value="2"></view>
					<view :class="formats.letterSpacing ? 'ql-active' : ''" class="iconfont icon-Character-Spacing" data-name="letterSpacing"
					 data-value="2em"></view>
					<view :class="formats.marginTop ? 'ql-active' : ''" class="iconfont icon-722bianjiqi_duanqianju" data-name="marginTop"
					 data-value="20px"></view>
					<view :class="formats.previewarginBottom ? 'ql-active' : ''" class="iconfont icon-723bianjiqi_duanhouju"
					 data-name="marginBottom" data-value="20px"></view>
					<view class="iconfont icon-clearedformat" @tap="removeFormat"></view>
					<view :class="formats.fontFamily ? 'ql-active' : ''" class="iconfont icon-font" data-name="fontFamily" data-value="Pacifico"></view>
					<view :class="formats.fontSize === '24px' ? 'ql-active' : ''" class="iconfont icon-fontsize" data-name="fontSize"
					 data-value="24px"></view>

					<view :class="formats.color === '#0000ff' ? 'ql-active' : ''" class="iconfont icon-text_color" data-name="color"
					 data-value="#0000ff"></view>
					<view :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''" class="iconfont icon-fontbgcolor"
					 data-name="backgroundColor" data-value="#00ff00"></view>

					<view class="iconfont icon-date" @tap="insertDate"></view>
					<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
					<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie" data-name="list"
					 data-value="ordered"></view>
					<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie" data-name="list"
					 data-value="bullet"></view>
					<view class="iconfont icon-undo" @tap="undo"></view>
					<view class="iconfont icon-redo" @tap="redo"></view>

					<view class="iconfont icon-outdent" data-name="indent" data-value="-1"></view>
					<view class="iconfont icon-indent" data-name="indent" data-value="+1"></view>
					<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
					<view class="iconfont icon-charutupian" @tap="insertImage"></view>
					<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1" data-name="header"
					 :data-value="1"></view>
					<view :class="formats.script === 'sub' ? 'ql-active' : ''" class="iconfont icon-zitixiabiao" data-name="script"
					 data-value="sub"></view>
					<view :class="formats.script === 'super' ? 'ql-active' : ''" class="iconfont icon-zitishangbiao" data-name="script"
					 data-value="super"></view>
					<view class="iconfont icon-shanchu" @tap="clear"></view>
					<view :class="formats.direction === 'rtl' ? 'ql-active' : ''" class="iconfont icon-direction-rtl" data-name="direction"
					 data-value="rtl"></view>
					<view class="save" >
						<image class="save" src="../../../static/save.png" @tap="saveNotes" />
					</view>

				</view>
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
							@click="toggle('top')"
							>
							</uni-icons>
						</uni-col>
					</uni-row>

				
				</view>
				<editor id="editor"  class="ql-container" placeholder="输入内容..." showImgSize showImgToolbar showImgResize
				 @statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady" @blur="getContents">
				</editor>
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
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
                readOnly: false,
				formats: {},
				timer:null,
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
				checkboxValue: [] ,
			}
		},
		props:["editorDetail"],
		mounted(){
					this.onEditorReady()
					// 将数据渲染到富文本内
					this.timer = setInterval(()=>{
						if(this.editorDetail){
							clearInterval(this.timer)
							this.editorCtx.setContents({
								html:this.editorDetail,
								success(res) {
								}
							})
						}
					},100)
				},
		methods: {
			// 失去焦点时，获取富文本的内容
			getContents() {
				let _this = this
				this.editorCtx.getContents({
					success(res) {
						_this.$emit('getContents', res.html)
						}
				})
			},
			change(e) {
							console.log('当前模式：' + e.type + ',状态：' + e.show);
						},
			toggle(type) {
							this.type = type
							// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
							this.$refs.popup.open(type)
						},
			readOnlyChange() {
				this.readOnly = !this.readOnly
			},
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
			},
			// onEditorReady(){    
			//     uni.createSelectorQuery().select('#editor').context((res) => {    
			//     this.editorCtx = res.context    
			//      this.editorCtx.setContents({    
			//                 html:this.EditGoodsDetail.content    //this.EditGoodsDetail.content为赋值内容。    
			//         })    
			//     }).exec()    
			// }
			undo() {
				this.editorCtx.undo()
			},
			redo() {
				this.editorCtx.redo()
			},
			format(e) {
				let {
					name,
					value
				} = e.target.dataset
				if (!name) return
				// console.log('format', name, value)
				this.editorCtx.format(name, value)
			},
			onStatusChange(e) {
				const formats = e.detail
				this.formats = formats
			},
			insertDivider() {
				this.editorCtx.insertDivider({
					success: function() {
						console.log('insert divider success')
					}
				})
			},
			clear() {
				this.editorCtx.clear({
					success: function(res) {
						console.log("clear success")
					}
				})
			},
			removeFormat() {
				this.editorCtx.removeFormat()
			},
			insertDate() {
				const date = new Date()
				const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
				this.editorCtx.insertText({
					text: formatDate
				})
			},
			insertImage() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.editorCtx.insertImage({
							src: res.tempFilePaths[0],
							alt: '图像',
							success: function() {
								console.log('insert image success')
							}
						})
					}
				})
			},
			saveNotes(){
				var publicValue
						 if (this.checkboxValue.includes("cb")) {
						    publicValue=1
						 } else {
						 	publicValue=0
						     }

				const headers={
					'openid':wx.getStorageSync('openid')
				}
				const noteData = {
				  headers:headers,
				  title: this.titleValue,
				  selectedTags: this.selectedTags,
				  body: this.getContents(),
				 publicValue:this.publicValue,
				};
				uni.request({
				  url: 'http://localhost:8083/user/register', // 后端接收接口的 URL
				  method: 'POST',
				  data: noteData,
				  success: (res) => {
				    // 处理后端响应
				    console.log(res.data);
				  },
				  fail: (err) => {
				    // 处理请求失败情况
				    console.error(err);
				  }
				});		
		},
		onLoad() {
			uni.loadFontFace({
				family: 'Pacifico',
				source: 'url("./editor-icon.ttf")'
			})
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
	},
	}
</script>

<style>
	@import "./cs.css";
	.wrapper {
		padding: 5px;
	}
	/* .button {
			@include flex;
			align-items: center;
			justify-content: center;
			flex: 1;
			height: 35px;
			margin: 0 5px;
			border-radius: 5px;
		} */

	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 20px;
	}
	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}
	.save{
		display: inline-block;
		padding: 4px 4px;
		width: 18px;
		height: 18px;
		cursor: pointer;
		font-size: 14px;
	}
	.noteTitle{
		height:35px;
		font-size: 25px;
	}
	.ql-container {
		box-sizing: border-box;
		padding: 12px 15px;
		width: 100%;
		min-height: 30vh;
		height: auto;
		background: #fff;
		margin-top: 20px;
		font-size: 16px;
		line-height: 1.5;
	}
	.ql-active {
		color: #06c;
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
