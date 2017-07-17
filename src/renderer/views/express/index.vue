<template>
  <div>
    <Card>
      <Row>
        <Col span="12">
        <Button type="primary" @click="modal1 = true">购买空包单号</Button>
        </Col>
        <Col span="12">
        <span class="search-input">
          <Input placeholder="">
          <label slot="prepend">单号：</label>
          <Button slot="append" icon="ios-search"></Button>
          </Input>
        </span>
        </Col>
      </Row>
      <br/>
  
      <Table border :columns="columns7" :data="data6"></Table>
      <div class="page"><Page :total="100" show-total></Page></div>
    </Card>
  
    <Modal v-model="modal1" title="购买空包单号">
      <Form :model="formItem" :label-width="80">
         <Form-item label="发货地址">
          <Select v-model="formItem.select" placeholder="请选择">
            <Option value="1">黑龙江省鸡西市</Option>
            <Option value="2">黑龙江省哈尔滨市</Option>
          </Select>
        </Form-item>
         <Form-item label="快递">
          <Select v-model="formItem.select" placeholder="请选择">
            <Option value="1">天天快递(淘宝|天猫) 2.9元</Option>
            <Option value="2">龙邦速递(淘宝|天猫) 2.6元</Option>
          </Select>
        </Form-item>
        <Form-item label="收货地址">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            <p>可批量填写，每行一个地址</p>
            <p>收货信息格式：朴槿惠，13999999999，江苏省 苏州市 高新区 金枫路228号 ，330006（逗号空格不可缺）</p>
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
          title: '快递',
          key: 'express'
        },
        {
          title: '发货地址',
          key: 'from'
        },
        {
          title: '收货地址',
          key: 'to'
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
          express: '天天快递',
          from: '黑龙江省鸡西市',
          to: '上海浦东'
        },
         {
          express: '天天快递',
          from: '黑龙江省鸡西市',
          to: '上海浦东'
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
