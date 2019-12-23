<template>
    <div class="app-container">
        <el-form ref="expert_form" :model="exp_info" :rules="info_rules" label-width="100px">
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-divider class="my-divider" content-position="left">专家信息录入</el-divider>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="姓名" prop="name_ch">
                        <el-input v-model="exp_info.name_ch"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="英文名">
                        <el-input v-model="exp_info.name_en"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="工作单位" prop="unit">
                        <el-input v-model="exp_info.unit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="职称">
                        <el-input v-model="exp_info.title"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="职业">
                        <el-input v-model="exp_info.career"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="最高学历">
                        <el-select v-model="exp_info.degree" placeholder="请选择学历">
                            <el-option label="大专" value="大专"></el-option>
                            <el-option label="学士" value="学士"></el-option>
                            <el-option label="硕士" value="硕士"></el-option>
                            <el-option label="博士" value="博士"></el-option>
                        </el-select> 
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="毕业院校">
                        <el-input v-model="exp_info.graduated"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="所学专业">
                        <el-input v-model="exp_info.profession"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="性别">
                        <el-radio-group v-model="exp_info.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="出生年份">
                        <el-date-picker type="date" placeholder="选择日期" v-model="exp_info.birth_date_old" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="国籍">
                        <el-input v-model="exp_info.nationality"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="民族">
                        <el-input v-model="exp_info.people"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="移动电话">
                        <el-input v-model="exp_info.mobile_phone"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="办公电话">
                        <el-input v-model="exp_info.office_phone"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="邮箱">
                        <el-input v-model="exp_info.mail"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="政治面貌">
                        <el-input v-model="exp_info.party"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="籍贯">
                        <el-input v-model="exp_info.birth_place"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="研究方向">
                        <el-input v-model="exp_info.research"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="推荐来源" prop="origin">
                        <el-select v-model="exp_info.origin" placeholder="请选择推荐来源">
                            <el-option label="原专家库" value="原专家库"></el-option>
                            <el-option label="网信办" value="网信办"></el-option>
                            <el-option label="爬取" value="爬取"></el-option>
                            <el-option label="中心" value="中心"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="状态" prop="status">
                        <el-select v-model="exp_info.status" placeholder="请选择专家状态">
                            <el-option label="新推荐专家" value="原专家库"></el-option>
                            <el-option label="入库专家" value="网信办"></el-option>
                            <el-option label="撤销专家" value="爬取"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="部门">
                        <el-input v-model="exp_info.department"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="教授课程">
                        <el-input v-model="exp_info.course"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="所在地">
                        <el-input v-model="exp_info.location"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="6">
                    <el-form-item label="邮编">
                        <el-input v-model="exp_info.zipcode"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="技术标签" prop="desc">
                        <el-input type="textarea" v-model="exp_info.tech_label"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="业务标签" prop="desc">
                        <el-input type="textarea" v-model="exp_info.yewu_label"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="工作经历" prop="desc">
                        <el-input type="textarea" v-model="exp_info.work_experience"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="社会兼职" prop="desc">
                        <el-input type="textarea" v-model="exp_info.social_service"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="主要成就" prop="desc">
                        <el-input type="textarea" v-model="exp_info.achievement"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="教材" prop="desc">
                        <el-input type="textarea" v-model="exp_info.teaching_material"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="主要论文" prop="desc">
                        <el-input type="textarea" v-model="exp_info.paper"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="主要专利" prop="desc">
                        <el-input type="textarea" v-model="exp_info.patent"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="国家级项目" prop="desc">
                        <el-input type="textarea" v-model="exp_info.national_project"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item label="基金" prop="desc">
                        <el-input type="textarea" v-model="exp_info.fund"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="2"><div class="grid-content"></div></el-col>
                <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">立即创建</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <FloatWindow></FloatWindow>
        <el-backtop target=".default-scrollbar__wrap" style="right: 60px;" :bottom="100">
            <div class="back-up">UP</div>
        </el-backtop>
    </div>
</template>
<script>
import FloatWindow from "./components/FloatWindow.vue";
export default {
    name: "expert_add",
    components: { FloatWindow },
    data() {
        return {
            exp_info: {
                name_ch: "",
                name_en: "",
                unit: "",
                title: "",
                career: "",
                degree: "",
                graduated: "",
                profession: "",
                sex: "",
                birth_date_old: "",
                nationality: "",
                people: "",
                mobile_phone: "",
                office_phone: "",
                mail: "",
                party: "",
                birth_place: "",
                research: "",
                origin: "",
                status: "",
                department: "",
                course: "",
                location: "",
                zipcode: "",
                tech_label: "",
                yewu_label: "",
                work_experience: "",
                social_service: "",
                achievement: "",
                teaching_material: "",
                paper: "",
                patent: "",
                national_project: "",
                fund: ""
            },
            info_rules: {
                name_ch: [
                    { required: true, message: "请输入专家姓名", trigger: "blur"},
                    { min: 2, max: 10, message: "输入姓名的长度应在2到10个字符之间"}
                ],
                unit: [
                    { required: true, message: "请输入专家单位", trigger: "blur"}
                ],
                origin: [
                    { required: true, message: "请输入专家来源", trigger: "blur"}
                ],
                status: [
                    { required: true, message: "请输入专家状态", trigger: "blur"}
                ]
            },
            visible: false
        }
    },
    methods: {
       submitForm(){
           this.$refs['expert_form'].validate((valid) => {
               if(valid){
                   //send query
                   console.log(valid)
               }else{
                    this.$message.error('信息填写不合法，请按照要求重新填写');
               }
           });
       }
    }
}
</script>
<style lang="css">
    .app-container{
        padding: 20px 10px;
        text-align: left;
        overflow: hidden;
    }
    .app-container .el-form .el-form-item{
        width: 100%;
    }
    .app-container .el-form .el-form-item .el-input{
        max-width: 250px;
    }
    .app-container .el-form .el-form-item .el-select{
        max-width: 250px;
        width: 100%;
    }
    .app-container .el-form .el-form-item .el-textarea{
        width: 100%;
        max-width: 670px;
    }
    .app-container .el-form-item__label{
        color: black;
    }
    .back-up{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .my-divider .el-divider__text{
        font-size: 24px;
    }
    .app-container .el-form .el-form-item .el-badge {
        margin-left: 10px;
    }
</style>