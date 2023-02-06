<template>
  <div class="editor">
    <el-container height="600px">
      <el-header>
        <img src="@/assets/images/index-head-bg.jpg" alt="" />
        <div class="editor-content">
          <div class="editor-content-title">开源的</div>
          <div class="editor-content-title">在线简历编辑工具</div>

          <div class="editor-content-btn">
            <el-button type="primary"
              ><el-icon>
                <Setting /> </el-icon
              >导入配置</el-button
            >
            <el-button class="github">
              <el-icon class="el-icon--right">
                <Promotion />
              </el-icon>
              Github
            </el-button>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="editor-main">
          <div class="editor-main-title">简历模版</div>
          <div class="editor-main-template">
            <div v-for="item in templates" class="editor-main-card" key="item.key">
                <TemplateCard :value="item"/>
            </div>
          </div>
          <div class="editor-tip">更多模版尽情期待...</div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import TemplateCard from "@/components/templateCard/index.vue";
import { templates } from '@/templates';
const test = ["a", "b", "c", "d"];
</script>

<style scoped lang="less">
@btn-blue: #409eff;
.editor {
  width: 100%;
  background-color: rgba(#000000, 0.06);

  :deep(.el-header) {
    height: 50vh;
    position: relative;
    overflow: hidden;
    padding: 0;
  }

  :deep(.el-main){
    padding: 0;
  }

  img {
    width: 100%;
    display: block;
  }

  &-content {
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    &-title {
      font-size: 72px;
    }

    &-btn {
      padding-top: 24px;
      display: flex;
      gap: 16px;

      :deep(.el-button) {
        padding: 24px 50px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      :deep(.el-icon) {
        margin-right: 8px;
      }
      .github {
        background-color: transparent;
        color: #fff;
      }
      .github:hover {
        border: 1px solid @btn-blue;
      }
    }
  }
  &-main {
    max-width: 1600px;
    margin: 0px auto;
    padding: 54px 16px;
    &-title {
      padding-bottom: 18px;
      font-size: 30px;
    }
    &-template {
      display: flex;
      gap: 38px;
      width: 100%;
    }
    &-card{
        width: 100%;
        padding: 8px;
        background: #fff;
        transition: all 0.3s;
    }
  }
  &-tip{
    padding-top: 24px;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
