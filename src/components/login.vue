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
                    @change="rememberpsd" :checked="isChecked"
                >记住密码</el-checkbox>
            </el-form>
        </div>
    </div>
</template>
<script>
    import jquery from 'jquery'
    import {LOGIN_URL} from "@/constants/API";
    export default{
        name: 'login',
        data(){
            return {
                logining: false,
                isChecked:false,
                loading:false,
                captcha:'',
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [{required: true, message: '请输入账号', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
                },
                checked: false
            }
        },
        created() {
            this.$nextTick(() => {
                this.getCookie(); //创建完成的时候调用cookie
            });
           
        },
        methods:{
             //当记住密码复选框改变
            rememberpsd(e) {
                this.isChecked = e;
            },
            //保存账号密码加密至cookie
            setCookie(cname, cpwd, cdays) {
            //获取当前时间
                var curDate = new Date();
                //设置7天过期时间
                curDate.setTime(curDate.getTime() + 24 * 60 * 60 * 1000 * cdays);
                //账号密码加密
                var codeName = window.btoa(unescape(encodeURIComponent(cname)));
                var codePwd = window.btoa(unescape(encodeURIComponent(cpwd)));
                //字符串拼接cookie
                window.document.cookie ="username" + "=" + codeName + ";Expires=" + curDate.toGMTString();
                window.document.cookie ="password" + "=" + codePwd + ";Expires=" + curDate.toGMTString();
                window.document.cookie = "isChecked" + "=" +  this.isChecked + ";Expires=" + curDate.toGMTString();
            },
            //获取cookie解密后的数据
            getCookie() {
                console.log(document.cookie.length)
                if (document.cookie.length > 0) {
                    var arr = document.cookie.split("; ");
                    for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split("=");
                    if (arr2[0] == "username") {
                        //账号解密赋值
                        this.ruleForm.username = decodeURIComponent(escape(window.atob(arr2[1]))
                        );
                    } else if (arr2[0] == "password") {
                        //密码解密赋值
                        this.ruleForm.password=decodeURIComponent(escape(window.atob(arr2[1]))
                        );
                    } else if (arr2[0] == "isChecked") {
                        //获取复选框状态
                        this.isChecked = JSON.parse(arr2[1]);
                    }
                    }
                }
            },
            //清除cookie
            clearCookie() {
                this.setCookie("", "", -1);
            },
            handleSubmit(event){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        //this.loading = true
                        var formData = new FormData()
                        formData.append('username', this.ruleForm.username)
                        formData.append('password', this.ruleForm.password)
                        var data = "username=" +  this.ruleForm.username + "&password=" + this.ruleForm.password + "&captcha=" + this.captcha;
                        // this.axios.get("http://localhost:8081/cadre/sys/login", {
                        //     params: {
                        //         //传到后台的数据参数
                        //         //id:this.$route.query.id,     //当前页面地址栏中url参数名为id的参数值
                        //         'username':this.ruleForm.username,      //多个数据像这样用
                        //         'password':this.ruleForm.password,
                        //         'captcha':this.captcha
                        //     },
                        // }).then(response => {
                        //     console.log(response)
                           
                        // })
                        
                        // this.$store.commit('setToken', response.headers.token)
                        // this.$store.commit('setCurrentUser', response.data.data.name)
                        // this.$store.commit('setUserEmail', response.data.data.email)
                        // this.$store.commit('setAccessedMenus', response.data.data.menus)
                        // formData.append('password', md5(md5(this.loginForm.password)))
                        // this.axios.post(api.SYS_LOGIN, formData).then((response) => {
                        //     //  缓存验证信息及用户信息
                        //     this.$store.commit('setToken', response.headers.token)
                        //     this.$store.commit('setCurrentUser', response.data.data.name)
                        //     this.$store.commit('setUserEmail', response.data.data.email)
                        //     this.$store.commit('setAccessedMenus', response.data.data.menus)
                        //     this.$store.commit('setAccessedFunctions', response.data.data.functions)
                        //     this.$message({
                        //     message: '登陆成功',
                        //     type: 'success'
                        //     })
                        //     this.$router.push({ name: 'overview' })
                        //     this.loading = false
                        //     this.loading = false
                        // })
                        // this.axios.post(LOGIN_URL,formData).then(res => {
                        //                 console.log(res)
                        //                 // let code =res.code;
                        //                 // if(code === '000'){
                        //                 // that.logining = false;
                        //                 // let token = res.data.token;
                        //                 // let orgCode = res.data.orgCode;
                                        
                        //                 // sessionStorage.setItem('orgCode',orgCode)
                        //                 // }else{
                        //                 // // that.$alert('用户名或密码错误！','error',{
                        //                 // //   confirmButtonText:'ok'
                        //                 // // })
                        //                 // }
                        // })
                        if(this.ruleForm.username === 'admin' &&   this.ruleForm.password === '123456'){
                            this.$message({
                                message: '登陆成功',
                                type: 'success'
                            })
                            this.$router.push({ name: 'overview' })
                            // this.logining = false;
                            // sessionStorage.setItem('user', this.ruleForm.username);
                            //this.$router.push({path: '/home', query: {'username': this.ruleForm.username}});
                            //this.$message.success("登录成功");
                        }else{
                            this.logining = false;
                            this.$alert('用户名或密码错误!', '提示', {
                                confirmButtonText: 'ok'
                            })
                        }
                          
                      
                    } else {
                        return false
                    }
                    // if(valid){
                    //     this.logining = true;
                    //     // this.$axios.post("login", this.ruleForm).then((response)=>{
                    //     //     this.logining = false;
                    //     //     sessionStorage.setItem('user', this.ruleForm.username);
                    //     //     this.$router.push({path: '/home', query: {'username': this.ruleForm.username}});
                    //     // }).catch((response)=>{
                    //     //     this.logining = false;
                    //     //     this.$alert('用户名或密码错误!', '提示', {
                    //     //         confirmButtonText: 'ok'
                    //     //     })
                    //     // })
                    //     if (this.isChecked) {//记住密码选中状态就将账号密码存到cookie中
                    //         this.setCookie(this.ruleForm.username, this.ruleForm.password, 7);
                    //     } else {//否则就清除cookie
                    //         this.clearCookie();
                    //     }
                    //     if(this.ruleForm.username === 'admin' && 
                    //     this.ruleForm.password === '123456'){
                    //         this.logining = false;
                    //         sessionStorage.setItem('user', this.ruleForm.username);
                    //         this.$router.push({path: '/home', query: {'username': this.ruleForm.username}});
                    //         //this.$message.success("登录成功");
                    //     }else{
                    //         this.logining = false;
                    //         this.$alert('用户名或密码错误!', '提示', {
                    //             confirmButtonText: 'ok'
                    //         })
                    //     }
                    // }else{
                    //     console.log('error submit!');
                    //     return false;
                    // }
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
        color:#CA0010!important;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #CA0010!important;
        border-color: #CA0010!important;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label {
        color: #3F3F3F;
    }
    .el-checkbox__label{
        font-size: 12px;
    }
    .icon{
        color:#AA0112!important;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: #CA0010!important;
        border-color: #CA0010!important;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label {
        color: #aa0112!important;
    }
    .el-checkbox__label{
        font-size: 12px;
    }
</style>