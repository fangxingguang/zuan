<template>
  <div>
    <Card style="width:500px;margin:0 auto;">
      <Form :model="formItem" :label-width="80">
        <Form-item label="卖家账号">
          <Input v-model="formItem.input" placeholder="我的淘宝店铺账号"></Input>
        </Form-item>
        <Form-item label="购买小号">
          <Input v-model="formItem.input" placeholder="互拍使用的淘宝小号"></Input>
        </Form-item>
        <Form-item label="宝贝链接">
          <Input v-model="formItem.input" placeholder=""></Input>
        </Form-item>
        <Form-item label="商品名称">
          <Input v-model="formItem.input" placeholder=""></Input>
        </Form-item>
        <Form-item label="商品主图">
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
        </Form-item>
        <Form-item label="备注">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写其它说明或者要求 限制100字"></Input>
        </Form-item>
        <Form-item>
          <Button type="primary">提交</Button>
          <Button type="ghost" style="margin-left: 8px">取消</Button>
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
      }
    }
  }
}
</script>

<style scoped>

</style>
