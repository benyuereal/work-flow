<!--<template>-->
  <!--<div id="app">-->
    <!--<div>-->
      <!--<div id="select-column">-->
        <!--<div id="state-select-button-brand">-->
          <!--<span>品牌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>-->
          <!--<select v-model="selected">-->
            <!--<option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>-->
          <!--</select>-->
          <!--&lt;!&ndash;<span>{{selected}}</span>&ndash;&gt;-->
        <!--</div>-->
        <!--<div id="state-select-button-source">-->
          <!--<span>订单来源</span>-->
          <!--<select v-model="selected">-->
            <!--<option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>-->
          <!--</select>-->
          <!--&lt;!&ndash;<span>{{selected}}</span>&ndash;&gt;-->
        <!--</div>-->
        <!--&lt;!&ndash;下拉框&ndash;&gt;-->
        <!--<div id="state-select-button">-->
          <!--<span>签单类型</span>-->
          <!--<select v-model="selected">-->
            <!--<option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>-->
          <!--</select>-->
          <!--&lt;!&ndash;<span>{{selected}}</span>&ndash;&gt;-->
        <!--</div>-->
        <!--<div id="select-column-a">-->
          <!--<span>流程配置ID</span>-->
          <!--<input type="text" id="processId">-->
        <!--</div>-->

        <!--<div id="find-process-detail" style="float: right">-->
          <!--<a id="find-process-detail-button" @click="getProcessDetail()">process detail</a>-->
        <!--</div>-->
      <!--</div>-->

    <!--</div>-->

    <!--<div id="add-management">-->
      <!--<span id="add-management-span"><a id="add-management-add">新增</a></span>-->
      <!--<span><a id="add-management-batch">批量新增</a></span>-->
    <!--</div>-->

    <!--<div id="process-detail">-->
      <!--<el-table-->
        <!--:data="tableData"-->
        <!--style="width: 100%;font-size: 10px">-->
        <!--<el-table-column-->
          <!--prop="Id"-->
          <!--label="序号"-->
          <!--width="80">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="processManageId"-->
          <!--label="入口ID"-->
          <!--width="80">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="name"-->
          <!--label="品牌"-->
          <!--width="80">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="processExecutionContent"-->
          <!--label="适用城市"-->
          <!--width="120">-->
        <!--</el-table-column>-->
        <!--&lt;!&ndash;假的-&ndash;&gt;-->
        <!--<el-table-column-->
          <!--prop="name"-->
          <!--label="订单来源"-->
          <!--width="80">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="name"-->
          <!--label="签单来源"-->
          <!--width="80">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="name"-->
          <!--label="流程配置ID"-->
          <!--width="100">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="state"-->
          <!--label="状态"-->
          <!--width="80">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="createdBy"-->
          <!--label="创建人"-->
          <!--width="120">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="gmtCreated"-->
          <!--label="创建时间"-->
          <!--width="120">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="modifyBy"-->
          <!--label="更新人"-->
          <!--width="120">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="gmtModify"-->
          <!--label="更新时间"-->
          <!--width="120">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="operationEnums"-->
          <!--label="操作"-->
          <!--width="120">-->
        <!--</el-table-column>-->
      <!--</el-table>-->

    <!--</div>-->
    <!--<el-pagination-->
      <!--small-->
      <!--layout="prev, pager, next"-->
      <!--:total="total"-->
      <!--:page-size="pageSize">-->
    <!--</el-pagination>-->
    <!--<div style="clear:both"></div>-->
    <!--<div style="clear:both"></div>-->

    <!--<div id="entrance-manage-title">-->
      <!--<h2 style="float: left;font-size: 16px;font-weight: bold">入口配置管理</h2>-->
    <!--</div>-->

    <!--<div style="clear:both"></div>-->
    <!--<div id="process-manage-detail">-->

      <!--&lt;!&ndash;输入框&ndash;&gt;-->
      <!--<div id="select-column-entrance-name">-->
        <!--<span>入口名称</span>-->
        <!--<input type="text" >-->
      <!--</div>-->
      <!--&lt;!&ndash;下拉框&ndash;&gt;-->
      <!--<div style="clear:both"></div>-->
      <!--<div id="select-column-node-selection">-->
      <!--<div id="select-column-section">-->
        <!--<span>品牌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>-->
        <!--<select v-model="selected">-->
          <!--<option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>-->
        <!--</select>-->
        <!--&lt;!&ndash;<span>{{selected}}</span>&ndash;&gt;-->
      <!--</div>-->
      <!--<div id="select-column-entrance-city">-->
        <!--<span>订单来源</span>-->
        <!--<select v-model="selected">-->
          <!--<option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>-->
        <!--</select>-->
        <!--&lt;!&ndash;<span>{{selected}}</span>&ndash;&gt;-->
      <!--</div>-->
      <!--</div>-->
      <!--<div style="clear:both"></div>-->
      <!--&lt;!&ndash;签单&ndash;&gt;-->
      <!--<div id="selection-written-permission">-->
        <!--<p class="select-button-p">签单类型</p>-->

        <!--<p><input type="checkbox" id="new" value="Bike" class="select-input-first"/> 新签</p>-->
        <!--<p><input type="checkbox" id="continue" value="Car"/>续签</p>-->
      <!--</div>-->

      <!--<div style="clear:both"></div>-->

      <!--&lt;!&ndash;提单&ndash;&gt;-->
      <!--<div id="selection-bill-of-lading">-->
        <!--<p class="select-button-p">提单入口</p>-->

        <!--<p><input type="checkbox" id="all" value="Bike" class="select-input-first"/> 全部</p>-->
        <!--<p><input type="checkbox" id="online" value="Car"/>在线提单</p>-->
        <!--<p><input type="checkbox" id="bc" value="Car"/>BC提单</p>-->

      <!--</div>-->
      <!--<div style="clear:both"></div>-->

      <!--&lt;!&ndash;商品类型、商品线&ndash;&gt;-->
      <!--<div id="node-select-selection-button" style="float: top;margin-top: 40px">-->


          <!--<div class="product-select-multiple">-->
          <!--<span>商品类型</span>-->
          <!--<select v-model="selected">-->
            <!--<option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>-->
          <!--</select>-->
          <!--&lt;!&ndash;<span>{{selected}}</span>&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="product-select-multiple">-->
          <!--<span>商品线</span>-->
          <!--<select v-model="selected">-->
            <!--<option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>-->
          <!--</select>-->
          <!--&lt;!&ndash;<span>{{selected}}</span>&ndash;&gt;-->
        <!--</div>-->
        <!--&lt;!&ndash;下拉框&ndash;&gt;-->
        <!--<div class="product-select-multiple">-->
          <!--<span>商品线</span>-->
          <!--<select v-model="selected">-->
            <!--<option v-for="item in items" v-bind:value="item.intValue">{{item.stateValue}}</option>-->
          <!--</select>-->
          <!--&lt;!&ndash;<span>{{selected}}</span>&ndash;&gt;-->
        <!--</div>-->
        <!--</div>-->
      <!--&lt;!&ndash;<div style="clear:both"></div>&ndash;&gt;-->
      <!--<br>-->
      <!--<div style="clear:both"></div>-->

      <!--&lt;!&ndash;模块规则的div&ndash;&gt;-->
      <!--<div id="rule-selection-title">-->
        <!--<h2 style="font-size: 16px;float: left;font-weight: bold">流程配置ID:</h2>-->
      <!--</div>-->
      <!--<div style="clear:both"></div>-->

      <!--<div id="rule-selection">-->
        <!--<div id="rule-selection-name">-->
          <!--<h2 style="font-weight: bold;float: left;width: 40px">ID</h2>-->
        <!--</div>-->
        <!--<div id="rule-selection-execution">-->
          <!--<h2 id="rule-selection-execution-h2" style="font-weight: bold">详情</h2>-->
        <!--</div>-->

        <!--<div id="selection-name">-->

          <!--<p><input type="checkbox" id="check-name" value="Bike"/> 城市校验</p>-->
          <!--<p><input type="checkbox" id="check-remaining-money" value="Car"/>余额校验</p>-->
          <!--<p><input type="checkbox" id="check-type" value="Car"/>类别校验</p>-->
        <!--</div>-->

        <!--<div id="execution-content">-->
          <!--A wailing sound; a wailing sound.-->

          <!--The poem "Xiaoya Hongyan": "the swan goose is flying, the mourning is loud." <br/>, "Lu Deming explains,"-->
          <!--"Ben, Ben is crying again." Gao Heng's note: "! Whining, the goose mourn. "-->

          <!--Tang Du Fu's poem "to send a soldier to the state to join the army" is "ten thousand square mournful cry, 10-->
          <!--troops feeding."-->

          <!--Song Ouyangxiu's poem "green bamboo hall alone drink": "the flowers are not seen for a day, and the east wind-->
          <!--sends crying.-->

          <!--Qing Zhao wing "the second wheat will receive the heavy rain in the heavy rain" poem: "rice prices are high,-->
          <!--and the eaves are waiting to feed."-->

          <!--In contemporary 1981, phase 4: "the old woman put her head on her son's shoulder and suddenly cried loudly."-->

          <!--Call the voice; cry.-->

          <!--"Chu Ci, 9 sigh, cherish Xian": "the voice is scream with the loneliness, and the servant's gaunt." Wang-->
          <!--Yizhu: "Oh, the cry, too."-->

          <!--Tube Birch "little hero rain": "the officer with flat nose jumped up in anger, howling," shoot! It's shot! ''-->

          <!--A grieving voice-->

          <!--Han Jia Yi's theory of "passing the Qin Dynasty": "the husband is cold, the benefit is short and brown, and-->
          <!--the hungry is sweet and chaff, the world is full of money, and the new owner's capital is also."-->

          <!--"The history of the book of Qin Shihuang" as the "whining".-->

          <!--Jin Ge Hong "Bao Pu Zi": "the villain road is long, but it is so loud, so the song is not done, so the cry is-->
          <!--so loud."-->

          <!--"Zhi Zhi Tong Jian, Jin Mu Di Sheng Ping first year": "the Lord loses virtue, the upper and lower are scream,-->
          <!--and the people cherish different ambitions." Hu three provinces note: "whining, the voices of all voices."-->

          <!--Describe the noise of the crowd-->

          <!--Han Shu Liu Xiangchuan: "innocent, innocent and slander." Yan Shi Gu's note: "there are many voices."-->

          <!--The Three Kingdoms Cao Zhi's "beauty chapter": "beautiful people admire high justice, seek virtuous and hard.-->
          <!--All the people are crying.-->

          <!--Liang Qichao's "the petitions Congress is parallel to the petitioner government": "if the husband is in full-->
          <!--view to look forward to the government, the government will be exiled to the government, and then the-->
          <!--government is the commoner." [1]-->


        <!--</div>-->
        <!--<hr style="height:1px;border:none;border-top:1px solid #555555;width: 450px"/>-->
        <!--<div style="clear:both"></div>-->
        <!--<div id="next-step">-->
          <!--<span><a id="next-step-button">下一步</a></span>-->
          <!--<span><a id="finish-step-button">完成</a></span>-->
        <!--</div>-->
      <!--</div>-->


    <!--</div>-->
    <!--<br>-->

  <!--</div>-->
