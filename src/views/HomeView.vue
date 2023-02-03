<template>
  <main>
    <div id="main-page">
      <h1 class="tagline">
        <span class="accent">doto-list</span>
      </h1>
      <p class="actions">
        <router-link class="get-started" :to="{ name: 'list', }">
          快速开始
          <Position class="right-icon"/>
        </router-link>
      </p>
      <div class="image">
        <img src="@/assets/images/theme-index-blue.png" alt="theme" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { Right, Position } from '@element-plus/icons-vue';

</script>

<style scoped lang="less">
@--vt-c-green : #409eff;

#main-page {
  .tagline {
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    margin-top: 5%;

    .accent {
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .actions {
    text-align: center;
    margin-top: 3%;

    .get-started {
      font-size: 16px;
      display: inline-block;
      border-radius: 8px;
      transition: background-color .5s, color .5s;
      position: relative;
      font-weight: 600;
      background-color: @--vt-c-green;
      color: #fff;
      margin-right: 18px;
      padding: 8px 1em;
      text-decoration: none;
    }

    .get-started:hover {
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      transition-duration: .2s;
      .right-icon{
        transform: translate(2px);
      }
    }

    .right-icon {
      width: 1em;
      height: 1em;
      font-size: 15px;
      display: inline;
      position: relative;
      margin-left: 2px;
      vertical-align: middle;
      transition: transform .2s;
    }
  }

  .image {
    width: 50vw;
    margin: 20px auto;
    position: relative;

    img {
      height: 50vh;
      width: 50vw;
    }
  }
}
</style>
