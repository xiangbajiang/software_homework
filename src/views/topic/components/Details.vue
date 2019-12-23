<template>
    <el-dialog
        title="详细信息"
        :visible.sync="vis"
        width="30%"
        @close="closeDialog">
        <el-table
            :data="logdata"
            stripe
            border lazy :show-header="table_head">
            <el-table-column prop="item" label="属性"></el-table-column>
            <el-table-column prop="value" label="值"></el-table-column>
        </el-table>
    </el-dialog>
</template>
<script>
export default {
    name: "Details",
    props:{
        dialogVis: Boolean,
        dialogData: Object
    },
    watch: {
        dialogVis (data) {
            this.vis = data;
        },
        dialogData(data){
            let table_data = [];
            for(let key in data){
                let item = {};
                item["item"] = key;
                item["value"] = data[key]
                table_data.push(item);
            }
            console.log(table_data);
            this.logdata = table_data;
        }
    },
    data(){
        return {
            vis: false,
            table_head: false,
            logdata: []
        }
    },
    methods: {
        closeDialog(){
            this.vis = false;
            this.$emit("dialogDetailsClose", false);
        }
    },
}
</script>