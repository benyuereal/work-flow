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
            <p> 流程配置ID：</p><Input v-model="procedureConfigId" placeholder="Enter something..." clearable
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
        <Button type="primary" icon="ios-search" id="search" style="float: left" @click="getTableData">Search</Button>
      </Col>

    </Row>
    <br>
    <Row>
      <Col span="1">&nbsp;</Col>
      <Col span="6">
        <Button type="primary" style="width: 90px" @click="addEntrance">add</Button>
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
      @on-ok="saveEntrance"
      title="流程配置管理"
      v-model="addEntranceModal"
      :styles="{top: '20px'}">
      <Form :model="saveEntranceForm" :label-width="80" label-position="left">
        <FormItem label="流程名称">
          <Input v-model="saveEntranceForm.entranceName" placeholder="Enter something..." clearable></Input>
        </FormItem>
        <FormItem label="品牌">
          <Select v-model="saveEntranceForm.brandTypeModal">
            <Option v-for="item in saveEntranceForm.brandType" :value="item.value" :key="item.value"
                    style="width: 100%">{{ item.label
              }}
            </Option>

          </Select>
        </FormItem>
        <FormItem label="适用城市">
          <Select v-model="saveEntranceForm.addApplicableCityModal" filterable multiple>
            <Option v-for="item in saveEntranceForm.addApplicableCity" :value="item.code" :key="item.code"
                    style="width: 100%">
              {{ item.name
              }}
            </Option>
          </Select>
        </FormItem>
        <FormItem label="签单类型">
          <CheckboxGroup v-model="saveEntranceForm.writtenTypeModal">
            <Option v-for="item in saveEntranceForm.writtenType" :value="item.value" :key="item.value">{{ item.label
              }}
            </Option>

          </CheckboxGroup>
        </FormItem>
        <FormItem label="提单入口">
          <CheckboxGroup v-model="saveEntranceForm.billTypeModal">
            <Checkbox v-for="item in saveEntranceForm.billType" :value="item.value" :key="item.value">{{ item.label }}
            </Checkbox>

          </CheckboxGroup>
        </FormItem>
        <FormItem label="商品类型">
          <Select v-model="saveEntranceForm.goodsTypeModal">
            <Option v-for="item in saveEntranceForm.goodsType" :value="item.value" :key="item.value">{{ item.label }}
            </Option>

          </Select>
        </FormItem>
        <FormItem label="商品线">
          <Select v-model="saveEntranceForm.goodsLineModal">
            <Option v-for="item in saveEntranceForm.goodsLine" :value="item.value" :key="item.value">{{ item.label }}
            </Option>

          </Select>
        </FormItem>
        <FormItem label="商品单元">
          <Select v-model="saveEntranceForm.goodsUnitModal">
            <Option v-for="item in saveEntranceForm.goodsUnit" :value="item.value" :key="item.value">{{ item.label }}
            </Option>

          </Select>
        </FormItem>


      </Form>
    </Modal>
    <Modal
      title="入口信息绑定流程"
      v-model="bindEntranceModal"
      :styles="{top: '150px'}">
      <Form :model="bindEntranceModal" :label-width="80" label-position="left">

        <FormItem label="入口选择">
          <Select v-model="bindEntranceModal.entrance">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="流程选择">
          <Select v-model="bindEntranceModal.procedure">
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
  import city from '../../static/js/city'

  export default {


    created() {
      //初始化数据
      this.initData();
      //初始 获取表格中 数据
      // this.getEntranceData(1);


    },

    methods: {

      //保存入口信息
      saveEntrance() {
        var request = this.saveEntranceForm;
        alert();
        //保存入库
        this.$http.get(
          "http://127.0.0.1:9501/entrance/save",
          {
            params: request,
          },
          {
            emulateJSON: true,//是否是json
          }
        ).then(function (response) {
          var data = response.data;
          //如果状态是0 就展示 否则展示默认的
          var code = data.code;
          alert(code);
        })
      },
      //初始化表格
      getEntranceData(page) {

        //请求数据，有两个 一个是分页的请求对象，一个是搜索条件的对象
        var request = {
          //请求的搜索条件

          //品牌
          brandType: this.brandTypeModal,
          //来源
          sourceType: this.sourceTypeModal,
          //签单类型
          writtenType: this.writtenTypeModal,
          //分页条件
          currentPage: this.page.currentPage,
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
          var entranceData = data.entrances;
          this.entranceData = entranceData;
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
            //新增的

            //表格内的
            //展示品牌选择
            this.saveEntranceForm.brandType = playData.brandType;
            //展示签单选择
            this.saveEntranceForm.writtenType = playData.writtenType;
            //展示订单来源选择



          } else {
            //什么也不做
          }
          // alert(JSON.stringify(data));
        })
      },
      //获取后台的json数据
      getTableData() {
        this.getEntranceData(1);
      },

      //弹出绑定界面
      showBind(index) {
        this.bindEntranceModal = true;
      },


      //删除此条记录,传入的要删除的索引位置
      remove(index) {
        alert(index);
      },


      //点击显示选框
      addEntrance() {

        if (this.addEntranceModal) {
          this.addEntranceModal = false;
        }
        this.addEntranceModal = true;
      },


    },
    name: 'app',
    data() {
      return {
        //绑定按钮点击后出现的form
        bindForm: {
          //入口
          entrance: [],
          //流程
          procedure: [],
        },


        //流程配置id
        procedureConfigId: '',
        //初始化的时候是false，表示该modal是隐藏的
        addEntranceModal: false,
        //cityAfter
        cityAfter: [],
        //page 分页对象
        page: {
          prevPage: 0,
          nextPage: 0,
          //页面显示的数据个数
          pageSize: 5,
          count: 0,
          //初始化当前页是1
          currentPage: 1,

        },


        //品牌
        brandType: [],
        brandTypeModal: '',
        //签单类型
        writtenType: [],
        writtenTypeModal: '',
        //订单来源类型
        sourceType: [],
        sourceTypeModal: '',

        bindEntranceModal: false,//控制绑定

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
            width: 80,
            fixed: 'center'

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
                      this.showBind(params.index)
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
        saveEntranceForm: {
          //入口名称
          entranceName: '',
          //品牌
          brandType: this.brandType,
          //签单类型
          writtenType: this.writtenType,
          //提单入口
          billType: [
            {
              label: "全部",
              value: 1,
            },
            {
              label: "在线提单",
              value: 2,
            },
            {
              label: "BC提单",
              value: 3,
            },
          ],
          billTypeModal: '',
          goodsType: [],
          //商品单元
          goodsUnit: [],
          //商品线
          goodsLine: [],
          goodsTypeModal: '',
          //商品单元
          goodsUnitModal: '',
          //商品线
          goodsLineModal: '',
          //新增适用城市
          addApplicableCity: city.city,
          //新增城市绑定
          addApplicableCityModal: [],
          //品牌
          brandTypeModal: '',
          //签单类型
          writtenTypeModal: '',
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
