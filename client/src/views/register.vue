<template>
    <div class="register">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">
                    文华云盘系统🚀
                    </span>
  <el-form :model="registerUser" status-icon :rules="rules"  ref="registerForm" label-width="80px" class="registerForm">
 <el-form-item label="用户名" prop="name">
 <el-input type="name" v-model="registerUser.name" placeholder="请输入用户名"></el-input>
  </el-form-item>
 <el-form-item label="邮箱" prop="email">
 <el-input type="name" v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
 <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>  
   </el-form-item>
  <el-form-item label="确认密码" prop="checkpassword">
 <el-input type="password" v-model="registerUser.checkpassword" placeholder="请再次输入密码"></el-input>  
   </el-form-item>
   <el-form-item label="选择身份">
    <el-select v-model="registerUser.identity" placeholder="请选择身份">
    <el-option label="老师" value="teacher"></el-option>
    <el-option label="学生" value="student"></el-option>
    <el-option label="管理员" value="manager"></el-option>
   </el-select>
   </el-form-item> 

  <el-form-item>
<el-button type="primary" class="sumbit_btn" @click="submitForm('registerForm')">注册</el-button>
<el-button type="primary" class="sumbit_btn" @click="resetForm('registerForm')">重置</el-button>
</el-form-item>
</el-form>
                
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    name: "register",
    data(){
         var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerUser.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return{
            registerUser:{
                name:'',
                email:'',
                password:'',
                checkpassword:'',
                identity:'',
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
              checkpassword:[
                  {
                  required:true,
                  message:"确认密码不能为空",
                  trigger:"blur"
                 },
              {
                 min:6,
                 max:30,
                 message:"长度在6到30之间",
                 trigger:"blur"
              },{
                  validator:validatePass2,
                  trigger:"blur"
              }
                ]   
            }
        }
    },
    methods:{
        submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post("http://localhost:5001/api/users/test",this.registerUser)
            .then(()=>{
     //注册成功
            }); this.$message({
                    message:"账号注册成功!",
                    type:'success' })
            this.$router.push('/login');
          } else {
            this.$message({
                    message:"出错!",
                    type:'error'
                });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    
    }
}
</script>


<style scoped>
.register{
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/hustbg1.jpg) no-repeat center center;
    background-size: 100% 100%;
}
.form_container{
    width: 370px;
    height: 201px;
    position: absolute;
    top: 7%;
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
.registerForm{
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

