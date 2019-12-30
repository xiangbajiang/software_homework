<template>
    <el-dialog :title="title" :visible.sync="vis" width="30%" @close="closeDialog">
        <el-form ref="form" :model="form" label-width="80px" class="teacher-info">
            <el-form-item label="竞赛编号">
                <el-input v-model="form.competition_id"></el-input>
            </el-form-item>
            <el-form-item label="竞赛名称">
                <el-input v-model="form.competition_name"></el-input>
            </el-form-item>
            <el-form-item label="竞赛来源">
                <el-input v-model="form.competition_origin"></el-input>
            </el-form-item>
            <el-form-item label="起止时间">
                <el-date-picker v-model="form.competition_start_end" type="datetimerange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期" value-format="timestamp">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="竞赛类型">
                <el-select v-model="form.competition_type" placeholder="请选择">
                    <el-option
                      v-for="item in type_options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
            </el-form-item>
            <el-form-item label="竞赛描述">
                <el-input type="textarea" v-model="form.competition_description"></el-input>
            </el-form-item>
            <el-form-item label="状态">
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
    import { update_competition_info, insert_competition_info } from "../../../api/api";
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
                    this.logdata = 1
                    this.title = "信息添加";
                    for (let key in this.form) {
                        this.form[key] = ""
                    }
                } else {
                    this.title = "信息修改";
                    this.logdata = data;
                    for (let key in data) {
                        if(key in this.form){
                            this.form[key] = data[key]
                        }
                    }
                    if(data['competition_start'] && data['competition_end'] && parseInt(data['competition_start']) <= parseInt(data['competition_end'])){
                        this.form.competition_start_end.push(parseInt(data['competition_start']) * 1000)
                        this.form.competition_start_end.push(parseInt(data['competition_end']) * 1000)
                    }
                }
            }
        },
        data() {
            return {
                vis: false,
                table_head: false,
                type_options: [{
                    value: "A",
                    label: "A"
                }],
                logdata: [],
                title: "",
                form: {
                    id: 1,
                    competition_id: "",
                    competition_name: "",
                    competition_origin: "",
                    competition_start_end: [],
                    competition_type: "",
                    competition_description: "",
                    status: 1
                }
            }
        },
        methods: {
            closeDialog() {
                this.vis = false;
                this.$emit("dialogMyFormClose", false);
            },
            modifySubmit() {
                let param = new FormData()
                for (let key in this.form) {
                    if(key === "competition_start_end"){
                        param.set("competition_start", (parseInt(this.form.competition_start_end[0]) / 1000).toString())
                        param.set("competition_end", (parseInt(this.form.competition_start_end[1]) / 1000).toString())
                    }else{
                        param.set(key, this.form[key]);
                    }
                }
                console.log(param)
                if (this.logdata === 1) {
                    //新增
                    insert_competition_info(param)
                        .then(res => {
                            this.$message('success', res.message);
                            this.closeDialog();
                        })
                        .catch(err => {
                            console.log(err)
                        })
                } else {
                    //更新
                    update_competition_info(param)
                        .then(res => {
                            this.$message('success', res.message);
                            this.closeDialog()
                        })
                        .catch(err => {
                            console.log(err)
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