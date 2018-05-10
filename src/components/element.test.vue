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
            <Button type="primary" icon="ios-search" id="search" style="float: right" @click="findProcedure">Search
            </Button>
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
        <Button type="primary" style="width: 90px" @click="addProcedure">add</Button>
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
      <Form ref="formItem" :model="formItem"  label-position="left" :rules="ruleValidate">
        <FormItem label="流程名称" prop="procedureName">
          <Input v-model="formItem.procedureName" placeholder="Enter something..." clearable
                 :disabled="disableFlag"></Input>
        </FormItem>
        <FormItem label="节点模板选择" prop="select">
          <Select v-model="formItem.select" style="float: top" :disabled="disableFlag">
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
            <form-item style="height: 120px" prop="checkArraySelected">
            <CheckboxGroup v-model="formItem.checkArraySelected"
                           style="text-align: left; margin-left:0px;margin-top: 10px;width: 150px"
                           prop="checkArraySelected" @on-change="changeCheckOrLogic">
              <Checkbox v-for="item in checkArray" :label="item" :disabled="disableFlag" style="width: 100px;float: left">{{ item }}</Checkbox>
            </CheckboxGroup>
            </form-item>
          </Col>
          <Col span="5" style="border-bottom: 1px solid gainsboro;border-right: 1px solid gainsboro;height: 100%">
            <form-item style="height: 120px" prop="logicArraySelected" >

            <CheckboxGroup v-model="formItem.logicArraySelected"
                           style="text-align: left;margin-left: 30px;margin-top: 10px"
                           @on-change="changeCheckOrLogic" prop="logicArraySelected" disabled="disableFlag">
              <Checkbox v-for="item in logicArray" :label="item" :disabled="disableFlag" style="">{{ item }}</Checkbox>


            </CheckboxGroup>
            </form-item>

          </Col>
          <Col span="12" id="resultDisplayArea"
               style="border-bottom: 1px solid gainsboro;height: 100%;text-align: center;
                 ">
            <div style="width: 100%;height: 30%;float: top;margin-top: 20px" :disabled="disableFlag">
              {{ruleText}}
            </div>
            <div style="width: 100%;height: 50%;float: top;margin-top:20px">
              <Button type="dashed" shape="circle" icon="refresh"
                      @click="refreshText" style="" :disabled="disableFlag"></Button>
              <!--<Icon type="chevron-down"></Icon>-->
              <Button type="dashed" shape="circle" icon="checkmark" @click="addNode" :disabled="disableFlag"></Button>
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
                   :data="procedureDetails" :disabled="disableFlag"></Table>&nbsp;
          </Col>


        </Row>
      </Form>
      <div slot="footer">
        <Button type="primary" size="small" style="width: 60px" @click="centerDialogVisible = false">取消</Button>

        <Button type="primary" size="small" style="width: 60px" :loading="procedureLoading"
                @click="validateProcedureData">确定
        </Button>
        <!--<Button type="error" size="large" long :loading="" @click="del">Delete</Button>-->
      </div>
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
      this.initLatestArray();
    },

    methods: {
      validateProcedureData() {
        this.procedureLoading = true;

        //点击增加验证
        setTimeout(() => {
          this.$refs.formItem.validate((valid) => {
            if (valid) {
              //校验通过 首先保存数据
              this.saveProcedures();
              //验证返回状态
              var status = this.validateStatus;
              if (status) {
                //关闭表单
                this.procedureModal = false;
                this.$Message.success('Success!');
              } else {
                this.$Message.warning(this.warningMessage);
              }

            } else {
              //关闭下面的按钮
              this.procedureLoading = false;
              this.$Message.error('缺少信息!');
            }
          });
        }, 1000);


      },

      //初始化最新数组大小
      initLatestArray() {
        //初始化的时候,需要初始化上次的大小
        this.latestCheckSelected = JSON.parse(JSON.stringify(this.formItem.checkArraySelected));
        this.latestLogicSelected = JSON.parse(JSON.stringify(this.formItem.logicArraySelected));
      },

      getNodeModel(selected) {
        var nodeList = this.nodeModelList;
        nodeList.forEach(value => {
          if (value.label === selected) {
            this.formItem.select = value.value;

          }
        })
      }
      ,
      //本方法用来处理展示规则
      getRulesText(content) {

        var ruleArray = [];
        //按照
        ruleArray = content.split(' ');
        var logicArray = this.logicArray;
        var checkArray = this.checkArray;
        //上面两个数组用来承载
        //首先是从 规则校验中筛选出被选中的内容
        checkArray.forEach(value => {
          var checkModel = value;
          ruleArray.forEach(rule => {
            if (rule === checkModel) {
              //如果满足入参数组和校验数组中的元素匹配，就打在选中的校验数组中
              this.formItem.checkArraySelected.push(checkModel);

            }
          })
        });
        //类似的 再从逻辑规则中筛选出被选中的部分
        logicArray.forEach(value => {
          var logicModel = value;
          ruleArray.forEach(rule => {
            if (rule === logicModel) {
              //如果满足入参数组和校验数组中的元素匹配，就打在选中的校验数组中
              this.formItem.logicArraySelected.push(logicModel);
            }
          })
        });
        //然后将所有内容展示到面板上面
        this.ruleText = content;
        this.initLatestArray();


      },
      displayTablebeData(entity) {
        var procedureDetails = this.procedureDetails;
        procedureDetails.push({
          id: entity.id,
          procedureConfigId: entity.procedureConfigId,
          modelType: entity.modelType,
          procedureExecution: entity.procedureExecution
        });
      },
      //根据流程配置ID和节点来查询
      viewProcedureDetail(index, viewFlag) {
        var entity = this.procedureConfigData[index];
        //然后将整个form表单清空一下
        this.$refs.formItem.resetFields();
        //表格也清空
        this.procedureDetails = [];
        //将表单置灰色
        this.disableFlag = viewFlag;
        //然后把数据打上去
        var form = this.formItem;
        this.formItem.procedureName = entity.procedureConfigId;
        this.getNodeModel(entity.modelType);
        //然后分析逻辑多选和
        this.getRulesText(entity.procedureExecution);
        //展示表格
        this.displayTablebeData(entity);

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

        var request = this.procedureDetails;
        var params = {
            request: JSON.stringify(request),
          };
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
        var form = this.formItem;
        //最后的结果就是将这个对象放到顺序表里面去
        var nodeType = form.select;
        this.getNodeType(nodeType)
        //刷新表格
        this.procedureDetails.push({
          id: 0,
          modelType: this.currentNodeName,
          procedureExecution: this.ruleText,
        });
      },
      getNodeType(nodeType) {
        this.nodeModelList.forEach(value => {
          if (value.value === nodeType) {
            this.currentNodeName = value.label;
          }
        });

      },


      //删除弹出框中的某一个值
      removeNode(index) {
        var procedureDetails = this.procedureDetails;
        //删除一个数组
        procedureDetails.splice(index, 1);
      }
      ,

      //点击显示选框
      showProcedure(index, viewFlag) {
        this.refreshText();
        this.procedureModal = true;
        this.viewProcedureDetail(index, viewFlag);
      },
      editProcedure(index) {
        this.showProcedure(index, false);
      },
      addProcedure() {
        this.refreshText();
        this.procedureModal = true;
        this.$refs.formItem.resetFields();
        this.procedureDetails = [];
        //将表单置灰色
        this.disableFlag = false;
      }
      ,
      refreshText() {
        var checkArraySelected = this.formItem.checkArraySelected;
        var logicArraySelected = this.formItem.logicArraySelected;
        checkArraySelected.splice(0, 4);
        logicArraySelected.splice(0, 4);
        //删除规则内容
        this.ruleText = '';
        this.initLatestArray();
      }
      ,

      realRefreshText() {

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
      changeCheckOrLogic() {


        //按照长度来判断是否被选中，首先要保存一个长度，如果长度增加了 说明是应该追加上去的；
        //如果长度减少了，说明应该是减去的
        var checkArraySelected = this.formItem.checkArraySelected;
        var logicArraySelected = this.formItem.logicArraySelected;


        //首先判断 长度，然后再考虑追加还是 减少
        //如果长度变短了，就说明是减少了，要减少
        if (this.formItem.checkArraySelected.length < this.latestCheckSelected.length
          || this.formItem.logicArraySelected.length < this.latestLogicSelected.length) {
          //减少不顶用，用便利的方法重新再来一遍
          var rules = this.ruleText.split(' ');
          var rule = '';
          var hashMap = new Map();
          //保证已经有的还有，但是少了的就没有了
          rules.forEach(value => {
            this.formItem.checkArraySelected.forEach(target => {
              if (value === target) {
                hashMap.set(value, true);
              }
            });
            this.formItem.logicArraySelected.forEach(target => {
              if (value === target) {
                hashMap.set(value, true);
              }
            });
            if (hashMap.get(value)) {

            } else {
              hashMap.set(value, false);
            }
          });
          //便利map
          hashMap.forEach((value, key) => {
            if (value) {
              rule += key + ' ';
            }
          });
          this.ruleText = rule;
        }
        //校验增加的时候 对应的处理
        if (this.formItem.checkArraySelected.length > this.latestCheckSelected.length) {
          //check增长
          this.ruleText += JSON.parse(JSON.stringify(this.formItem.checkArraySelected)).pop() + ' ';

        }
        //和校验增加的处理一样
        if (this.formItem.logicArraySelected.length > this.latestLogicSelected.length) {
          this.ruleText += JSON.parse(JSON.stringify(this.formItem.logicArraySelected)).pop() + ' ';

        }

        //方法最后要保留当前的数组更新
        this.latestCheckSelected = JSON.parse(JSON.stringify(checkArraySelected));
        this.latestLogicSelected = JSON.parse(JSON.stringify(logicArraySelected));

      }
    },
    name: 'app',
    data() {
      return {
        procedureLoading: false,

        centerDialogVisible: false,
        currentNodeName: '',
        //新增流程配置的标志位
        addingProcedureFlag: false,
        latestCheckSelected: [],
        latestLogicSelected: [],
        //校验数组
        checkArray: ['城市校验', '余额校验', '类别校验'],
        logicArray: ['并', '或', '(', ')'],
        //formDisable来控制是否可以操作
        disableFlag: false,
        //控制结果返回状态
        responseStatus: false,
        //loading
        loading:
          true,
        //绑定表格的属性值
        formItemData:
          '',
        pageRequest:
          {
            prevPage: 0,
            nextPage:
              0,
            pageSize:
              5,
            count:
              0,
            currentPage:
              1,

          }
        ,
        //流程配置ID
        procedureConfigId: "",
        //流程名称
        procedureName:
          "",
        //状态
        state:
          [
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

        procedureModal: false,
        ruleText: '',
        nodeModelList:
          [
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
              key: 'modelType',
              width: 101.66,

            },
            {
              title: '规则',
              key: 'procedureExecution'
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
                      size: 'small',
                      type: 'text',
                      'disabled':this.disableFlag,

                    },
                    on: {
                      click: () => {
                        this.removeNode(params.index)
                      }
                    }

                  }, 'Rem'),
                  h('Button', {
                    props: {
                      size: 'small',
                      type: 'text',
                      /**
                       * 这个位置真是难死了  @TODO 这个位置需要记笔记
                       * */
                      'disabled':this.disableFlag,
                    },
                    on: {
                      click: () => {
                        this.removeNode(params.index)
                      }
                    }

                  }, 'View'),

                ]);
              }
            }
          ],
        procedureDetails:
          [],
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
                        this.showProcedure(params.index, true)
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
                        this.editProcedure(params.index)
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
            checkArraySelected:
              [],
            logicArraySelected:
              [],
          }
        ,
        //数据校验
        ruleValidate: {
          procedureName: [
            {required: true, message: '请填写流程名称', trigger: 'blur'}
          ],
          select:
            [
              {required: true, message: '请填写节点模板', trigger: 'change'}
            ],

          checkArraySelected:
            [
              {required: true, message: '请填写流程名称', trigger: 'blur'}

            ],
          logicArraySelected:
            [
              {required: true, message: '请填写流程名称', trigger: 'blur'}

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
