<template>
  <div id="app">
    <!--<div class="layout">-->
    <!--<Layout>-->
    <!--<Header>Header</Header>-->
    <!--<Content>Content</Content>-->
    <!--<Footer>Footer</Footer>-->
    <!--</Layout>-->
    <!--</div>-->
    <Row style="height: 20px">
      <Col span="24">&nbsp;</Col>

    </Row>

    <Row style="">
      <Col span="2">&nbsp;</Col>

      <Col span="20">&nbsp;

        <Row style="">
          <Col span="5" id="select-column">
            <p> 流程配置ID：</p><Input v-model="procedureConfigId" placeholder="Enter something..." clearable
                                  style="width: 100px;height: 30px"></Input>
          </Col>
          <Col span="5" id="select-column-name">
            <p> 流程名称：</p><Input v-model="procedureName" placeholder="Enter something..." clearable
                                style="width: 100px"></Input>
          </Col>
          <Col span="5" id="select-column-state">
            <p> 状态：</p><Select v-model="defaultState" style="width:100px">
            <Option v-for="item in state" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          </Col>
          <Col span="5">&nbsp;</Col>
          <Col span="4" id="select-column-search">
            &nbsp;
            <Button type="primary" icon="ios-search" id="search" style="float: right" @click="findProcedure">Search</Button>
          </Col>
        </Row>
      </Col>
      <Col span="2">&nbsp;</Col>
    </Row>

    <br>
    <Row style="height: 33px">
      <Col span="2"></Col>
      <Col span="16">
        &nbsp;
      </Col>
      <Col span="4">
        &nbsp;
      </Col>
      <Col span="2">
        <!--<Button type="primary" icon="ios-search" id="search" style="float: left" @click="findProcedure">Search</Button>-->
      </Col>

    </Row>
    <Row>
      <Col span="1">&nbsp;</Col>
      <Col span="6">
        <Button type="primary" style="width: 90px" @click="show">add</Button>
        <Button type="primary" style="width: 90px">batch add</Button>
      </Col>
      <Col span="">&nbsp;</Col>
    </Row>
    <br>
    <Row>
      <Col span="2">&nbsp;</Col>
      <Col span="20">
        <Table border :columns="columns2" :data="procedureConfigData"></Table>
      </Col>
      <Col span="2">&nbsp;</Col>

    </Row>

    <br>

    <Row style="margin-top: 10px">
      <Col span="24">&nbsp;</Col>

    </Row>
    <Row style="margin-top: 10px">
      <Col span="24">
        <Page :page-size="pageRequest.pageSize" :current="pageRequest.currentPage" :total="pageRequest.count"
              @on-change="transferPage"
              @on-page-size-change="handlePageSize" show-total></Page>
        <!--<Page :current="2" :total="50"  show-elevator show-sizer></Page>-->

      </Col>

    </Row>

    <br>
    <!--<Row style="height: 30px">-->
    <!--<Col span="2">&nbsp;</Col>-->
    <!--&lt;!&ndash;<Col span="24" style="height: 50px">&nbsp;</Col>&ndash;&gt;-->
    <!--<Col span="10"><p>流程配置管理</p></Col>-->
    <!--<Col span="7">&nbsp;</Col>-->

    <!--</Row>-->
    <br>

    <!--下面是表单域-->
    <Row style="height: 500px">
      <Col span="2">&nbsp;</Col>
      <Col span="10">
      </Col>
      <!--<Col span="7">col-6</Col>-->
    </Row>

    <!--弹出的表单域-->
    <Modal
      :loading="loading"
      @on-ok="validateData"
      title="流程配置管理"
      v-model="procedureModal"
      :styles="{top: '20px'}">
      <Form ref="formItemData" :model="formItem" :label-width="80" label-position="left" :rules="ruleValidate">
        <FormItem label="流程名称" prop="procedureName">
          <Input v-model="formItem.procedureName" placeholder="Enter something..." clearable></Input>
        </FormItem>
        <FormItem label="节点模板选择" prop="select">
          <Select v-model="formItem.select" style="float: top">
            <!--<Option value="1">提单</Option>-->
            <!--<Option value="2">审核</Option>-->
            <Option v-for="item in nodeModelList" :value="item.value" :key="item.value" style="width: 100%">{{
              item.label }}
            </Option>

          </Select>
        </FormItem>

        <FormItem label="规则模板选择:">
          <Row style="height: 20px">
            <Col span="11">
            </Col>
            <Col span="2" style="text-align: center">&nbsp;</Col>
            <Col span="11">
            </Col>
          </Row>
        </FormItem>
        <!--<FormItem style="border-left: black;border-bottom:1px solid black;border-top:1px solid black;">-->
        <Row style="height: 29px;">
          <Col span="1" style="border-top: 1px solid gainsboro;border-bottom: 1px solid gainsboro;height: 100%">&nbsp;
          </Col>
          <Col span="6"
               style="border-top: 1px solid gainsboro;border-bottom: 1px solid gainsboro;text-align: center;border-right: 1px solid gainsboro;border-left: gainsboro; margin-top: 0px;height: 100%">
            <p>模板名称</p>
          </Col>
          <Col span="5"
               style="border-top: 1px solid gainsboro;border-bottom: 1px solid gainsboro;text-align: center;border-right: 1px solid gainsboro;border-left: gainsboro;height: 100%">
            <p>模板关系选择</p>
          </Col>
          <Col span="12"
               style="border-top: 1px solid gainsboro;border-bottom: 1px solid gainsboro;text-align: center;border-left: gainsboro;height: 100%">
            <p>包含规则</p>
          </Col>
        </Row>
        <!--</FormItem>-->
        <!--<FormItem style="border-bottom:1px solid black;">-->
        <Row style="height: 120px">
          <Col span="1" style="border-bottom: 1px solid gainsboro;height: 100%">
            <!--<Icon type="refresh" style="margin-top: 40px;size: 90px"></Icon>-->
          </Col>
          <Col span="6" style="border-bottom: 1px solid gainsboro;border-right: 1px solid gainsboro;height: 100%">
            <CheckboxGroup v-model="formItem.checkbox" style="text-align: left; margin-left: 20px;margin-top: 20px"
                           prop="checkbox" @on-change="checkCheck(1)">
              <Checkbox label="城市校验"></Checkbox>
              <Checkbox label="余额校验"></Checkbox>
              <Checkbox label="类别校验"></Checkbox>
            </CheckboxGroup>
          </Col>
          <Col span="5" style="border-bottom: 1px solid gainsboro;border-right: 1px solid gainsboro;height: 100%">
            <CheckboxGroup v-model="formItem.checkLogic" style="text-align: left;margin-left: 30px;margin-top: 20px"
                           @on-change="checkCheck(2)" prop="checkLogic">
              <Checkbox label="并"></Checkbox>
              <Checkbox label="或"></Checkbox>
              <Checkbox label="("></Checkbox>
              <br>
              <Checkbox label=")"></Checkbox>
            </CheckboxGroup>
          </Col>
          <Col span="12" id="resultDisplayArea"
               style="border-bottom: 1px solid gainsboro;height: 100%;text-align: center;
                 ">
            <div style="width: 100%;height: 30%;float: top;margin-top: 20px">
              {{guize}}
            </div>
            <div style="width: 100%;height: 50%;float: top;margin-top:20px">
              <Button type="dashed" shape="circle" icon="refresh"
                      @click="refreshText" style=""></Button>
              <!--<Icon type="chevron-down"></Icon>-->
              <Button type="dashed" shape="circle" icon="checkmark" @click="addNode"></Button>
            </div>

          </Col>
        </Row>
        <Row style="height: 30px">
          <Col span="4">&nbsp;<p>流程配置管理</p></Col>
          <!--<Col span="24" style="height: 50px">&nbsp;</Col>-->
          <Col span="10"></Col>
          <Col span="7">&nbsp;</Col>

        </Row>
        <Row>
          <Col span="24">
            <Table id="fuckThis" style="background: white" border :columns="columnsProcedure"
                   :data="procedureDetails"></Table>&nbsp;
          </Col>


        </Row>
      </Form>
    </Modal>
  </div>