<!--</template>-->

<!--<script>-->

  <!--import config from '../../config/dev.config.js'-->
  <!--import oneUtil from '../js/one.util'-->

  <!--var HELLO = "boot/hello";-->
  <!--var PROCESS_DETAIL = "find/get-process-detail";-->
  <!--export default {-->


    <!--name: 'app',-->
    <!--data() {-->
      <!--return {-->
        <!--msg: 'Welcome to Your Vue.js App M',-->
        <!--email: 'there is never exist an email',-->
        <!--value: "",-->
        <!--object: [],-->
        <!--selected: "",-->
        <!--items: [{stateValue: 'A', intValue: 'a'}, {stateValue: 'B', intValue: 'b'}, {stateValue: 'C', intValue: 'c'}],-->
        <!--tableData: [],-->
        <!--pageSize: 3,-->
        <!--total: 0-->
      <!--}-->
    <!--},-->
    <!--mounted() {-->
      <!--this.getEmail();-->
    <!--},-->
    <!--methods: {-->
      <!--getEmail() {-->
        <!--this.$http.get(config.BASE_URL + HELLO, {-->
          <!--headers: config.HEADERS-->
        <!--}).then(function (response) {-->
          <!--var result = oneUtil.handleJSON(response);-->
          <!--console.log(result);-->
          <!--this.object = result.data;-->


        <!--}, function () {-->
          <!--console.log("get email error")-->
        <!--})-->
      <!--},-->
      <!--getProcessDetail() {-->

        <!--this.$http.get(config.BASE_URL + PROCESS_DETAIL, {-->
          <!--headers: config.HEADERS-->
        <!--}).then(function (response) {-->

          <!--var result = oneUtil.handleJSON(response);-->
          <!--console.log(result);-->
          <!--var res = response.body;-->
          <!--console.log(res);-->
          <!--this.tableData = result.data;-->


        <!--})-->
      <!--},-->
      <!--executionContent() {-->
      <!--}-->
    <!--},-->


  <!--}-->


