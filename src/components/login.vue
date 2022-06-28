<template>
    <div class="login_container">
        <div class="login">
            <el-form :model="ruleForm" :rules="rules"
            status-icon
            ref="ruleForm" 
            label-position="left" 
            label-width="0px" 
            class="demo-ruleForm login-page">
                <h3 class="title">干部信息综合管理平台</h3>
                <el-form-item prop="username">
                    <el-input prefix-icon="icon iconfont icon-bianzubeifen3" type="text" 
                        v-model="ruleForm.username" 
                        auto-complete="off" 
                        placeholder="用户名"
                    ></el-input>
                </el-form-item>
                    <el-form-item prop="password">
                        <el-input prefix-icon="icon iconfont icon-bianzubeifen2" type="password" 
                            v-model="ruleForm.password" 
                            auto-complete="off" 
                            placeholder="密码"
                        ></el-input>
                    </el-form-item>
                
                <el-form-item style="width:100%;">
                    <el-button type="danger" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
                </el-form-item>
                <el-checkbox 
                    v-model="checked"
                    class="rememberme"
                >记住密码</el-checkbox>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                logining: false,
                ruleForm: {
                    username: 'admin',
                    password: '123456',
                },
                rules: {
                    username: [{required: true, message: '请输入账号', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
                },
                checked: false
            }
        },
        methods:{
            handleSubmit(event){
                this.$refs.ruleForm.validate((valid) => {
                    if(valid){
                        this.logining = true;
                        if(this.ruleForm.username === 'admin' && 
                        this.ruleForm.password === '123456'){
                            this.logining = false;
                            sessionStorage.setItem('user', this.ruleForm.username);
                            this.$router.push({path: '/home', query: {'username': this.ruleForm.username}});
                        }else{
                            this.logining = false;
                            this.$alert('用户名或密码错误!', '提示', {
                                confirmButtonText: 'ok'
                            })
                        }
                    }else{
                        console.log('error submit!');
                        return false;
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .login_container{
        height: 100%;
        width: 100%;
        background-image: url(../../static/image/login.jpg);
        background-repeat:no-repeat;
        background-position:left;
        background-origin:content-box;
    }
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: auto;
        width: 320px;
        padding: 16px 35px 40px 35px;
        background: rgba(255, 255, 255, 0.8);
        background: -moz-linear-gradient(rgba(255, 255, 255, 0.8));
        background: -webkit-gradient(rgba(255, 255, 255, 0.8));
        background: -webkit-linear-gradient(rgba(255, 255, 255, 0.8));
        background: -o-linear-gradient(rgba(255, 255, 255, 0.8));
        background: -ms-linear-gradient(rgba(255, 255, 255, 0.8));
        background: linear-gradient(rgba(255, 255, 255, 0.8)); 
        box-shadow: 3px 4px 40px 0px #80000D;;
        border-radius: 4px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    label.el-checkbox.rememberme {
        position: absolute;
        bottom: 35px;
        left: 9%;
    }
    .title{
        color: #CA0010;
        font-size: 25px;
    }
    .el-icon-user,.el-icon-lock{
        color:#CA0010;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #CA0010;
        border-color: #CA0010;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label {
        color: #3F3F3F;
    }
    .el-checkbox__label{
        font-size: 12px;
    }
    .icon{
        color:#AA0112;
    }
</style>