<template>
  <div id="app">
    <div>
      <div id="select-column">
        <div id="state-select-button-brand">
          <span>模块类型</span>
          <select v-model="moduleTypeSelected">
            <option v-for="item in moduleTypeData" v-bind:value="item.intValue">{{item.stateValue}}</option>
          </select>
          <!--<span>{{selected}}</span>-->
        </div>
        <div id="state-select-button-source">
          <span>状态</span>
          <select v-model="selected">
            <option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>
          </select>
          <!--<span>{{selected}}</span>-->
        </div>
        <div id="select-column-b">
          <span>模块ID</span>
          <input type="text" id="sectionId"  class="select-column-search" v-model="moduleId">
        </div>
        <div id="select-column-a">
          <span>模块名称</span>
          <input type="text" id="sectionName">
        </div>

        <div id="find-process-detail" style="float: right">
          <a id="find-process-detail-button" @click="getProcessDetail()">process detail</a>
        </div>
      </div>

    </div>

    <div id="add-management">
      <span id="add-management-span"><a id="add-management-add">新增</a></span>
      <span><a id="add-management-batch">批量新增</a></span>
    </div>

    <div id="process-detail">
      <el-table
        :data="tableData"
        style="width: 100%;font-size: 10px">
        <el-table-column
          prop="Id"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="processManageId"
          label="模块Id"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="模块名称"
          width="80">
        </el-table-column>
        <el-table-column
          prop="processExecutionContent"
          label="模块类型"
          width="120">
        </el-table-column>
        <!--假的--->
        <el-table-column
          prop="name"
          label="模板实现类"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="模板实现方法"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="模板TCPURP"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="80">
        </el-table-column>
        <el-table-column
          prop="createdBy"
          label="创建人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="gmtCreated"
          label="创建时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="modifyBy"
          label="更新人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="gmtModify"
          label="更新时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="operationEnums"
          label="操作"
          width="120">
        </el-table-column>
      </el-table>

    </div>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize">
    </el-pagination>
    <div style="clear:both"></div>
    <div style="clear:both"></div>

    <div id="entrance-manage-title">
      <h2 style="float: left;font-size: 16px;font-weight: bold">节点规则配置</h2>
    </div>

    <div style="clear:both"></div>
    <div id="process-manage-detail">

      <!--输入框-->
      <div id="select-column-entrance-name" class="select-column-entrance-group">
        <span>组合名称</span>
        <input type="text">
      </div>
      <div style="clear:both"></div>

      <div id="select-column-entrance-name-b" class="select-column-entrance-group">
        <span>组合描述</span>
        <input type="text">
      </div>
      <!--下拉框-->
      <div style="clear:both"></div>
      <div id="select-column-node-selection">
        <div id="select-column-section" class="select-column-section">
          <span>模块类型</span>
          <select v-model="selected">
            <option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>
          </select>
          <!--<span>{{selected}}</span>-->
        </div>
        <div style="clear:both"></div>

        <div id="select-column-section-b" class="select-column-section">
          <span>模块实现类</span>
          <select v-model="selected">
            <option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>
          </select>
          <!--<span>{{selected}}</span>-->
        </div>
      </div>


      <!--<div style="clear:both"></div>-->
      <br>
      <div style="clear:both"></div>

      <div style="clear:both"></div>

      <div id="rule-selection">
        <hr style="height:1px;border:none;border-top:1px solid #555555;width: 450px"/>
        <div style="clear:both"></div>
        <div id="next-step">
          <span><a id="next-step-button">下一步</a></span>
          <span><a id="finish-step-button">完成</a></span>
        </div>
      </div>


    </div>
    <br>

  </div>
</template>

