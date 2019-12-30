<template>
    <el-dialog :title="title" :visible.sync="vis" width="30%" @close="closeDialog">
        <el-form ref="form" :model="form" label-width="100px" class="teacher-info">
            <el-form-item label="竞赛类型">
                <el-input v-model="form.type"></el-input>
            </el-form-item>
            <el-form-item label="基础系数">
                <el-input v-model="form.base"></el-input>
            </el-form-item>
            <el-form-item label="一等奖系数">
                <el-input v-model="form.coefficient_first"></el-input>
            </el-form-item>
            <el-form-item label="二等奖系数">
                <el-input v-model="form.coefficient_second"></el-input>
            </el-form-item>
            <el-form-item label="三等奖系数">
                <el-input v-model="form.coefficient_third"></el-input>
            </el-form-item>
            <el-form-item label="其他奖项系数">
                <el-input v-model="form.coefficient_other"></el-input>
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
    import { update_type_info, insert_type_info } from "../../../api/api"
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
                    this.title = "信息添加";
                    for (let key in this.form) {
                        this.form[key] = ""
                    }
                } else {
                    this.title = "信息修改";
                    this.logdata = data;
                    for (let key in data) {
                        this.form[key] = data[key]
                    }
                }
            }
        },
        data() {
            return {
                vis: false,
                table_head: false,
                logdata: [],
                title: "",
                form: {
                    id: "",
                    type: "",
                    base: "",
                    coefficient_first: "",
                    coefficient_second: "",
                    coefficient_third: "",
                    coefficient_other: "",
                    status: ""
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
                let param = new FormData()
                for (let key in this.form) {
                    param.set(key, this.form[key])
                }
                if (this.logdata === 1) {
                    //新增
                    insert_type_info(param)
                        .then(res => {
                            this.$message('success', res.message);
                            this.closeDialog()
                        })
                } else {
                    //更新
                    update_type_info(param)
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