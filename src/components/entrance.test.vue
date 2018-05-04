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
            <p> 品牌：</p><Select v-model="brandTypeModal" style="width:100px">
            <Option v-for="item in brandType" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          </Col>
          <Col span="5" id="select-column-name">
            <p> 订单来源：</p><Select v-model="sourceTypeModal" style="width:100px">
            <Option v-for="item in sourceType" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select></Col>
          <Col span="5" id="select-column-signature-type" style="width:180px ">
            <p style="float: left;text-align: center;font-size: 14px;margin-top: 6px"> 签单类型：</p><Select
            v-model="writtenTypeModal"
            style="width:100px">
            <Option v-for="item in writtenType" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          </Col>

          <Col span="5" id="select-column-state">
            <p> 流程配置ID：</p><Input v-model="value" placeholder="Enter something..." clearable
                                  style="width: 100px;height: 30px"></Input>
          </Col>
          <Col span="2">&nbsp;</Col>
          <!--<Col span="4" id="select-column-search">-->
          <!--<Button type="primary" icon="ios-search" id="search">Search</Button>-->
          <!--</Col>-->
        </Row>
      </Col>
      <Col span="2">&nbsp;</Col>
    </Row>
    <Row style="height: 33px">
      <Col span="2"></Col>
      <Col span="16">
        &nbsp;
      </Col>
      <Col span="4">
        &nbsp;
      </Col>
      <Col span="2">
        <Button type="primary" icon="ios-search" id="search" style="float: left" @click="getJSON">Search</Button>
      </Col>

    </Row>
    <br>
    <Row>
      <Col span="1">&nbsp;</Col>
      <Col span="6">
        <Button type="primary" style="width: 90px" @click="showBind">add</Button>
        <Button type="primary" style="width: 90px">batch add</Button>
      </Col>
      <Col span="">&nbsp;</Col>
    </Row>
    <br>
    <Row>
      <Col span="2">&nbsp;</Col>
      <Col span="20">
        <Table border :columns="entranceColumn" :data="entranceData"></Table>
      </Col>
      <Col span="2">&nbsp;</Col>

    </Row>
    <br>
    <Row style="margin-top: 90px">
      <Col span="24">&nbsp;</Col>

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
      title="流程配置管理"
      v-model="modal9"
      :styles="{top: '20px'}">
      <Form :model="formItem" :label-width="80" label-position="left">
        <FormItem label="流程名称">
          <Input v-model="formItem.input" placeholder="Enter something..." clearable></Input>
        </FormItem>
        <FormItem label="品牌">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="适用城市">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="签单类型">
          <CheckboxGroup v-model="formItem.checkbox">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="提单入口">
          <CheckboxGroup v-model="formItem.checkbox">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="商品类型">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="商品线">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="商品单元">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>


      </Form>
    </Modal>
    <Modal
      title="入口信息绑定流程"
      v-model="modal10"
      :styles="{top: '150px'}">
      <Form :model="formItem" :label-width="80" label-position="left">

        <FormItem label="入口选择">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="流程选择">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>


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

  export default {


    created() {
      //初始化数据
      this.initData();
      //初始 获取表格中 数据
      this.getEntranceData(1);
    },

    methods: {

      //初始化表格
      getEntranceData(page) {

        //请求数据，有两个 一个是分页的请求对象，一个是搜索条件的对象
        var request = {
          //请求的搜索条件

          brandType: 1,
          //分页条件
          currentPage: page,
          pageSize: 10,
        };

        //获取入口表格数据
        var data;
        this.$http.get(
          "http://127.0.0.1:9501/entrance/find",
          {
            params: request,
          },
          {
            emulateJSON: true,//是否是json
          }
        ).then(function (response) {
          data = response.data;
          //如果状态是0 就展示 否则展示默认的
          var code = data.code;
          alert(JSON.stringify(data));
        })
      },

      //获取初始化数据
      initData() {
        //初始化数据
        var data;
        this.$http.get(
          "http://127.0.0.1:9501/init/formatted",
          {
            emulateJSON: true,//是否是json
          }
        ).then(function (response) {
          data = response.data;
          //如果状态是0 就展示 否则展示默认的
          var code = data.code;
          // alert(JSON.stringify(data));

          if (code === 0) {
            //展示数据开始
            var playData = data.data;
            //展示品牌选择
            this.brandType = playData.brandType;
            //展示签单选择
            this.writtenType = playData.writtenType;
            //展示订单来源选择
            this.sourceType = playData.sourceType;

          } else {
            //什么也不做
          }
          // alert(JSON.stringify(data));
        })
      },
      //获取后台的json数据
      getJSON() {
        this.$http.get("http://127.0.0.1/9501/workflowManage/test", {
          headers: this.headers
        }).then(function (response) {
          //
          alert(response.bodyText);
        })
      },

      //弹出绑定界面
      showBind() {
        this.modal10 = true;
      },

      //增加某个值到弹出框
      addNode() {
        //对象赋值做好
        var node = this.node;
        node.age = 1;
        node.address = '......';
        node.name = 'ben.yue';
        //最后的结果就是将这个对象放到顺序表里面去

        //刷新表格
        this.data1.push(node);
      },


      //删除弹出框中的某一个值
      removeNode(index) {
        var data1 = this.data1;
        //删除一个数组
        data1.splice(index, 1);
      },

      //点击显示选框
      show(index) {
        // this.$Modal.info({
        //   title: 'User Info',
        //   content: ``
        // })
        //清空两个checkbox以及文本
        this.refreshText();
        this.modal9 = true;
      },
      remove(index) {
        this.data6.splice(index, 1);
      },
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

      },

      realRefreshText() {
        this.guize = '';
      },
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

      },
      checkCheck(type) {

        var checkBoxItem = JSON.parse(JSON.stringify(this.formItem.checkbox));
        var checkLogicItem = JSON.parse(JSON.stringify(this.formItem.checkLogic));
        var checkBox = 1;
        var checkLogic = 2;
        //如果是敲击校验
        if (type == checkBox) {
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

        //品牌
        brandType: [],
        brandTypeModal: '',
        //签单类型
        writtenType: [],
        writtenTypeModal: '',
        //订单来源类型
        sourceType: [],
        sourceTypeModal: '',
        node: {//这个对象用来承载用户点击对号生成的对象
          name: '',
          age: '',
          address: ''
        },
        modal10: false,//控制绑定
        procedureModal: false,
        guize: '',
        input2: '',
        input21: '',
        input22: '',
        input23: '',
        cityList: [
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
        columnsProcedure: [
          {
            title: '序号',
            key: 'name',
            width: 142.33,

          },
          {
            title: '节点',
            key: 'age',
            width: 101.66,

          },
          {
            title: '规则',
            key: 'address'
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
                    type: '',
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
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },


        ],
        entranceColumn: [
          {
            title: '序号',
            key: 'id',
            width: 60,
            fixed: 'left'
          },
          {
            title: '入口ID',
            key: 'entranceId',
            width: 100
          },
          {
            title: '品牌',
            key: 'brand',
            width: 70
          },
          {
            title: '适用城市',
            key: 'applicableCity',
            width: 90
          },
          {
            title: '订单来源',
            key: 'source',
            width: 100
          },
          {
            title: '签单类型',
            key: 'written',
            width: 100
          },
          {
            title: '流程配置ID',
            key: 'procedureConfigId',
            width: 100
          },
          {
            title: '状态',
            key: 'state',
            width: 70
          },
          {
            title: '创建人',
            key: 'createdBy',
            width: 80
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
            title: 'Action',
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
        entranceData: [],
        //下面是form表单
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          checkLogic: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }

      }

    },


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
    margin-top: 60px;

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
