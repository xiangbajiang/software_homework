<template>
    <el-dialog
        v-if='vis'
        title="文件上传"
        :visible.sync="vis"
        width="30%"
        @close="closeDialog">
        <el-input type="file"></el-input>
    </el-dialog>
</template>
<script>
export default {
    name: "MyForm",
    props:{
        dialogVis: Boolean,
        dialogData: Object
    },
    watch: {
        dialogVis (data) {
            this.vis = data;
        },
        dialogData(data){
            console.log(data)
        }
    },
    data(){
        return {
            vis: false,
            table_head: false,
            logdata: [],
            fileList: []
        }
    },
    methods: {
        closeDialog(){
            this.vis = false;
            this.$emit("dialogMyFormClose", false);
        },
        modifySubmit(){
            if(this.logdata){
                console.log(this.form)
            }else{
                console.log("这是个新增")
            }
        },
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    },
}
</script>
<style lang="css">
    .teacher-info{
        text-align: left;
    }
    .el-form .el-form-item__label{
        color: #606266;
    }
    
</style>