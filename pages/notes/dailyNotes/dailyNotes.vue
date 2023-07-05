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
				<editor id="editor"  class="ql-container" placeholder="输入内容..." showImgSize showImgToolbar showImgResize
				 @statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady" @blur="getContents">
				</editor>
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
			  return new Promise((resolve, reject) => {
			    this.editorCtx.getContents({
			      success(res) {
			        resolve(res.html);
			      },
			      fail(err) {
			        reject(err);
			      }
			    });
			  });
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
			      const tempFilePath = res.tempFilePaths[0];
			      uni.getImageInfo({
			        src: tempFilePath,
			        success: (infoRes) => {
			          const fs = uni.getFileSystemManager();
			          fs.readFile({
			            filePath: tempFilePath,
			            encoding: 'base64',
			            success: (dataRes) => {
			              const base64Data = dataRes.data;
			              this.editorCtx.insertImage({
			                src: `data:${infoRes.type};base64,${base64Data}`,
			                alt: '图像',
			                success: function() {
			                  console.log('insert image success')
			                }
			              })
			            },
			            fail: (err) => {
			              console.error('read file failed', err);
			            }
			          })
			        },
			        fail: (err) => {
			          console.error('get image info failed', err);
			        }
			      });
			    }
			  })
			},
			async saveNotes(){
				const noteData = {
				  title: this.titleValue,
				  content: await this.getContents(),
				};
				uni.request({
				  url: 'http://localhost:8083/note/create', // 后端接收接口的 URL
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
	},
	}
</script>

<style>
	@import "./cs.css";
	.wrapper {
		padding: 5px;
	}
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
</style>
