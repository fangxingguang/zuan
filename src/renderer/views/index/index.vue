<template>
  <div>
    <Card>
      <Alert show-icon>通知：通知内容。。。</Alert>
      <Row :gutter="16">
        <Col span="24">
        <Card>
          <p slot="title">常见问题</p>
          <h4>1. 关于免费任务</h4>
          <p>卡片内容</p><br/>
          <h4>2. 关于自动任务</h4>
          <p>卡片内容</p><br/>
        </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
</style>
