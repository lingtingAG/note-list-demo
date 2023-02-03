<template>
    <div id="list" ref="dotoListDom">
        <div class="title">To do</div>
        <el-button class="add-btn" :icon="Plus" @click="addContent" />
        <draggable class="dragArea" :list="list" :group="{ name: 'content' }" item-key="id">
            <template #item="{ element }" :key="element.id">
                <div class="card">
                    <div class="list-title">
                        <List class="el-icon" style="color: #909399" />
                        <span class="element-title">{{ element.title }}</span>
                        <EditPen class="el-icon el-icon-edit" @click="updateContent(element)" />
                    </div>
                    <div class="list-content">
                        {{ element.content }}
                        <SemiSelect class="el-icon" @click="open(element)" />
                    </div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import draggable from "vuedraggable";
import { useListStore } from "@/stores/list.js";
import { messageBox } from "@/hooks/TaskList";
import { Plus } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const dotoListDom = ref();
const route = useRoute();
const store = useListStore();

const props = defineProps({
    state: String,
});
const list = computed(() => store.theme?.[route.query.id]?.[props.state] || []);

const emit = defineEmits(["update-dialog-state"]);

const addContent = () => {
    emit("update-dialog-state", props.state);
};
const delContent = (delData) => {
    store.delListContent(props.state, route.query.id, delData);
};
const open = (delData) => {
    messageBox(delData, delContent);
};
const updateContent = (item) => {
    emit("update-dialog-state", props.state, item);
};
defineExpose({ dotoListDom });
</script>

<style scoped lang="less">
#list {
    width: 25%;
    display: flex;
    flex-direction: column;
    background-color: rgb(246, 248, 249);
    padding-bottom: 2%;

    .title {
        margin: 0.5em 0 0.5em 10%;
        font-size: 1.2em;
    }

    :deep(.el-button) {
        color: #000;
    }

    .add-btn {
        width: 80%;
        margin-left: 10%;
        height: 10%;
        background-color: #ebf1f0;
        border-radius: 10px;
        border: 0;
        min-height: 5vh;
        cursor: pointer;

        :deep(.el-icon) {
            height: 1.5em;
            width: 1.5em;

            svg {
                height: 1.5em;
                width: 1.5em;
            }
        }
    }

    .dragArea {
        min-height: 10%;

        .card {
            background-color: #fff;
            width: 80%;
            margin-left: 10%;
            height: auto;
            border-radius: 10px;
            border: 1px solid #c3c3c3;
            margin-top: 4%;
            margin-bottom: 4%;

            .list-title {
                margin: 3% 5% 2% 5%;
                font-size: 1.1rem;
                display: flex;
                align-items: center;

                .el-icon-edit {
                    margin-right: 0;
                    cursor: pointer;
                }

                .element-title {
                    width: 90%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            .list-content {
                margin-left: 5%;
                margin-right: 5%;
                color: #a9a9a9;
                font-size: 0.9rem;
                word-break: break-all;

                .el-icon {
                    margin-left: 94%;
                    cursor: pointer;
                }
            }
        }
    }

    .el-icon {
        width: 1em;
        height: 1em;
        margin-right: 8px;
        color: #000;
    }
}
</style>
