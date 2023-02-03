<template>
    <div class="main">
        <div class="side-bar">
            <SideBarVue />
        </div>
        <div v-if="route.query.id" class="task-panel">
            <TaskPanelVue />
        </div>
        <div v-else>list首页</div>
    </div>
</template>
  
<script setup>
import SideBarVue from '@/views/ListView/SideBar.vue';
import TaskPanelVue from '@/views/ListView/ListContent.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped lang="less">
.main {
    display: flex;
    width: 100%;

    .side-bar {
        width: 18%;
        height: 99vh;
        border-right: 1px solid #ddd;
    }

    .task-panel {
        width: 82%;
        height: 99vh;
    }
}
</style>