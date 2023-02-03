import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore({
    id: 'task',
    state: () => ({
        todoList: reactive([]),
        inProgress: reactive([]),
        completed: reactive([]),
    }),
    actions: {
        addList(listType, listData) {
            this[listType].push({
                id: listData.id,
                title: listData.title,
                content: listData.content,
            });
        },
        delList(listType, item) {
            this[listType] = this[listType].filter(elem => elem.id !== item.id);
        },
        updateList(listType, listData) {
            this[listType].forEach(item => {
                if (item.id === listData.id) {
                    item.title = listData.title;
                    item.content = listData.content;
                }
            })
        },
    },
    persist: true,
})