<script>

  import config from '../../config/dev.config.js'
  import oneUtil from '../js/one.util'

  var HELLO = "boot/hello";
  var PROCESS_DETAIL = "find/get-process-detail";
  export default {


    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App M',
        email: 'there is never exist an email',
        value: "",
        object: [],
        selected: "",
        moduleTypeSelected: "",
        moduleTypeData: [
          {stateValue: 'A', intValue: '1'},
          {stateValue: 'B', intValue: '2'},
          {stateValue: 'C', intValue: '3'}
        ],

        items: [
          {stateValue: 'A', intValue: 'a'},
          {stateValue: 'B', intValue: 'b'},
          {stateValue: 'C', intValue: 'c'}
        ],
        tableData: [],
        pageSize: 3,
        total: 0,
        moduleId:""
      }
    },
    mounted() {
      this.getEmail();
    },
    methods: {
      getEmail() {
        this.$http.get(config.BASE_URL + HELLO, {
          headers: config.HEADERS
        }).then(function (response) {
          var result = oneUtil.handleJSON(response);
          console.log(result);
          this.object = result.data;


        }, function () {
          console.log("get email error")
        })
      },
      getProcessDetail() {

        //选择复选框中的值
        var selectValue = this.moduleTypeSelected;
        //获取input框里面的值
        var moduleId=this.moduleId;
        console.log(this.moduleId);
        this.$http.get(config.BASE_URL + PROCESS_DETAIL, {
          headers: config.HEADERS
        }).then(function (response) {

          var result = oneUtil.handleJSON(response);
          console.log(result);
          var res = response.body;
          console.log(res);
          this.tableData = result.data;


        })
      },
      executionContent() {
      }
    },


  }


