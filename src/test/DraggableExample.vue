<template>
    <div class="row">
        <div class="col-3">
            <h3>Draggable 1</h3>
            <draggable class="dragArea list-group" :list="list1" :clone="clone"
                :group="{ name: 'people', pull: pullFunction }" @start="start" item-key="id">
                <template #item="{ element }">
                    <div class="list-group-item">
                        {{ element.name }}
                    </div>
                </template>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Draggable 2</h3>
            <draggable class="dragArea list-group" :list="list2" group="people" item-key="id">
                <template #item="{ element }">
                    <div class="list-group-item">
                        {{ element.name }}
                    </div>
                </template>
            </draggable>
        </div>

        <div class="col-3" :value="list1" title="List 1" ></div>

        <div class="col-3" :value="list2" title="List 2" ></div>
    </div>
</template>
  
<script setup>
import { ref, reactive } from 'vue';
import draggable from "vuedraggable";

let idGlobal = 8;
const list1 = reactive([
    { name: "Jesus", id: 1 },
    { name: "Paul", id: 2 },
    { name: "Peter", id: 3 }
]);
const list2 = reactive([
    { name: "Luc", id: 5 },
    { name: "Thomas", id: 6 },
    { name: "John", id: 7 }
]);
let controlOnStart = ref(true);

const clone = ({ name }) => {
    return { name, id: idGlobal++ };
};
const pullFunction = () => {
    return controlOnStart.value ? "clone" : true;
};
const start = ({ originalEvent }) => {
    controlOnStart.value = originalEvent.ctrlKey;
};
</script>