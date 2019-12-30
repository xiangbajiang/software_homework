<template>
  <div class="app-container">
    <el-row class="teacher-admin-research" type="flex">
      <el-col :span="4">
        <el-input v-model="condition.name" placeholder="姓名" suffix-icon="el-icon-search"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="condition.status" clearable placeholder="教师状态">
          <el-option v-for="item in status_options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary" @click="searchByName">搜索</el-button>
        <el-button icon="el-icon-edit" type="primary" @click="handleAdd">添加</el-button>
      </el-col>
    </el-row>
    <el-divider content-position="left">教师列表</el-divider>
    <el-table :data="tableData.slice( ( pages.currentPage - 1) * pages.pagesize, pages.currentPage * pages.pagesize )"
      stripe lazy border style="width: 100%">
      <el-table-column prop='id' label='序号' sortable></el-table-column>
      <el-table-column prop='competition_id' label='竞赛编号' sortable></el-table-column>
      <el-table-column prop='competition_name' label='竞赛名称' sortable></el-table-column>
      <el-table-column prop='competition_origin' label='竞赛来源'></el-table-column>
      <el-table-column prop='competition_start' label='开始时间' :formatter="dateStartFormat" sortable></el-table-column>
      <el-table-column prop='competition_end' label='结束时间' :formatter="dateEndFormat" sortable></el-table-column>
      <el-table-column prop='competition_type' label='竞赛类型'></el-table-column>
      <el-table-column prop='competition_description' label='竞赛描述'></el-table-column>
      <el-table-column prop='status' label='状态'
        :filters="[{ text: '正常', value: 1 }, { text: '禁用', value: 0 }, { text: '待审核', value: 2 }]"
        :filter-method="filterTag">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ statusFormat(row.status) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="210">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small">查看</el-button>
          <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-pagination background layout="prev, pager, next" :total="pages.total" :current-page="pages.currentPage"
        @current-change="current_change">
      </el-pagination>
    </el-row>
    <Details :dialogData="dialogPara.data" :dialogVis="dialogPara.DetailsVisible"
      @dialogDetailsClose="dialogDetailsClose"></Details>
    <MyForm :dialogData="dialogPara.data" :dialogVis="dialogPara.MyFormVisisble" @dialogMyFormClose="dialogMyFormClose">
    </MyForm>
  </div>
</template>

<script>
  import Details from "./components/Details";
  import MyForm from "./components/MyForm";
  import { get_competition_info, delete_competition_status } from "../../api/api";
  export default {
    name: "Competition",
    components: {
      Details,
      MyForm
    },
    data() {
      return {
        status_options: [{
          value: 0,
          label: '禁用',
        },
        {
          value: 1,
          label: "正常",
        },
        {
          value: 2,
          label: "待审核"
        }
        ],
        condition: {
          name: "", //按姓名查找
          staus: ""
        },
        pages: {
          pagesize: 10,
          currentPage: 1,
          total: 1
        },
        dialogPara: {
          DetailsVisible: false,
          MyFormVisisble: false,
          data: {}
        },
        tableData: [{
          id: 1,
          competition_id: "2019011",
          competition_name: "LPL",
          competition_origin: "北京教育局",
          competition_start: '851961600000',
          competition_end: "851961600000",
          competition_type: "A",
          competition_description: "这是一个比赛",
          status: 1
        }]
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          0: 'danger',
          1: 'success',
          2: 'info'
        }
        return statusMap[status]
      }
    },
    created() {
      this.resoleData();
    },
    methods: {
      handleClick(row) {
        console.log(row);
        this.dialogPara.data = row;
        this.dialogPara.DetailsVisible = !this.dialogPara.DetailsVisible;
      },
      handleAdd(){
        this.dialogPara.data = null;
        this.dialogPara.MyFormVisisble = !this.dialogPara.MyFormVisisble;
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.dialogPara.data = row;
        this.dialogPara.MyFormVisisble = !this.dialogPara.MyFormVisisble;
      },
      handleDelete(index, row) {
        console.log(index, row)
        this.$confirm('此操作将禁用该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let param = new FormData();
          param.set('competition_id', row.competition_id)
          delete_competition_status(param)
            .then(res => {
              console.log(res)
              this.$message('success', res.message);
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.resoleData();
            })
            .catch(err => {
              this.$message("error", err.message);
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      current_change(currentPage) {
        this.currentPage = currentPage;
      },
      searchByName() {
        console.log(this.condition_name);
      },
      dialogDetailsClose(value) {
        this.dialogPara.DetailsVisible = value;
      },
      dialogMyFormClose(value) {
        this.dialogPara.MyFormVisisble = value;
        this.resoleData()
      },
      dateStartFormat(row) {
        if(row.competition_start){
          var date = new Date(parseInt(row.competition_start) * 1000)
          var Y = date.getFullYear() + '-'
          var M = (date.getMonth() + 1) + '-'
          var D = date.getDate()
          return Y + M + D
        }else{
          return ""
        }
      },
      dateEndFormat(row) {
        if(row.competition_end){
          var date = new Date(parseInt(row.competition_end) * 1000)
          var Y = date.getFullYear() + '-'
          var M = (date.getMonth() + 1) + '-'
          var D = date.getDate()
          return Y + M + D
        }else{
          return ""
        }
      },
      statusFormat(value) {
        if (value === 1) {
          return "正常"
        } else if (value === 0) {
          return "禁用"
        } else if (value === 2) {
          return "未审核"
        }
      },
      filterTag(value, row) {
        return row.status === value;
      },
      resoleData() {
        let param = new FormData();
        get_competition_info(param)
          .then(res => {
            console.log(res)
            this.$message('success', res.message);
            this.tableData = res.list
            this.pages.total = res.list.length
          })
          .catch(err => {
            this.$message("error", err.message);
          });
      }
    }
  };
</script>
<style lang="css">
  .app-container {
    padding: 20px 10px;
  }

  .app-container .el-row {
    margin-bottom: 10px;
  }
</style>
