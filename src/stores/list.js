import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useListStore = defineStore({
    id: 'list',
    state: () => ({
        theme: reactive({}),
    }),
    actions: {
        addListTitle(titleId, title) {
            this.theme[titleId] = {
                title: title,
                todoList: [],
                inProgress: [],
                completed: [],
            }
        },
        addListContent(type, id, listData) {
            if (this.theme[id]) {
                this.theme[id][type].push(listData);
            }
        },
        updateListContent(type, id, listData) {
            if (this.theme[id]) {
                this.theme[id][type].forEach((item, index) => {
                    if (item.id === listData.id) {
                        this.theme[id][type][index] = listData;
                    }
                })
            }
        },
        delListContent(listType, id, item) {
            if (this.theme[id]) {
                this.theme[id][listType] = this.theme[id][listType].filter(elem => elem.id !== item.id);
            }
        },
    },
    persist: true,
})