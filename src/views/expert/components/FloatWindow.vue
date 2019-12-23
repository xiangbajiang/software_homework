<template>
    <el-card class="floating-window">
        <div slot="header" class="clearfix">
            <span>爬取内容</span>
        </div>
    </el-card>
</template>
<script>
export default {
    name: "floatingwindow",
    data () {
        return {}
    }
}
</script>
<style lang="css">
    .floating-window{
        position: fixed;
        height: 600px;
        width: 400px;
        top: 150px;
        right: 60px;
    }
    @media (max-width: 1200px){
        .floating-window{
            display: none;
        }
    }

</style>