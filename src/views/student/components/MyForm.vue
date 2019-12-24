<template>
    <el-dialog
        title="信息修改"
        :visible.sync="vis"
        width="30%"
        @close="closeDialog">
        <el-form ref="form" :model="form" label-width="80px" class="teacher-info">
            <el-form-item label="教师工号">
                <el-input v-model="form.teacher_id"></el-input>
            </el-form-item>
            <el-form-item label="教师姓名">
                <el-input v-model="form.teacher_name"></el-input>
            </el-form-item>
            <el-form-item label="教师邮箱">
                <el-input v-model="form.teacher_email"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
                <el-date-picker v-model="form.teacher_age" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="教师密码">
                <el-input v-model="form.teacher_password"></el-input>
            </el-form-item>
            <el-form-item label="账号状态">
                <el-radio-group v-model="form.teacher_status">
                    <el-radio :label="2">待审核</el-radio>
                    <el-radio :label="1">正常</el-radio>
                    <el-radio :label="0">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button @click="modifySubmit">提交</el-button>
            </el-form-item>
        </el-form>
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
            this.logdata = data;
            for(var key in data){
                this.form[key] = data[key]
            }
            if(data['teacher_age']){
                this.form['teacher_age'] = data['teacher_age']
            }
        }
    },
    data(){
        return {
            vis: false,
            table_head: false,
            logdata: [],
            form: {
                teacher_id: "",
                teacher_name: "",
                teacher_age: "",
                teacher_email: "",
                teacher_password: "",
                teacher_status: "",
            }
        }
    },
    methods: {
        closeDialog(){
            this.vis = false;
            this.$emit("dialogMyFormClose", false);
        },
        modifySubmit(){
            //此处有个提交
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