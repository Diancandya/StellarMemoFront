<template>
  <view class="container">
    <view class="row">
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
    </view>
    <button class="save-button" @click="save">保存</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
	  Simage:'/static/SWOT/S.png',
	  Wimage:'/static/SWOT/W.png',
	  Oimage:'/static/SWOT/O.png',
	  Timage:'/static/SWOT/T.png',
      textS: '' ,
	  textW: '' ,
	  textO: '' ,
	  textT: ''
    };
  },
  methods: {
    save() {
      // 发送POST请求给后端，将textarea的内容发送过去
      uni.request({
        url: '后端接口地址',
        method: 'POST',
        data: {
          content: this.text
        },
        success: (res) => {
          console.log('保存成功');
        },
        fail: (err) => {
          console.error('保存失败', err);
        }
      });
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
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
  margin-top: 10px;
}
</style>