</template>


<script>

  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import 'iview/dist/styles/iview.css'
  import config from '../../config/dev.config.js'
  import thisisjsonp from 'jsonp';


  export default {

    created() {
      //列表页获取数据
      this.getdata();
      //查询流程配置
      this.findProcedure();
      //修改后台的数据以供展示,将返回的数字类型构造成中文展示的数据
      this.initData();
    },

    methods: {
      //修改后台返回的数据,用来展示
      initData() {
        //
        var ladingBill = '提单';
        var examineVerify = '审核';
        var procedureDetails = this.procedureDetails;
        procedureDetails.forEach((obj) => {
          //遍历每一个对象
          if (obj.nodeType === '1') {
            obj.nodeType = ladingBill;
          } else if (obj.nodeType === '2') {
            obj.nodeType = examineVerify;

          }
        });
      },

      //确定校验,检验form表单里面的数据
      validateData(name) {

        setTimeout(() => {
          this.$refs.formItemData.validate((valid) => {
            if (valid) {
              //校验通过 首先保存数据
              this.saveProcedures();
              //验证返回状态
              var status = this.responseStatus;
              if (status) {
                //关闭表单
                this.procedureModal = false;
                this.$Message.success('Success!');
              } else {
                this.$Message.error('Fail!');
                this.loading = false;

              }

            } else {
              //关闭下面的按钮
              this.loading = false;
              // this.$Message.error('Fail!');
            }
          });
        }, 1000);
        //进行校验

      },
      //校验通过之后 要发送后台保存的请求
      saveProcedures() {
        //
        var request = [
          {
            id: 19,
            procedureConfigId: 18,
            nodeType: '1',
            procedureRules: 'fuck-------this'
          },
          {
            id: 20,
            procedureConfigId: 22,
            nodeType: '2',
            procedureRules: 'fuck-------that'
          },


        ];
        var params = {
            request: JSON.stringify(request),
          }
        ;

        alert(request);
        this.$http.get(
          "http://localhost:9501/procedure/save",//请求地址
          {
            params: params//参数
          },
          {
            emulateJSON: true,//是否是json
          }
        ).then(function (res) {
          var data = res.data;
          var code = data.code;
          if (code === 0) {
            this.responseStatus = true;
          } else {
            this.responseStatus = false;
          }
        }, function (res) {
          alert(res.status);
          this.responseStatus = false;
        });
      },


      //
      handlePageSize() {
        alert(11);
      },
      //转换页码
      transferPage(index) {
        //
        //index是要往第几页
        //那么currentPage需要改变
        this.pageRequest.currentPage = index;
        //而且下一页和上一页都需要改变
        // this.pageRequest.prevPage=
        this.findProcedure();
      }
      ,
      getdata() {


      },
      //寻找流程 根据条件
      findProcedure() {

        var pageRequest = this.pageRequest;
        var params = {
          prevPage: pageRequest.prevPage,
          nextPage: pageRequest.nextPage,
          pageSize: pageRequest.pageSize,
          count: pageRequest.count,
          currentPage: pageRequest.currentPage,

        };
        this.$http.get(
          "http://localhost:9501/procedure/test",//请求地址，有条件查询流程配置数据
          {
            params: params//参数
          },
          {
            emulateJSON: true//是否是json
          }).then(function (response) {
          //首先根据返回

          var result = response.data;
          var data = result.data;
          var code = result.code;
          var message = result.message;

          //如果是成功的返回,就会有关于分页的处理
          if (code === config.SUCCESS) {
            //如果没有任何信息
            var type = data.type;
            //如果是有提示，先打印提示
            if (type === config.INVALID) {

              this.$Message.warning(message);
            } else {
              //否则 就讲数据打印到页面上
              var count = data.count;
              var tableData = data.procedures;
              pageRequest.count = count;
              this.procedureConfigData = tableData;
              //判断当前的数据个数 以及当前页码大小
              //如果当前数据的个数 比每页显示的个数还要小的话，就显示一页
              //反之，就显示前十个
              // if (pageRequest.pageSize < tableData.length) {
              //   //如果数量小于当前页面，那么就在第一页将数据打上去
              //   this.procedureConfigData = tableData.slice(0, pageRequest.pageSize);
              //
              // }
            }

          } else {
            //否则弹出警告，并且在警告上打印出后台返回的信息
            this.$Message.warning(message);


          }


        })


      },

      //增加某个值到弹出框
      addNode() {
        //对象赋值做好
        var node = this.node;
        node.id = 1;
        node.nodeType = '提单';
        node.procedureRules = 'ben.yue';
        //最后的结果就是将这个对象放到顺序表里面去

        //刷新表格
        this.procedureDetails.push(node);
      }
      ,


      //删除弹出框中的某一个值
      removeNode(index) {
        var procedureDetails = this.procedureDetails;
        //删除一个数组
        procedureDetails.splice(index, 1);
      }
      ,

      //点击显示选框
      show(index) {
        // this.$Modal.info({
        //   title: 'User Info',
        //   content: ``
        // })
        //清空两个checkbox以及文本
        this.refreshText();
        this.procedureModal = true;
      }

      ,
      remove(index) {
        this.data6.splice(index, 1);
      }
      ,
      refreshText() {
        var checkBoxItem = this.formItem.checkbox;
        var checkLogicItem = this.formItem.checkLogic;
        for (let i = 0; i < 4; i++) {
          checkBoxItem.pop();
        }
        /**
         * 接着清除logic 勾选的逻辑
         */
        setTimeout(this.refreshLogic(checkLogicItem), 1);

      }
      ,

      realRefreshText() {
        this.guize = '';
      }
      ,
      //清除逻辑勾选
      refreshLogic(checkLogicItem) {

        //循环把顺序表中的内容抛出
        for (let i = 0; i < 4; i++) {
          checkLogicItem.pop();
        }


        /**
         * 最后才是清除文本
         */
        setTimeout(this.realRefreshText(), 1);

      }
      ,
      checkCheck(typeCheck) {

        var checkBoxItem = JSON.parse(JSON.stringify(this.formItem.checkbox));
        var checkLogicItem = JSON.parse(JSON.stringify(this.formItem.checkLogic));
        var checkBox = 1;
        var checkLogic = 2;
        //如果是敲击校验
        if (typeCheck == checkBox) {
          this.guize += checkBoxItem.pop();
        } else {

          this.guize += checkLogicItem.pop();
        }
        this.guize = this.guize.replace(",", "&nbsp;");
        this.guize += ' ';
        // alert(this.guize)


      }
    },
    name: 'app',
    data() {
      return {
        //控制结果返回状态
        responseStatus: false,
        //loading
        loading: true,
        //绑定表格的属性值
        formItemData: '',
        pageRequest: {
          prevPage: 0,
          nextPage: 0,
          pageSize: 5,
          count: 0,
          currentPage: 1,

        },

        //查询列表的字段
        // procedureTable:[
        //   'id',''
        // ],
        //流程配置ID
        procedureConfigId: "",
        //流程名称
        procedureName: "",
        //状态
        state: [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '有效'
          },
          {
            value: '2',
            label: '无效'
          },
          {
            value: '3',
            label: '删除'
          },
        ],
        //默认状态
        defaultState: '全部',

        node: {//这个对象用来承载用户点击对号生成的对象
          name: '',
          age:
            '',
          address:
            ''
        }
        ,
        procedureModal: false,
        guize:
          '',
        input2:
          '',
        input21:
          '',
        input22:
          '',
        input23:
          '',
        cityList:
          [
            {
              value: 'New York',
              label: 'New York'
            },
            {
              value: 'London',
              label: 'London'
            },
            {
              value: 'Sydney',
              label: 'Sydney'
            },
            {
              value: 'Ottawa',
              label: 'Ottawa'
            },
            {
              value: 'Paris',
              label: 'Paris'
            },
            {
              value: 'Canberra',
              label: 'Canberra'
            }
          ],
        nodeModelList: [
          {
            value: '1',
            label: '提单'
          },
          {
            value: '2',
            label: '审核'
          },
        ],
        model1:
          '',
        columnsProcedure:
          [
            {
              title: '序号',
              key: 'id',
              width: 142.33,

            },
            {
              title: '节点',
              key: 'nodeType',
              width: 101.66,

            },
            {
              title: '规则',
              key: 'procedureRules'
            },
            {
              title: '操作',
              key: 'action',
              fixed: 'right',
              width: 70,
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      // type: '',
                      size: 'small',
                      icon: 'close'
                    },
                    on: {
                      click: () => {
                        this.removeNode(params.index)
                      }
                    }

                  }),

                ]);
              }
            }
          ],
        procedureDetails:
          [
            {
              id: 19,
              procedureConfigId: 18,
              nodeType: '1',
              procedureRules: 'fuck-------this'
            },
            {
              id: 20,
              procedureConfigId: 22,
              nodeType: '2',
              procedureRules: 'fuck-------that'
            },


          ],
        columns2:
          [
            {
              title: '序号',
              key: 'id',
              width: 60,
              fixed: 'left'
            },
            {
              title: '流程配置ID',
              key: 'procedureConfigId',
              width: 100
            },
            {
              title: '流程名称',
              key: 'procedureName',
              width: 100
            },
            {
              title: '流程执行过程',
              key: 'procedureExecution',
              width: 130
            },
            {
              title: '状态',
              key: 'state',
              width: 70
            },
            {
              title: '创建人',
              key: 'createdBy',
              width: 100
            },
            {
              title: '创建时间',
              key: 'gmtCreated',
              width: 100
            },
            {
              title: '更新人',
              key: 'modifyBy',
              width: 100
            },
            {
              title: '更新时间',
              key: 'gmtModify',
              width: 100
            },
            {
              title: '操作',
              key: 'action',
              fixed: 'right',
              width: 120,
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.show(params.index)
                      }
                    }
                  }, 'View'),
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                      }
                    }
                  }, 'Edit')
                ]);
              }
            }
          ],
        procedureConfigData:
          [],
        //下面是form表单
        formItem:
          {
            procedureName: '',
            select:
              '',
            radio:
              'male',
            checkbox:
              [],
            checkLogic:
              [],
            switch:
              true,
            date:
              '',
            time:
              '',
            slider:
              [20, 50],
            textarea:
              ''
          },
        //数据校验
        ruleValidate: {
          procedureName: [
            {required: true, message: '请填写流程名称', trigger: 'blur'}
          ],
          select: [
            {required: true, message: '请填写节点模板', trigger: 'change'}
          ],

          checkbox: [
            {required: true, type: 'array', min: 1, message: '请选择至少一个模板名称', trigger: 'change'},
            {type: 'array', max: 4, message: 'Choose two hobbies at best', trigger: 'change'}
          ],
          checkLogic: [
            {required: true, type: 'array', min: 1, message: '请选择至少一个模板关系', trigger: 'change'},
            {type: 'array', max: 4, message: '请选择至少一种逻辑', trigger: 'change'}
          ],

        }

      }

    }
    ,


  }


</script>


<style>


  #fuckThis td, #fuckThis th {
    background: white;
  }

  .ivu-table-header {
    background: white;
  }

  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ivu-modal {
    top: 0;
  }

  <!--
  查询按钮的布局-- >
  #select-column-search {
    margin-top: 40px;
  }

  .ivu-row {
    height: 84px;
  }

  <!--
  这是上面搜索栏里面的三个-- >
  #select-column, #select-column-name, #select-column-state {
    height: 100px;
    width: 190px;
  }

  #select-column p, #select-column-name p, #select-column-state p {
    float: left;
    text-align: center;
    font-size: 14px;
    margin-left: 5px;
  }

  #select-column p, #select-column-name p, #select-column-state p {
    margin-top: 5px;

  }

  .fuck, .el-input {
    width: 100px;
    height: 30px;
    margin-left: 0px;
    margin-top: 0px;
  }

  .layout {
    height: 900px;
  }

  .ivu-layout-header, ivu-layout-content, .Content {
    height: 90px;
  }

  .ivu-layout-content {
    height: 60%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;

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

  a {
    color: #42b983;
  }


</style>