</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #select-column {
    /*text-align: center;*/
    /*float: left;*/
    margin-left: 80px;
    margin-top: 90px;
    /*margin: auto;*/
    width: 80%;
    height: 70px;
    /*border: 1px solid gray;*/
    /*background: antiquewhite;*/

  }

  #select-column select {
    width: 76px;
  }

  #select-column span {
    width: 80.59px;
    float: left;
    font-weight: bold;
    text-align: center;
    /*line-height:23px;*/
  }

  #select-column-a, #select-column-b {
    float: left;
    width: 190px;
    margin-left: 0px;

  }

  #state-select-button, #state-select-button-brand, #state-select-button-source {
    float: left;
    width: 190px;
    /*margin-left: 20px;*/
    height: 60px;
  }

  h1, h2 {
    font-weight: normal;
    font-size: 18px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  #add {
    float: left;
    margin-top: 2%;
  }

  a {
    color: #42b983;
  }

  #entrance-manage-title, process-manage-detail {
    margin-left: 140px;
    width: 84%;
    background: beige;
  }

  #process-manage-detail {
    height: 100%;
  }

  #select-column-a input, #select-column-b input {
    width: 70px;
    margin-left: 5px;
    position: relative;

  }

  #select-column-a span, #select-column-b span {
    margin-left: 0px;
    float: left;
    font-weight: bold;
    position: relative;
  }

  /**
  下面是两个是button
   */

  #next-step-button, #finish-step-button, #add-management-add, #add-management-batch, #find-process-detail-button {
    background-color: powderblue; /* Green */
    /*border: 1px solid white;*/
    border-radius: 4px;
    color: white;

    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
      -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    margin-left: 20px;
  }

  #find-process-detail-button {
    padding: 4px 25.6px;
    background-color: powderblue; /* Green */

  }

  #next-step-button {
    padding: 4px 22px;

  }

  #find-process-detail {

  }

  #finish-step-button {
    padding: 4px 25.6px;
  }

  #add-management-add {
    padding: 4px 32px;
  }

  #add-management-batch {
    padding: 4px 21px;
  }

  #next-step {
    width: 100%;
  }

  #next-step-button:hover, #add-management-add:hover, #add-management-batch:hover, #find-process-detail-button:hover {
    background-color: gray;
    color: white;
  }

  #finish-step-button:hover {
    background-color: gray;
    color: white;
  }

  #selection-name, #execution-content，#selection-name h2 {
    float: left;
    width: 50%;
    height: 139px;

  }

  #rule-selection {
    margin-top: 1px;
    width: 400px;
    height: 30px;
    margin-left: 140px;

  }

  #rule-selection p {
    float: left;
  }

  #rule-selection p {
    float: left;;
    margin-left: 0px;
    width: 70px;
    height: 20px;
  }

  #rule-selection-title {
    border-top: 1px solid #B6AEA3;
    margin-left: 140px;
    margin-top: 30px;
    width: 450px;
    height: 30px;
  }

  #rule-selection-title h2 {
    float: left;;
    margin-left: 0px;
    width: 100px;
    height: 30px;
    text-align: center;
  }

  #selection-name p {
    float: top;
    width: 100%;
    height: 20px;
    font-size: 13px;
  }

  #rule-selection h2 {
    float: left;
    /*width: 33%;*/
    font-size: 15px;
    /*margin-left: 30%;*/
    text-align: center;
  }

  /**
  标签
   */
  #add-management {
    float: left;
    width: 88%;
    height: 50px;
    margin-top: 30px;
    margin-left: 70px;
  }

  #add-management span {
    float: left;

  }

  #add-management-span {
    margin-left: 0px;
  }

  #process-detail {
    margin-top: 30px;
    margin-left: 70px;
    width: 85%;
    height: 450px;
  }

  /**
  入口配置管理输入框,在此类别div 统一距离左边距是140px
   */
  #select-column-entrance-name, .select-column-entrance-group {
    float: left;
    width: 400px;
    height: 24px;
    margin-left: 140px;
  }

  #select-column-node-selection {
    float: left;
    width: 400px;
    height: 124px;
    margin-left: 140px;
  }

  #select-column-entrance-name, .select-column-entrance-group span {
    float: left;
    font-weight: bold;
  }

  #select-column-entrance-name input {
    width: 284px;
    border-radius: 2px;
    float: left;
    margin-left: 5px;
  }

  #select-column-entrance-name-b {
    float: left;
    width: 400px;
    height: 72px;
    margin-left: 140px;
  }

  #select-column-entrance-name-b input {
    width: 284px;
    border-radius: 2px;
    float: left;
    margin-left: 5px;
    height: 71px;
  }

  /**
  入口配置管理单选框
   */
  #select-column-entrance-city {
    width: 230px;
    float: left;
    margin-top: 10px;

  }

  .select-column-section {
    width: 280px;
    float: left;
    margin-top: 20px;

  }

  .select-column-section span, #select-column-entrance-city span {
    /*width: 85px;*/
    float: left;
    font-weight: bold;
    text-align: left;
  }

  .select-column-section span {
    width: 70px;
  }

  #select-column-entrance-city span {
    width: 82px;
    margin-left: 30px;
  }

  .select-column-section select {
    width: 177px;
    float: left;
    margin-left: 0px;
  }

  #select-column-entrance-city select {
    width: 87px;
    float: left;
  }

  /**
  多选框 签约管理
   */
  #selection-written-permission, #selection-bill-of-lading {
    float: left;
    width: 400px;
    margin-top: 20px;
    margin-left: 140px;

  }

  #selection-written-permission span, #selection-bill-of-lading span {
    float: left;
    font-weight: bold;

  }

  #selection-written-permission p, #selection-bill-of-lading p {
    float: left;
  }

  .product-select-multiple span {
    float: left;
  }

  .product-select-multiple select {
    width: 67px;
    float: left;
    margin-left: 10px;
  }

  #node-select-selection-button, #rule-selection {
    margin-top: 20px;
    float: left;
    margin-left: 140px;
    width: 450px;
  }

  /**
  构造横线竖线
   */
  #rule-selection-name, #rule-selection-execution {
    border-bottom: 1px solid #555555;
    border-top: 1px solid #555555;
  }

</style>