<!--</script>-->


<!--<style>-->
  <!--#app {-->
    <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
    <!-- -webkit-font-smoothing: antialiased;-->
    <!-- -moz-osx-font-smoothing: grayscale;-->
    <!--text-align: center;-->
    <!--color: #2c3e50;-->
    <!--margin-top: 60px;-->
  <!--}-->

  <!--#select-column {-->
    <!--/*text-align: center;*/-->
    <!--/*float: left;*/-->
    <!--margin-left: 80px;-->
    <!--margin-top: 90px;-->
    <!--/*margin: auto;*/-->
    <!--width: 80%;-->
    <!--height: 70px;-->
    <!--/*border: 1px solid gray;*/-->
    <!--/*background: antiquewhite;*/-->

  <!--}-->
  <!--#select-column select{-->
    <!--width: 76px;-->
  <!--}-->
  <!--#select-column span{-->
    <!--width: 80.59px;-->
    <!--float: left;-->
    <!--font-weight: bold;-->
    <!--text-align: center;-->
    <!--/*line-height:23px;*/-->
  <!--}-->

  <!--#select-column-a, #select-column-b {-->
    <!--float: left;-->
    <!--width: 190px;-->
    <!--margin-left: 0px;-->

  <!--}-->

  <!--#state-select-button ,#state-select-button-brand,#state-select-button-source{-->
    <!--float: left;-->
    <!--width: 190px;-->
    <!--/*margin-left: 20px;*/-->
    <!--height: 60px;-->
  <!--}-->

  <!--h1, h2 {-->
    <!--font-weight: normal;-->
    <!--font-size: 18px;-->
  <!--}-->

  <!--ul {-->
    <!--list-style-type: none;-->
    <!--padding: 0;-->
  <!--}-->

  <!--li {-->
    <!--display: inline-block;-->
    <!--margin: 0 10px;-->
  <!--}-->

  <!--#add {-->
    <!--float: left;-->
    <!--margin-top: 2%;-->
  <!--}-->

  <!--a {-->
    <!--color: #42b983;-->
  <!--}-->

  <!--#entrance-manage-title, process-manage-detail {-->
    <!--margin-left: 140px;-->
    <!--width: 84%;-->
    <!--background: beige;-->
  <!--}-->

  <!--#process-manage-detail {-->
    <!--height: 100%;-->
  <!--}-->


  <!--#select-column-a input, #select-column-b input {-->
    <!--width: 70px;-->
    <!--margin-left: 5px;-->
    <!--position: relative;-->

  <!--}-->

  <!--#select-column-a span, #select-column-b span {-->
    <!--margin-left: 0px;-->
    <!--float: left;-->
    <!--font-weight: bold;-->
    <!--position: relative;-->
  <!--}-->

  <!--/**-->
  <!--下面是两个是button-->
   <!--*/-->

  <!--#next-step-button, #finish-step-button, #add-management-add, #add-management-batch, #find-process-detail-button {-->
    <!--background-color: powderblue; /* Green */-->
    <!--/*border: 1px solid white;*/-->
    <!--border-radius: 4px;-->
    <!--color: white;-->

    <!--text-align: center;-->
    <!--text-decoration: none;-->
    <!--display: inline-block;-->
    <!--font-size: 16px;-->
    <!--margin: 4px 2px;-->
    <!-- -webkit-transition-duration: 0.4s; /* Safari */-->
    <!--transition-duration: 0.4s;-->
    <!--cursor: pointer;-->
    <!--margin-left: 20px;-->
  <!--}-->

  <!--#find-process-detail-button {-->
    <!--padding: 4px 25.6px;-->
    <!--background-color: powderblue; /* Green */-->

  <!--}-->

  <!--#next-step-button {-->
    <!--padding: 4px 22px;-->

  <!--}-->

  <!--#find-process-detail {-->

  <!--}-->

  <!--#finish-step-button {-->
    <!--padding: 4px 25.6px;-->
  <!--}-->

  <!--#add-management-add {-->
    <!--padding: 4px 32px;-->
  <!--}-->

  <!--#add-management-batch {-->
    <!--padding: 4px 21px;-->
  <!--}-->

  <!--#next-step {-->
    <!--width: 100%;-->
  <!--}-->

  <!--#next-step-button:hover, #add-management-add:hover, #add-management-batch:hover, #find-process-detail-button:hover {-->
    <!--background-color: gray;-->
    <!--color: white;-->
  <!--}-->

  <!--#finish-step-button:hover {-->
    <!--background-color: gray;-->
    <!--color: white;-->
  <!--}-->

  <!--#selection-name, #execution-content，#selection-name h2 {-->
    <!--float: left;-->
    <!--width: 50%;-->
    <!--height: 139px;-->

  <!--}-->

  <!--#execution-content {-->
    <!--width: 222px;-->
    <!--overflow: hidden;-->
    <!--white-space: nowrap;-->
    <!--text-overflow: ellipsis;-->
    <!-- -o-text-overflow: ellipsis;-->
    <!--font-size: 12px;-->
    <!--word-wrap: break-word;-->
    <!--/*clear:both;*/-->
  <!--}-->

  <!--#rule-selection-execution {-->
    <!--float: left;-->
    <!--width: 222px;-->
  <!--}-->

  <!--#rule-selection-name, #selection-name {-->
    <!--border-right: 1px solid #B6AEA3;-->
    <!--float: left;-->
    <!--width: 225px;-->

  <!--}-->

  <!--#rule-selection{-->
    <!--margin-top: 1px;-->
    <!--width: 400px;-->
    <!--height: 30px;-->
    <!--margin-left: 140px;-->


  <!--}-->


  <!--#rule-selection p {-->
    <!--float: left;-->
  <!--}-->

  <!--#rule-selection p {-->
    <!--float: left;;-->
    <!--margin-left: 0px;-->
    <!--width: 70px;-->
    <!--height: 20px;-->
  <!--}-->
  <!--#rule-selection-title{-->
    <!--border-top:1px solid #B6AEA3;-->
    <!--margin-left: 140px;-->
    <!--margin-top: 30px;-->
    <!--width: 450px;-->
    <!--height: 30px;-->
  <!--}-->
  <!--#rule-selection-title h2 {-->
    <!--float: left;;-->
    <!--margin-left: 0px;-->
    <!--width: 100px;-->
    <!--height: 30px;-->
    <!--text-align: center;-->
  <!--}-->

  <!--#selection-name p {-->
    <!--float: top;-->
    <!--width: 100%;-->
    <!--height: 20px;-->
    <!--font-size: 13px;-->
  <!--}-->

  <!--#rule-selection h2 {-->
    <!--float: left;-->
    <!--/*width: 33%;*/-->
    <!--font-size: 15px;-->
    <!--/*margin-left: 30%;*/-->
    <!--text-align: center;-->
  <!--}-->

  <!--/**-->
  <!--标签-->
   <!--*/-->
  <!--#add-management {-->
    <!--float: left;-->
    <!--width: 88%;-->
    <!--height: 50px;-->
    <!--margin-top: 30px;-->
    <!--margin-left: 70px;-->
  <!--}-->

  <!--#add-management span {-->
    <!--float: left;-->

  <!--}-->

  <!--#add-management-span {-->
    <!--margin-left: 0px;-->
  <!--}-->

  <!--#process-detail {-->
    <!--margin-top: 30px;-->
    <!--margin-left: 70px;-->
    <!--width: 85%;-->
    <!--height: 450px;-->
  <!--}-->

  <!--/**-->
  <!--入口配置管理输入框,在此类别div 统一距离左边距是140px-->
   <!--*/-->
  <!--#select-column-entrance-name,#select-column-node-selection{-->
    <!--float: left;-->
    <!--width: 400px;-->
    <!--height: 24px;-->
    <!--margin-left: 140px;-->
  <!--}-->
  <!--#select-column-entrance-name span{-->
    <!--float: left;-->
    <!--font-weight: bold;-->
  <!--}-->

  <!--#select-column-entrance-name input{-->
    <!--width: 284px;-->
    <!--border-radius: 2px;-->
    <!--float: left;-->
    <!--margin-left: 5px;-->
  <!--}-->
  <!--/**-->
  <!--入口配置管理单选框-->
   <!--*/-->
  <!--#select-column-entrance-city{-->
    <!--width: 230px;-->
    <!--float: left;-->
    <!--margin-top: 10px;-->

  <!--}-->
  <!--#select-column-section{-->
    <!--width: 160px;-->
    <!--float: left;-->
    <!--margin-top: 10px;-->

  <!--}-->
  <!--#select-column-section span,#select-column-entrance-city span{-->
    <!--/*width: 85px;*/-->
    <!--float: left;-->
    <!--font-weight: bold;-->
    <!--text-align: left;-->
  <!--}-->
  <!--#select-column-section span{-->
    <!--width: 70px;-->
  <!--}-->
  <!--#select-column-entrance-city span{-->
    <!--width: 82px;-->
    <!--margin-left: 30px;-->
  <!--}-->
  <!--#select-column-section select{-->
    <!--width: 77px;-->
    <!--float: left;-->
    <!--margin-left: 0px;-->
  <!--}-->
  <!--#select-column-entrance-city select{-->
    <!--width: 87px;-->
    <!--float: left;-->
  <!--}-->


  <!--/**-->
  <!--多选框 签约管理-->
   <!--*/-->
  <!--#selection-written-permission,#selection-bill-of-lading{-->
    <!--float: left;-->
    <!--width: 400px;-->
    <!--margin-top: 20px;-->
    <!--margin-left: 140px;-->

  <!--}-->

  <!--#selection-written-permission span,#selection-bill-of-lading span{-->
    <!--float: left;-->
    <!--font-weight: bold;-->


  <!--}-->
  <!--#selection-written-permission p,#selection-bill-of-lading p{-->
    <!--float: left;-->
  <!--}-->

  <!--/**-->
  <!--多选框提单类型-->
   <!--*/-->
  <!--.select-button-p{-->
    <!--font-weight:bold ;-->
  <!--}-->
  <!--.select-input-first{-->
    <!--margin-left: 20px;-->
  <!--}-->
  <!--/**-->
  <!--商品类型、商品线选择框-->
   <!--*/-->
  <!--.product-select-multiple{-->
    <!--width: 150px;-->
    <!--float: left;-->
  <!--}-->
  <!--.product-select-multiple span{-->
    <!--float: left;-->
  <!--}-->
  <!--.product-select-multiple select{-->
    <!--width: 67px;-->
    <!--float: left;-->
    <!--margin-left: 10px;-->
  <!--}-->
  <!--#node-select-selection-button,#rule-selection{-->
    <!--margin-top: 20px;-->
    <!--float: left;-->
    <!--margin-left: 140px;-->
    <!--width: 450px;-->
  <!--}-->
  <!--/**-->
  <!--构造横线竖线-->
   <!--*/-->
  <!--#rule-selection-name,#rule-selection-execution{-->
    <!--border-bottom: 1px solid #555555 ;-->
    <!--border-top: 1px solid #555555 ;-->
  <!--}-->

<!--</style>-->
