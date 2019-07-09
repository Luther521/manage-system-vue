<template>
    <div>
        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px"  :rules="rules" ref="form">
                <el-form-item label="旧密码">
                    <el-date-picker type="password" placeholder="请输入旧密码" v-model="form.newPwd" value-format="" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input  type="password" v-model="form.newPwd"  placeholder="请输入旧密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input type="password" v-model="form.newPwd"  placeholder="请输入旧密码"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit('form')">确 定</el-button>
            </span>
        </el-dialog> 
    </div>
</template>
<script>
export default {
    name: 'changepwd',
          data() {
            return {
             
                editVisible: false,
                delVisible: false,
                form: {
                    oldPwd: '',
                    newPwd: ''
                }
            }
        },
        created() {

        },
        computed: {
           
        },
        methods: {
            changepwd(){
                this.delVisible=true
            },
           async submitForm(form) {  
             debugger          
               try {
                 await  this.$refs[form].validate()
                    this.userInfo =   await accountLogin(this.form.username, Aes.encrypt16(this.ruleForm.password))
                    console.log(Aes.encrypt16(this.form.password)+"我是密码")
                    //设置token值放在session中
                    localStorage.setItem('ms_username',this.form.username)
                    Token.set(this.ruleForm.username)
                    this.$router.push('/dashboard')
               } catch (error) {
                   //移除token
                   
               }
                
            }
          
        }
    }

</script>
<style>

</style>

