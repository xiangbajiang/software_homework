<template>
    <div class="clearfix">
    <div class="showAside pull-left" @click="toggleClick">
        <i class="el-icon-menu"></i>
    </div>
    </div>
</template>

<script>
export default {
    name: "showAside",
    props: {
        toggleClick: {
            type: Function,
            default: null
        }
    }
};
</script>
<style lang="css" scoped>
.clearfix{
    float: left;
}
.showAside {
    text-align: left;
    margin-left: 10px;
    cursor: pointer;
}
.showAside i {
    font-size: 20px;
}
</style>