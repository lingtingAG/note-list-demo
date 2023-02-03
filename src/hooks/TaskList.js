import { markRaw } from 'vue';
import { ElMessageBox, ElMessage, ElLoading } from "element-plus";
import { Delete } from "@element-plus/icons-vue";

export const localLoading = (el) => {
    const loading = ElLoading.service({
        target: el,
        lock: true,
        text: "",
        spinner: "",
        background: "rgba(255,255,255,0.5)",
    });
    return loading;
};

export const messageBox = (delData, callback) => {
    ElMessageBox.confirm("It will be delete. Continue?", "Warning", {
        type: "warning",
        icon: markRaw(Delete),
    })
        .then(() => {
            ElMessage({
                type: "success",
                message: "Delete completed",
            });
            callback(delData);
        })
        .catch(() => {
            ElMessage({
                type: "info",
                message: "Delete canceled",
            });
        });
};
