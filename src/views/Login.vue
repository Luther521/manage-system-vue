<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title"><img :src="logo"></div>
         
            <el-form :model="ruleForm"  :label-position="labelPosition" :rules="rules" ref="ruleForm"  class="ms-content">
                <el-form-item prop="username" label="用户名：" >
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名" size="middle">
                        <!-- <el-button slot="prepend" icon="el-icon-lx-people"></el-button> -->
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码：">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" size="middle" >
                        <!-- <el-button slot="prepend" icon="el-icon-lx-lock"></el-button> -->
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <!-- <router-link to="/forget" class="login-tips">忘记密码</router-link> -->
            </el-form>
        </div>
    </div>
</template>
<script>
    import {localapi, proapi, imgBaseUrl} from '../config/env'
    import {mobileCode, checkExsis, sendLogin, getcaptchas, accountLogin} from '../service/getData'
    import Token from '../utils/token'
    import Aes  from '../utils/aes'
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                labelPosition:'top',
                logo:require('../assets/img/logo@2x.png'),
                rules: {
                    username: [
                        { required: true, message: '请输入登录账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入登录密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
           async submitForm(formName) {  
             debugger          
               try {
                 await  this.$refs[formName].validate()
                    this.userInfo =   await accountLogin(this.ruleForm.username, Aes.encrypt16(this.ruleForm.password))
                    console.log(Aes.encrypt16(this.ruleForm.password)+"我是密码")
                    //设置token值放在session中
                    localStorage.setItem('ms_username',this.ruleForm.username)
                    Token.set(this.ruleForm.username)
                    this.$router.push('/dashboard')
               } catch (error) {
                   //移除token
                   
               }
                
            }
        }
        
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../assets/img/back-bg.png);
        background-size: 100%;
    }
    .ms-title{
        width:360px;
        height: 100px;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color:#278DEC;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center; 

    }
    .ms-title img{
        width: 35%;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background:#278DEC;
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
        background-color: #fff;
        height: 237px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:280px;
        height:42px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
        text-align: right;
    }
</style>