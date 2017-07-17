<template>
  <div>
    <Card>
      <p>用户名：嘎嘎嘎</p>
      <p>账户余额：100 元
        <Button type="primary" size="small">充值</Button>
      </p>
      <br/>
      <Table :columns="columns1" :data="data1"></Table>
      <div class="page">
        <Page :total="100" show-total></Page>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: '交易时间',
          key: 'create_time',
          width: 200
        },
        {
          title: '交易详情',
          key: 'detail'
        }
      ],
      data1: [
        {
          create_time: '2017-07-18 00:00:00',
          detail: '北京市朝阳区芍药居'
        },
        {
          create_time: '2017-07-18 00:00:00',
          detail: '北京市朝阳区芍药居'
        },
        {
          create_time: '2017-07-18 00:00:00',
          detail: '北京市朝阳区芍药居'
        }
      ]
    }
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}

.page {
  text-align: right;
  margin-top: 10px;
}
</style>
