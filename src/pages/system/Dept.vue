<template>
    <div class="wrappers">
        <el-container >
            <el-header class="header">
                <el-form size="small" :inline="true" :model="formData" >
                    <el-form-item>
                      <el-button type="danger" @click="onAdd">新增</el-button>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="warning" @click="onEdit">修改</el-button>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="info" @click="onDel">删除</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main class="main">
                <el-table
                    :data="tableData"
                   
                    row-key="deptId"
                    border
                    @current-change="handleCurrentChange"
                    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                    <el-table-column type="" width="50" align="center">
                        <template slot-scope="scope">
                            <div>
                              <el-radio
                                v-model="radiochecked"
                                :label="scope.$index"
                                @change.native="getResponRow(scope.$index,scope.row)"
                                >{{''}}</el-radio
                              >
                            </div>
                          </template>
                    </el-table-column>
                    <el-table-column
                    prop="deptId"
                    label="部门ID"
                    type=""
                   
                    >
                       
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="部门名称"
                   
                    >
                        
                    </el-table-column>
                    <el-table-column
                    prop="parentName"
                    label="上级部门"
                   
                   >
                    </el-table-column>
                    <el-table-column
                    prop="orderNum"
                    label="排序号">
                    </el-table-column>
                </el-table>
                <el-pagination
                    style="padding: 7px 5px;"
                    background
                    align="right"
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </el-main>
        </el-container>
        <el-dialog :visible.sync="addDialogVisible" width="440px" :close-on-click-modal="dialogCloseClick">
            <div slot="title" class="dialg-title">
              {{dialogtitle}}
            </div>
           
            <el-form size="small"  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="83px">
              <el-form-item label="部门名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="上级部门">
                <el-input v-model="ruleForm.parentName"></el-input>
              </el-form-item>
              <el-form-item label="排序号">
                <el-input v-model="ruleForm.orderNum"></el-input>
              </el-form-item>
              <!-- <el-row>
                <el-col :span="12">
                  <el-form-item  label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item  label="所属部门" prop="deptName">
                    <el-input v-model="ruleForm.deptName"></el-input>
                    
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item  label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item  label="手机号" >
                    <el-input v-model="ruleForm.mobile"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="19" style="text-align:left">
                  <el-form-item label="绑定IP地址" >
                    <el-input style="width:380px" v-model="ruleForm.ipadress"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item style="margin-left:15px">
                    <el-button type="danger" @click="">绑定当前IP</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col style="text-align:left;" :span="24">
                  <el-form-item  >
                    <el-checkbox-group v-model="ruleForm.roleIdList" style="padding:0 10px 0 40px ;">
                      <label v-for="role in roleList" class="checkbox-inline">
                        <el-checkbox :label="role.name" name="type">{{role.name}}</el-checkbox>
                      </label>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
                
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="状态:" prop="status">
                    <el-radio-group v-model="ruleForm.status">
                      <el-radio label="禁用"></el-radio>
                      <el-radio label="正常"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                
              </el-row> -->
             
              
             
              <!-- <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer" style="text-align: center;">
              
              <el-button type="danger" size="small" @click="saveComponent">确定</el-button> 
              <el-button type="info" style="margin-left:25px ;" size="small" @click="cancel">返回</el-button>
            </div>
          </el-dialog>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                formData:{
                    user:''
                } ,
                currentCheck:'',
                tableData: [{
                    deptId: 1,
                    orderNum: '2016-05-02',
                    name: '王小虎',
                    parentName: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    deptId: 2,
                    orderNum: '2016-05-04',
                    name: '王小虎',
                    parentName: '上海市普陀区金沙江路 1517 弄'
                    }, {
                    deptId: 3,
                    orderNum: '2016-05-01',
                    name: '王小虎',
                    parentName: '上海市普陀区金沙江路 1519 弄',
                    children: [{
                        deptId: 31,
                        orderNum: '2016-05-01',
                        name: '王小虎',
                        parentName: '上海市普陀区金沙江路 1519 弄'
                        }, {
                        deptId: 32,
                        orderNum: '2016-05-01',
                        name: '王小虎',
                        parentName: '上海市普陀区金沙江路 1519 弄',
                        children: [{
                          deptId: 51,
                          orderNum: '2016-05-01',
                          name: '王小虎',
                          parentName: '上海市普陀区金沙江路 1519 弄'
                          }, {
                          deptId: 52,
                          orderNum: '2016-05-01',
                          name: '王小虎',
                          parentName: '上海市普陀区金沙江路 1519 弄'
                      }]
                    }]
                    }, {
                    deptId: 4,
                    orderNum: '2016-05-03',
                    name: '王小虎',
                    parentName: '上海市普陀区金沙江路 1516 弄'
                }],
                dataListSelections :[],
                addDialogVisible:false,
                dialogCloseClick: false,
                dialogtitle:'',
                datastatus:['正常', '禁用'],
                addcurrent:{

                },
                radiochecked:'',
                rules: {
                    name: [
                    { required: true, message: '请输入部门名称', trigger: 'blur' }
                    ],
                    // organiztion: [
                    // { required: true, message: '请输入单位名称', trigger: 'blur' }
                    // ],
                    // depart: [
                    // { required: true, message: '请输入部门名称', trigger: 'blur' }
                    // ],
                    // status: [
                    // { required: true, message: '请选择用户状态', trigger: 'change' }
                    // ]
                },
                ruleForm: {
                  name: '',
                  parentName: '',
                  orderNum: ''
                },
                roleList:[{
                  name:'角色1'
                },
                {
                  name:'角色2'
                },
                {
                  name:'角色3'
                },
                {
                  name:'角色4'
                },
                {
                  name:'角色5'
                },
                {
                  name:'角色6'
                },
               
              ]
            }
        },
        mounted () {
            this.showList()
        
        },
        methods:{
            showList(){
                // this.$axios.get('').then((response)=>{
                //     //this.tableData=response.data.data;
                // }).catch((response)=>{
                //     console.log(response);
                // })
            },
            handleCurrentChange(currentRow, oldCurrentRow) {
              console.log(currentRow)
              //this.radiochecked =currentRow;
              // console.log(this.radiochecked)
            },
            getResponRow(index,row){
              this.currentCheck = row;
             
            },
          
            onSubmit(){
              console.log(this.formData.user)
            },
            onAdd(){
                this.dialogtitle = '添加'
                this.addDialogVisible = true
                this.ruleForm = {
                  username: '',
                  deptName: '',
                  password: '',
                  mobile: '',
                  ipadress: '',
                  roleIdList: [],
                  status:''
                }
            },
            onEdit(){
              console.log(this.currentCheck)
              if(this.currentCheck){
                this.dialogtitle = '编辑'
                  this.addDialogVisible = true
                  this.ruleForm = {
                    username: '1',
                    deptName: '1',
                    password: '1',
                    mobile: '1',
                    ipadress: '1',
                    roleIdList: [],
                    status:1
                  }
              }else{
                this.$message.error('请选择要编辑的数据');
              }
            },
            onDel(){
              console.log(this.currentCheck)
              if(this.currentCheck){
                this.$confirm('该操作将永久删除选中数据，是否继续?', '删除提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  confirmButtonType:'danger',
                  cancelButtonType:'info',
                  type: 'warning',
                  center: true
                }).then(() => {
                  this.$message.success('删除成功')
                  // this.axios.delete(api.BUSI_GOVERNMENT + '/' + data.code).then(res => {
                  //   this.$nextTick(() => {
                  //     this.$refs.tree.setCurrentKey(this.categoryNode.id)
                  //   })
                  //   if (this.categoryList && this.categoryList.length > 0) {
                  //     this.categoryNode = this.categoryList[0]
                  //     this.treeNodeChangeHandle(this.categoryNode)
                  //   }
                  //   const parent = node.parent
                  //   const children = parent.data.children || parent.data
                  //   const index = children.findIndex(d => d.id === data.id)
                  //   children.splice(index, 1)
                  //   this.$message.success('删除成功')
                  // })
                }).catch(() => {

                });
                
              }else{
                this.$message.error('请选择要删除的数据');
              }
            },
            submitForm(formName) {
              this.$refs[formName].validate((valid) => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            },
            saveComponent(){
              this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                  this.addDialogVisible = false
                  this.$refs['ruleForm'].resetFields();
                } else {
                  
                  return false;
                }
              });
             
            },
            cancel(){
              this.addDialogVisible = false
              this.$refs['ruleForm'].resetFields();
            },
            resetForm(formName) {
              this.$refs[formName].resetFields();
            },
            selectionChangeHandle(val) {
              console.log(val)
              this.dataListSelections = val
            },
        }
    }
</script>
<style scoped>
     .wrappers{
        width: 100%;
        height: 100%;
        display: flex;
        background-color: #fff;
    }
    .header{
      height: 40px!important;
      text-align: right;
      padding: 10px;
    }
    .main{
        display: flex;flex: 1;
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 15px 10px 0 10px;
        /* background: red; */
    }
    .el-form-item{
        margin-bottom: 0;
    }
    /* .el-input__inner{
      border: 1px solid #eee;
    } */
    /* input:focus{
      border:1px solid #eee;
    } */
    /* .el-form-item__label{
      width: 82px!important;
    } */
    .el-form-item{
      margin-bottom: 20px;
    }
    .el-dialog__footer{
      text-align: center;
    }
    
</style>