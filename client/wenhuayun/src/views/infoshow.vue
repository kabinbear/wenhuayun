<template>
    <div class="infoshow">
        <el-row type="flex" class="row-bg" justify="center"> 
            <el-col :span="8">
                <div class="user">
                    <img src="../assets/logo.png" alt="" class="avatar">
                </div>
            </el-col>
            <el-col :span="16">
                <div class="userinfo">
                    <div class="useritem">

                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'infoshow',
    computed:{
        user(){
            return this.$store.getters.user;
        }
    }
}
</script>
