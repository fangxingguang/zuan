<template>
  <div>
    <Card>
      <Alert show-icon>通知：通知内容。。。</Alert>
      <Row :gutter="16">
        <Col span="16">
        <Card>
          <p slot="title">今日数据</p>
          <p>
            <ul class="group-box">
              <li>
                <h2>100</h2>
                <p>免费任务</p>
              </li>
              <li>
                <h2>200</h2>
                <p>自动任务</p>
              </li>
              <li>
                <h2>200</h2>
                <p>流量</p>
              </li>
              <li>
                <h2>200</h2>
                <p>空包单号</p>
              </li>
            </ul>
          </p>
        </Card>
        </Col>
        <Col span="8">
        <Card>
          <p slot="title">系统公告</p>
          <p>卡片内容</p>
          <p>卡片内容</p>
          <p>卡片内容</p>
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

.group-box li {
  width: 120px;
  height: 100px;
  text-align: center;
  background: rgb(245, 245, 246);
  border: 1px solid rgb(245, 245, 246);
  display: inline-block;
  overflow: hidden;
  margin-right: 10px;
}

.group-box li h2 {
  margin: 15px;
}
</style>
