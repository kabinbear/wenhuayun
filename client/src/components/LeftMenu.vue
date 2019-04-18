<template>
 <el-row class="menu_page">
         <el-col>
             <el-menu
                mode="vertical"
                background-color="#ffffff"
                text-color="black"
                active-text-color="#409eff" 
                class="el-menu-vertical-demo">
              
              <template v-for="item in items" >
              <router-link to="item.path" :key="item"> 
               <el-menu-item index='item.path'>
                 <template slot="title">
                  <i  class="iconfont" :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </template>
                </el-menu-item>   
              </router-link>
             </template>
             </el-menu>
         </el-col>
    </el-row>
</template>
<script>
export default {
      name: "leftmenu",
      data(){
        return{
          items:[
            {
              icon:"icon-file-excel",
              name:"全部",
              path:'main',
            },
            {
              icon:"icon-file-zip",
              name:"压缩文件",
              path:'zip',
            },
            {
              icon:"icon-file-excel",
              name:"excel",
              path:'excel',
            },
            {
              icon:"icon-file-pdf",
              name:"PDF文件",
              path:"pdf",
            },
            {
              icon:"icon-file-image",
              name:"图片",
              path:"img",
            },
            {
              icon:"icon-file-ppt",
              name:"幻灯片",
              path:"ppt",
            },
            
          ]
        }
      }
}
</script>
<style scoped>
.menu_page {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  background-color: #FFFF;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-menu-item {
  min-width: 180px;
  font-size: 18px;
  height:75px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
