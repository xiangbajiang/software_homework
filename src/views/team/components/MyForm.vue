<template>
    <el-dialog
        title="信息修改"
        :visible.sync="vis"
        width="30%"
        @close="closeDialog">
        <el-form ref="form" :model="form" label-width="80px" class="teacher-info">
            <el-form-item label="队伍编号">
                <el-input v-model="form.team_id"></el-input>
            </el-form-item>
            <el-form-item label="队伍名称">
                <el-input v-model="form.team_name"></el-input>
            </el-form-item>
            <el-form-item label="参赛名称">
                <el-input v-model="form.team_competition"></el-input>
            </el-form-item>
            <el-form-item label="创建时间">
                <el-date-picker v-model="form.team_start" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="队伍状态">
                <el-radio-group v-model="form.team_status">
                    <el-radio :label="2">待审核</el-radio>
                    <el-radio :label="1">正常</el-radio>
                    <el-radio :label="0">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="队伍描述">
                <el-input type="textarea" v-model="form.team_description"></el-input>
            </el-form-item>
            <el-form-item v-for="(value, key) in form.team_member" :label="labelTranslate(value.playrole)" :key="key">
                <el-input v-model="value.id"></el-input>
                <el-input v-model="value.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="modifySubmit">提交</el-button>
                <el-button @click="addMember">添加队员</el-button>
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
                console.log(data)
            }else{
                this.logdata = data;
                for(let key in data){
                    this.form[key] = data[key]
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
                id: "",
                team_id: "",
                team_name: "",
                team_description: "",
                team_competition: '',
                team_start: "",
                team_end: "",
                team_status: "",
                team_member: [{
                    id: "",
                    name: "",
                    playrole: 1
                },{
                    id: "",
                    name: "",
                    playrole: 2
                }]
            }
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
        labelTranslate(value){
            if(value === 1){
                return "指导老师"
            }else if(value === 2){
                return "队长"
            }else if(value === 3){
                return "队员"
            }
        },
        addMember(){
            this.form.team_member.push({
                id: "",
                name: "",
                playrole: 3
            })
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