<template>
    <el-dialog
        title="信息修改"
        :visible.sync="vis"
        width="30%"
        @close="closeDialog">
        <el-form ref="form" :model="form" label-width="80px" class="teacher-info">
            <el-form-item label="学生工号">
                <el-input v-model="form.student_id"></el-input>
            </el-form-item>
            <el-form-item label="学生姓名">
                <el-input v-model="form.student_name"></el-input>
            </el-form-item>
            <el-form-item label="学生邮箱">
                <el-input v-model="form.student_email"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
                <el-date-picker v-model="form.student_age" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="学生密码">
                <el-input v-model="form.student_password"></el-input>
            </el-form-item>
            <el-form-item label="账号状态">
                <el-radio-group v-model="form.student_status">
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
            if(!data){
                for(let key in this.form){
                    this.form[key] = ""
                }
            }else{
                this.logdata = data;
                for(let key in data){
                    this.form[key] = data[key]
                }
                if(data && data['student_age']){
                    this.form['student_age'] = data['student_age']
                }
            }
        }
    },
    data(){
        return {
            vis: false,
            table_head: false,
            logdata: [],
            form: {
                student_id: "",
                student_name: "",
                student_age: "",
                student_email: "",
                student_password: "",
                student_status: "",
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