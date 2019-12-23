<template>
  <div class="app-container">
    <el-row class="teacher-admin-research" type="flex">
      <el-col :span="4">
        <el-input v-model="condition.name" placeholder="姓名"  suffix-icon="el-icon-search"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="condition.unit" placeholder="工作单位"  suffix-icon="el-icon-search"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary" @click="searchByName">搜索</el-button>
        <el-button icon="el-icon-edit" type="primary">添加</el-button>
      </el-col>
    </el-row>
    <el-divider content-position="left">相似专家列表</el-divider>
    <el-table
        :data="tableData.slice( ( pages.currentPage - 1) * pages.pagesize, pages.currentPage * pages.pagesize )"
        stripe
        border
        lazy
        style="width: 100%">
        <el-table-column fixed prop='expert_id' label='ID'></el-table-column>
        <el-table-column fixed prop='name_ch' label='中文名'></el-table-column>
        <el-table-column prop='unit' label='工作单位'></el-table-column>
        <el-table-column prop='name_en' label='英文名'></el-table-column>
        <el-table-column prop='mail' label='电子邮件'></el-table-column>
        <el-table-column prop='title' label='职称'></el-table-column>
        <el-table-column prop='degree' label='学位'></el-table-column>
        <el-table-column prop='mobile_phone' label='移动电话'></el-table-column>
        <el-table-column prop='office_phone' label='固定电话'></el-table-column>
        <el-table-column prop='profession' label='所学专业'></el-table-column>
        <el-table-column prop='research' label='研究方向'></el-table-column>
        <el-table-column prop='label' label='领域标签'></el-table-column>
        <el-table-column prop='graduated' label='毕业院校'></el-table-column>
        <el-table-column prop='birth_date' label='出生日期'></el-table-column>
        <el-table-column prop='nationality' label='国籍'></el-table-column>
        <el-table-column prop='career' label='职业'></el-table-column>
        <el-table-column prop='people' label='民族'></el-table-column>
        <el-table-column prop='birth_place' label='出生地'></el-table-column>
        <el-table-column prop='achievement' label='主要成就'></el-table-column>
        <el-table-column prop='origan' label='来源'></el-table-column>
        <el-table-column prop='add_date' label='添加时间'></el-table-column>
        <el-table-column fixed="right" label="操作" width="210">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="small">查看</el-button>
            <el-button size="small" type="primary"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small" type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pages.total"
        :current-page="pages.currentPage"
        @current-change="current_change">
      </el-pagination>
    </el-row>
    <Details :dialogData="dialogPara.data" :dialogVis="dialogPara.DetailsVisible" @dialogClose="dialogDetailsClose"></Details>
    <MyForm :dialogData="dialogPara.data" :dialogVis="dialogPara.MyFormVisisble" @dialogClose="dialogMyFormClose"></MyForm>
  </div>
</template>

<script>
  import Details from "./components/Details";
  import MyForm from "./components/MyForm"
  export default {
    name: "admin",
    components: { Details, MyForm },
    data() {
      return {
        condition: {
          name: "", //按姓名查找
          unit: ""
        },
        pages: {
          pagesize: 10,
          currentPage: 1,
          total: 0
        },
        dialogPara: {
          DetailsVisible: false,
          MyFormVisisble: false,
          data: {}
        },
        tableData: []
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
        this.dialogPara.data = row;
        this.dialogPara.DetailsVisible = !this.dialogPara.DetailsVisible;
      },
      handleEdit(index, row){
        console.log(index, row);
        this.dialogPara.data = row;
        this.dialogPara.MyFormVisisble = !this.dialogPara.MyFormVisisble;
      },
      handleDelete(index, row){
        console.log(index, row)
        this.$confirm('此操作将禁用该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      current_change(currentPage){
        this.currentPage = currentPage;
      },
      searchByName(){
        console.log(this.condition_name);
      },
      dialogDetailsClose(value){
        this.dialogPara.DetailsVisible = value;
      },
      dialogMyFormClose(value){
        this.dialogPara.MyFormVisisble = value;
      }
    }
  }
</script>
<style lang="css">
    .app-container{
      padding: 20px 10px;
    }
    .app-container .el-row{
      margin-bottom: 10px;
    }
</style>