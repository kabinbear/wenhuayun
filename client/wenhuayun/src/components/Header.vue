<template>
    <header class="head-nav">
      <el-row>
          <el-col :span="6" class="logo-container">
              <img src="../assets/logo.jpg" class="logo" alt="">
              <span class="title">文华云盘系统🚀</span>
          </el-col>
          <el-col :span="8" class="searchbar">
           <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            clearable
            v-model="input21">
            </el-input>
          </el-col>
          <el-col :span=" 6" class="user">
              <div class="userinfo">
                  <img src="../assets/logo.png" alt="" class="avatar">
                  <div class="welcome">
                  <p class="name comename">欢迎</p>
                  <p class="name avatarname">秦嘉威</p>
              </div><span class="username">
              <el-dropdown
                                trigger="click"
                                @command='setDialogInfo'>
                            <span class="el-dropdown-link">
                                <i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command='info'>个人信息</el-dropdown-item>
                                <el-dropdown-item  command='logout'>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
               </span>
              </div>
               
          </el-col>
      </el-row>
    </header>
</template>

<script>
export default {
    name:'Headnav',
     computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    setDialogInfo(cmditem) {
      if (!cmditem) {
        // console.log("test");
        this.$message("菜单选项缺少command属性");
        return;
      }
      switch(cmditem){
          case 'info':
          this.showinfolist();
          break;
          case'logout':
          this.logout();
          break;
      }},
      showinfolist(){
         this.$router.push('/infoshow')
      },
      logout(){
          //清楚token
          localStorage.removeItem('eleToken');
          //设置Vuex
          this.$store.dispatch('clearCurrentState');
          //跳转
          this.$route.push("/login");
      }

}}
</script>

<style scoped>
.head-nav {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px;
  background: #1565C0;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;
}
.logo-container {
  line-height: 60px;
  min-width: 400px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  vertical-align: middle;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;

}
.user {
  line-height: 60px;
  text-align: right;
  float: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.name {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.comename {
  font-size: 12px;
}
.avatarname {
  color: #409eff;
  font-weight: bolder;
}
.username {
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #fff;
}
.searchbar{
padding:10px 0px;
}

</style>



