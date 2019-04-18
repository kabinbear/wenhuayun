<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">
                    文华云盘系统🚀
                    </span>
  <el-form :model="loginUser" status-icon :rules="rules"  ref="loginForm" label-width="60px" class="loginForm">
 <el-form-item label="邮箱" prop="email">
 <el-input type="name" v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
 <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>  
   </el-form-item>
  <el-form-item>
<el-button type="primary" class="sumbit_btn" @click="submitForm('loginForm')">登录</el-button>
 </el-form-item>
 <div class="tiparea">
   <p>还没有账号?现在<router-link to='/register'>注册</router-link></p>
 </div>
</el-form>
                
            </div>
        </section>
    </div>
    
</template>

<script>
export default {
    name: "login",
    data(){
      
        return{
                 loginUser:{
                email:'',
                password:'',
            },
            rules:{
              name:[
                  {
                required: true,
                message:"用户名不能为空",
                trigger:"change"
              },
               { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }

              ],
              email:[{
                  type:'email',
                  required:true,
                  message:"邮箱格式不正确",
                  trigger:['blur', 'change']
              },
              ],
              password:[{
                  required: true,
                  message:"密码不能为空",
                  trigger:"blur"
              },{
                  min:6,
                  max:30,
                  message:"长度在6到30之间",
                  trigger:"blur"
              }],
            }
        }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate(valid=>{
          if(valid){
            this.$axios
            .post('http://localhost:5001/api/users/login',this.loginUser).then(res=>{
              const { token } = res.data;
              localStorage.setItem('eleToken',token);
               this.$router.push('/index');
            });
           
          }   
        })
      }
    }
}
</script>


<style scoped>
.login{
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/th.jpg) no-repeat center center;
    background-size: 100% 100%;
}
.form_container{
    width: 370px;
    height: 201px;
    position: absolute;
    top: 18%;
    left:68%;
    padding:25px;
    border-radius: 5px;
    text-align:center;
}
.title{
    font-family:"Microsoft YaHei";
    font-weight: bold;
    font-size: 32px;
    color:black;
}
.loginForm{
  margin-top:20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #ccc;
}
.submit_btn{
    width:100%;
}
</style>

