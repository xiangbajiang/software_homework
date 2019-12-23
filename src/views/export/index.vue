<template>
    <div class="app-container">
        <el-row class="button-list">
            <el-button type="primary">专家汇总表</el-button>
            <el-button type="primary">评审表信息</el-button>
            <el-button type="primary">校对专家信息表</el-button>
            <el-button type="primary">新增专家信息表</el-button>
            <el-button type="primary">爬取与评审表重合专家</el-button>
            <el-button type="primary">未校对专家信息表</el-button>
            <el-button type="primary">库文件导出</el-button>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "Export",
    data () {
        return {
        }
    }
}
</script>
<style lang="css">
    .button-list{
        margin-top: 100px;
        text-align: center;
    }
</style>