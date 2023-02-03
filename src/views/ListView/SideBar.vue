<template>
    <div id="side-bar">
        <h1 class="title" @click="router.push({name: 'list'})">List of Use</h1>
        <button class="add-btn" @click="inputShow = true;">
            <Plus class="icon" />
        </button>
        <div class="project-name" v-for="(item, index) of themeArr" :key="index">
            <div class="name" @click="showTaskPanel(index)">{{item.title}}</div>
        </div>
        <div class="project-name">
            <input v-if="inputShow" ref="input" v-model="inputData" @keyup.enter.native="$event.target.blur()" @blur="addProject()"/>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue';
import { getUuiD } from '@/utils/index.js';
import { Plus } from '@element-plus/icons-vue';
import { useListStore } from '@/stores/list.js';
import { useRouter } from 'vue-router';

const store = useListStore();
const router = useRouter();
const inputShow = ref(false);
const inputData = ref(null);
const themeArr = store.theme;

const addProject = (name) => {
    if (!inputData.value) {
        inputData.value = '无标题';
    }
    store.addListTitle(getUuiD(5), inputData.value);
    inputData.value = null;
    inputShow.value = false;
}

const showTaskPanel = (id) => {
    router.push({
        name: 'list',
        query: {
            id: id,
        },
    })
}

</script>

<style scoped lang='less'>
#side-bar{
    .title{
        margin: 2vh 0;
        text-align: center;
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        cursor: pointer;
    }
    .add-btn{
        width: 85%;
        margin-left: 5%;
        height: 5vh;
        background-color: #ebf1f0;
        border-radius: 10px;
        border: 0;
        cursor: pointer;
        .icon{
            width: 1.3rem;
            height: 1.3rem;
        }
    }
    .project-name{
        input, .name{
            width: 85%;
            height: 5vh;
            margin: 2vh 10% 0 5%;
        }
        .name{
            text-align: center;
            background-color: rgb(216,112,73);
            color: #fff;
            border-radius: 10px;
            line-height: 5vh;
            font-size: 1rem;
            font-weight: bold;
            padding: 0 10%;
            text-overflow: ellipsis;
            overflow: hidden;
            cursor: pointer;
        }
        .name:hover{
            color: rgb(216,112,73);
            background-color: #ebf1f0;
        }
    }
}
</style>