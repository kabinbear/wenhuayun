<template>
    <div class="index">
    <Headnav>
    </Headnav>
     <LeftMenu></LeftMenu>
    <div class="rightContainer">
      <router-view></router-view>
    </div>
    </div>
</template>

<script>
import Headnav from '../components/Header.vue' 
import LeftMenu from "../components/LeftMenu.vue";

export default {
    name:'index',
    components:{
        Headnav,
        LeftMenu
    }
};
</script>
<style scoped>
.index{
    width:100%;
    height:100%;
    overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>
