<template>
    <div id="task-panel">
        <div class="title">
            <div class="main-title">All Tasks</div>
            <div class="subtitle">Remove this Event</div>
        </div>
        <div class="list-group">
            <div ref="testQBC">123</div>
            <ListVue ref="todoList" state="todoList" @update-dialog-state="updateDialog" />
            <ListVue ref="inProgress" state="inProgress" @update-dialog-state="updateDialog" />
            <ListVue ref="completed" state="completed" @update-dialog-state="updateDialog" />
        </div>
        <div class="dialog">
            <el-dialog v-model="dialogContentVisible" title="please input content">
                <el-input v-model="listData.title" type="test" placeholder="input title" />
                <el-input v-model="listData.content" :autosize="{ minRows: 10, maxRows: 15 }" type="textarea"
                    placeholder="input something" />
                <div class="dialog-btn">
                    <el-button type="primary" @click="saveContent()">保 存</el-button>
                    <el-button @click="dialogContentVisible = false">取 消</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import ListVue from '../../components/List.vue';
import { useListStore } from '@/stores/list.js';
import { getUuiD } from '@/utils/index.js';
import { ElMessage } from 'element-plus';
import { useRoute } from 'vue-router';
import { localLoading } from "@/hooks/TaskList";

const store = useListStore();
const route = useRoute();
const todoList = ref();
const inProgress = ref();
const completed = ref();
const dialogContentVisible = ref(false);
const listData = reactive({
    id: '',
    title: '',
    content: '',
});
let listType = null;
let listState = null;
const testQBC = ref();

const updateDialog = (state, item) => {
    listType = state;
    dialogContentVisible.value = true;
    if (item?.id) {
        listData.id = item.id;
        listData.title = item.title;
        listData.content = item.content;
        listState = 'update';
    } else {
        listData.id = getUuiD(5);
        listData.title = null;
        listData.content = null;
        listState = 'add';
    }
}

const saveContent = () => {
    const titleId = route.query.id;
    const { id, title, content } = listData;
    const newListData = {
        id: id,
        title: title,
        content: content,
    }
    if (listData.title) {
        if (listState === 'update') {
            store.updateListContent(listType, titleId, newListData);
            dialogContentVisible.value = false;
        } else {
            store.addListContent(listType, titleId, newListData);
            dialogContentVisible.value = false;
        }
    } else {
        ElMessage({
            type: 'warning',
            message: 'Please input title',
        })
    }
}

onMounted(() => {
    // const todoListLoading = localLoading(todoList.value.dotoListDom);
    // const inProgressLoading = localLoading(inProgress.value.inProgressDom);
    // const completedLoading = localLoading(completed.value.completedDom);
    setTimeout(() => {
        // todoListLoading.close();
        // inProgressLoading.close();
        // completedLoading.close();
    }, 1000)
})

</script>

<style scoped lang='less'>
// @screenheight
#task-panel {
    margin-top: 2%;
    padding-bottom: 100px;
    padding-bottom: 3%;

    .title {
        display: flex;

        .main-title {
            font-size: 2rem;
            margin-left: 6%;
            font-weight: bold;
        }

        .subtitle {
            margin-left: 2%;
            border: 2px solid red;
            border-radius: 10px;
            height: 2.5rem;
            line-height: 2.1rem;
            margin-top: 0.4rem;
            width: 9rem;
            text-align: center;
            font-weight: bold;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
        }
    }

    .list-group {
        display: flex;
        justify-content: space-evenly;
        align-items: start;
        margin-top: 2%;

        .title {
            font-weight: bold;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
        }
    }

    .dialog {
        :deep(.el-dialog) {
            border-radius: 10px;
            width: calc(30% - 10px);

            .el-dialog__body {
                padding-top: 1%;
            }

            .el-input {
                margin-bottom: 3%;
            }
        }

        .dialog-btn {
            display: flex;
            justify-content: flex-end;
            margin-top: 3%;
        }
    }
}
</style>