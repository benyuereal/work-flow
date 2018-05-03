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
            <p> 订单编号：</p><Select v-model="model1" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          </Col>
          <Col span="5" id="select-column-name">
            <p> 合同编号：</p><Select v-model="model1" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select></Col>
          <Col span="5" id="select-column-signature-type" style="width:180px ">

            <p style="float: left;text-align: center;font-size: 14px;margin-top: 6px">
              模板ID
            </p>
            <Input v-model="value" placeholder="Enter something..." clearable
                   style="width: 100px;height: 30px"></Input>
          </Col>

          <Col span="5" id="select-column-state">
            <p> 模板名称：</p><Input v-model="value" placeholder="Enter something..." clearable
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
        <Button type="primary" icon="ios-search" id="search" style="float: left">Search</Button>
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
        <Table border :columns="columns2" :data="data3"></Table>
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
      :styles="{top: '70px'}">
      <Form :model="formItem" :label-width="80" label-position="left">

        <FormItem label="模板名称">
          <Input v-model="formItem.input" placeholder="Enter something..." clearable></Input>
        </FormItem>
        <FormItem label="模板描述">
          <Input v-model="formItem.input" placeholder="Enter something..." clearable></Input>
        </FormItem>
        <FormItem label="模板类型">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="模板实现类">
          <Input v-model="formItem.input" placeholder="Enter something..." clearable></Input>
        </FormItem>
        <FormItem label="模板实现方法">
          <Input v-model="formItem.input" placeholder="Enter something..." clearable></Input>
        </FormItem>
        <FormItem label="模板TCPURL">
          <Input v-model="formItem.input" placeholder="Enter something..." clearable></Input>
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

  export default {


    methods: {

      //弹出绑定界面
      showBind(){
        this.modal10=true;
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

        node: {//这个对象用来承载用户点击对号生成的对象
          name: '',
          age: '',
          address: ''
        },
        modal10:false,//控制绑定
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
        model1: '',
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
        columns2: [
          {
            title: 'Name',
            key: 'name',
            width: 100,
            fixed: 'left'
          },
          {
            title: 'Age',
            key: 'age',
            width: 100
          },
          {
            title: 'Province',
            key: 'province',
            width: 100
          },
          {
            title: 'City',
            key: 'city',
            width: 100
          },
          {
            title: 'Address',
            key: 'address',
            width: 200
          },
          {
            title: 'Postcode',
            key: 'zip',
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
        procedureConfigData: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            province: 'America',
            city: 'New York',
            zip: 100000
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'Washington, D.C. No. 1 Lake Park',
            province: 'America',
            city: 'Washington, D.C.',
            zip: 100000
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            province: 'Australian',
            city: 'Sydney',
            zip: 100000
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000
          }
        ],
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
