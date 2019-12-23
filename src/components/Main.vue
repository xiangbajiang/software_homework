<template>
    <div class="container">
        <tags />
        <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
            <div class="contents">
                <transition name="fade-transform" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import Tags from './Tags.vue'
export default {
    name: "Main",
    components:{
        Tags
    }
}
</script>
<style lang="css">
    .container {
        height: calc(100vh - 50px);
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    .container .contents{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .default-scrollbar {
        width: 100%;
        height: 100%;
    }
    .flex-scrollbar {
        width: auto;
        height: auto;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .el-scrollbar__wrap.default-scrollbar__wrap {
        overflow-x: auto;
    }
    .el-scrollbar__view.default-scrollbar__view {}
    .el-scrollbar__view.p20-scrollbar__view {
        padding: 20px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
    }
</style>