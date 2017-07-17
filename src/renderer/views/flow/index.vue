<template>
  <div>
    <Card>
      <Row>
        <Col span="12">
        <Button type="primary" @click="modal1 = true">购买流量</Button>
        </Col>
        <Col span="12">
        <span class="search-input">
          <Input placeholder="">
          <label slot="prepend">关键词：</label>
          <Button slot="append" icon="ios-search"></Button>
          </Input>
        </span>
        </Col>
      </Row>
      <br/>
  
      <Table border :columns="columns7" :data="data6"></Table>
      <div class="page"><Page :total="100" show-total></Page></div>
    </Card>
  
    <Modal v-model="modal1" title="购买流量">
      <Form :model="formItem" :label-width="80">
         <Form-item label="套餐">
          <Select v-model="formItem.select" placeholder="请选择">
            <Option value="1">【PC流量包月】每天100搜索流量+70访客(50.00元)</Option>
            <Option value="2">【手机流量包月】每天100搜索流量+100访客+10收藏(300.00元)</Option>
            <Option value="3">【手机流量包月】每天200搜索流量+200访客+20收藏(550.00元)</Option>
          </Select>
        </Form-item>
        <Form-item label="联系QQ">
          <Input v-model="formItem.input" placeholder="请输入" style="width:200px;"></Input>
        </Form-item>
        <Form-item label="宝贝链接">
          <Input v-model="formItem.input" placeholder="淘宝地址"></Input>
        </Form-item>
        <Form-item label="关键词">
          <Input v-model="formItem.input" placeholder="比如：衣服，鞋子"></Input>
        </Form-item>
      </Form>
    </Modal>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      },
      columns7: [
        {
          title: '套餐',
          key: 'name'
        },
        {
          title: '关键词',
          key: 'age'
        },
        {
          title: '宝贝链接',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ]);
          }
        }
      ],
      data6: [
        {
          name: '【PC流量包月】每天100搜索流量+70访客(50.00元)',
          age: '衣服',
          address: 'https://www.baidu.com/'
        },
        {
          name: '【PC流量包月】每天100搜索流量+70访客(50.00元)',
          age: '衣服',
          address: 'https://www.baidu.com/'
        },
        {
          name: '【PC流量包月】每天100搜索流量+70访客(50.00元)',
          age: '衣服',
          address: 'https://www.baidu.com/'
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: '用户信息',
        content: `套餐：${this.data6[index].name}<br>关键词：${this.data6[index].age}<br>链接：${this.data6[index].address}`
      })
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
.page{
  text-align: right;
  margin-top: 10px;
}
</style>
