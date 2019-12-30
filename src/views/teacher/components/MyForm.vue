<template>
    <el-dialog title="信息修改" :visible.sync="vis" width="30%" @close="closeDialog">
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
                <el-date-picker v-model="form.teacher_birth" type="date" value-format="timestamp" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="教师密码">
                <el-input v-model="form.teacher_password"></el-input>
            </el-form-item>
            <el-form-item label="账号状态">
                <el-radio-group v-model="form.status">
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
    import {
        modify_teacher_info,
        insert_teacher_info
    } from "../../../api/api";
    export default {
        name: "MyForm",
        props: {
            dialogVis: Boolean,
            dialogData: Object
        },
        watch: {
            dialogVis(data) {
                this.vis = data;
            },
            dialogData(data) {
                if (!data) {
                    this.logdata = 1;
                    for (let key in this.form) {
                        this.form[key] = ""
                    }
                } else {
                    for (let key in data) {
                        this.form[key] = data[key]
                    }
                    this.form.teacher_birth = (parseInt(this.form.teacher_birth) * 1000).toString()
                }
            }
        },
        data() {
            return {
                vis: false,
                table_head: false,
                logdata: [],
                form: {
                    teacher_id: "",
                    teacher_name: "",
                    teacher_email: "",
                    teacher_birth: "",
                    teacher_password: "",
                    status: "",
                }
            }
        },
        methods: {
            closeDialog() {
                this.vis = false;
                this.$emit("dialogMyFormClose", false);
            },
            modifySubmit() {
                console.log(this.form)
                this.form.teacher_birth = (parseInt(this.form.teacher_birth) / 1000).toString()
                let param = new FormData()
                for (let key in this.form) {
                    param.set(key, this.form[key])
                }
                if (this.logdata === 1) {
                    //新增
                    insert_teacher_info(param)
                        .then(res => {
                            this.$message('success', res.message);
                            this.closeDialog()
                        })
                } else {
                    //更新
                    modify_teacher_info(param)
                        .then(res => {
                            this.$message('success', res.message);
                            this.closeDialog()
                        })
                }
            }
        },
    }
</script>
<style lang="css">
    .teacher-info {
        text-align: left;
    }

    .el-form .el-form-item__label {
        color: #606266;
    }
</style>