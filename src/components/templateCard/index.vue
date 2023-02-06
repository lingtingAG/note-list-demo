<template>
  <div class="container">
    <div class="content">
      <div class="poster">
        <img :src="props.value.poster" alt="" />
      </div>
      <div class="mask">
        <div class="name">{{ props.value.name }}</div>
        <div class="tags">
          <el-tag v-for="tags in props.value.tags" type="info">{{ tags }}</el-tag>
        </div>
        <el-button type="primary">使用该模版</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps({
  value: Object || String
})
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 0;
  padding-bottom: 150%;
  position: relative;

  .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .poster {
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .mask {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background: rgba(#fff, 0.96);
      padding: 8px;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;

      >*+* {
        margin-top: 12px;
      }
      :deep(.el-tag){
        margin-right: 10px;
        color: #000;
        border:1px solid #ddd;
      }
      .name {
        font-size: 16px;
      }
    }
  }
}
</style>