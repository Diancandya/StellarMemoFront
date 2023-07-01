<template>
  <view class="container">
    <!-- 这里是页面的内容 -->

    <view class="bottom">
      <image class="bottom-image" src="/static/plus.png" @click="redirectToNotesPage" />
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    redirectToNotesPage() {
      // 在这里执行跳转到另一个页面的操作
      uni.navigateTo({
        url: '../notes/selectCategory/selectCategory'
      });
    }
  }
}
</script>

<style>
.container {
  /* 这里是页面的样式 */
}

.bottom {
  position: fixed;
  bottom: 3%;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-image {
  width: 40px;
  height: 40px;
}
</style>