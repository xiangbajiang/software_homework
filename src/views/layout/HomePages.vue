<template>
    <div class="wrapper">
    <Aside class="aside-container"/>
    <div class="main-container" :class="isCollapse==true?'container_collapse':''">
        <Header/>
        <Main/>
    </div>
    </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import { mapState } from "vuex";
export default {
    name: "homepages",
    components: {
        Aside,
        Header,
        Main
    },
    computed: {
        ...mapState(["isCollapse"])
    }
};
</script>
<style lang="css" scoped>
.wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.wrapper .main-container {
min-height: 100%;
-webkit-transition: margin-left 0.28s;
transition: margin-left 0.28s;
margin-left: 180px;
position: relative;
}
.wrapper .container_collapse {
margin-left: 64px;
}
</style>