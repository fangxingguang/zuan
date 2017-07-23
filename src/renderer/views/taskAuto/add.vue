<template>
  <div>
    <Card style="width:500px;margin:0 auto;">
      <Form :model="formItem" :label-width="80">
        <Form-item label="卖家账号">
          <Select v-model="formItem.input" placeholder="我的淘宝店铺账号">
            <Option v-for="item in buyerList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </Form-item>
        <Form-item label="购买小号">
          <Select v-model="formItem.input" placeholder="互拍使用的淘宝小号">
            <Option v-for="item in sellerList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </Form-item>
        <Form-item label="宝贝链接">
          <Input v-model="formItem.input" placeholder=""></Input>
        </Form-item>
        <Form-item label="商品名称">
          <Input v-model="formItem.input" placeholder=""></Input>
        </Form-item>
        <Form-item label="商品价格">
          <Input v-model="formItem.input" placeholder="" style="width:80px;"></Input> 元
        </Form-item>
        <Form-item label="联系QQ">
          <Input v-model="formItem.input" placeholder="请填写常用在线QQ，互拍前需要相互联系"></Input>
        </Form-item>
        <Form-item label="搜索关键词">
          <Input v-model="formItem.input" placeholder="填写要搜索的关键词"></Input>
        </Form-item>
        <Form-item label="排名">
          <Input v-model="formItem.input" placeholder="备注宝贝排在第几页第几位等信息"></Input>
        </Form-item>
        <Form-item label="好评语录">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写好评评语 限制300字"></Input>
        </Form-item>
        <Form-item label="互拍时间">
          <Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placement="top-start" placeholder="选择日期" class="search-date"></Date-picker>
          <Button type="dashed" @click="handleAdd" icon="plus-round">添加</Button>
          <p>
            <Tag type="border" closable>2017-07-23 10:00</Tag>
            <Tag type="border" closable>2017-07-23 10:00</Tag>
            <Tag type="border" closable>2017-07-23 10:00</Tag>
            <Tag type="border" closable>2017-07-23 10:00</Tag>
          </p>
        </Form-item>
        <Form-item label="备注">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写其它说明或者要求 限制100字"></Input>
        </Form-item>
        <Form-item label="消耗克拉">
          <Button type="dashed">商品：10</Button>+
          <Button type="dashed">关键词：20</Button>+
          <Button type="dashed">好评：30</Button> = 50 克拉
        </Form-item>
        <Form-item>
          <Button type="primary">提交</Button>
          <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
        <Form-item>
          温馨提示：产品拍下后没有及时付款，下一个任务将无法进行，所有互拍正常都是自动收货，可和对方联系协商收货时间。
        </Form-item>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      buyerList: [
        {
          value: '1',
          label: '账号1'
        },
        {
          value: '1',
          label: '账号2'
        }
      ],
      sellerList: [
        {
          value: '1',
          label: '账号1'
        },
        {
          value: '1',
          label: '账号2'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
