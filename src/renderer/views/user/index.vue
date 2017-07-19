<template>
  <div>
    <Card>
      <Card class="user-info">
        <Row :gutter="32">
          <Col span="2">
          <i-circle :percent="100" stroke-color="#5cb85c" size="70">
            <Icon type="ios-person" size="60" style="color:#5cb85c"></Icon>
          </i-circle>
          </Col>
          <Col span="20">
          <p>用户名：嘎嘎嘎</p>
          <p>账户余额：100 元
            <Button type="primary" size="small">充值</Button>
          </p>
          </Col>
        </Row>
      </Card>
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
.page {
  text-align: right;
  margin-top: 10px;
}

.user-info p {
  line-height: 35px;
}
</style>
