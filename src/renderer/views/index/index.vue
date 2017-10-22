<template>
  <div>
    <Card>
      <Row>
        <Col span="24">
        <!-- <Button type="primary" @click="taobao('init')">打开淘宝</Button>
        <Button type="primary" @click="taobao('login')">登陆测试</Button>
        <Button type="primary" @click="taobao('search')">搜索</Button>
        <Button type="primary" @click="taobao('page')">分页</Button>
        <Button type="primary" @click="taobao('find')">查找点击</Button>
        <Button type="primary" @click="taobao('buy')">购买</Button> -->
        </Col>
      </Row>
      <br/>
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
  },
  mounted: function() {
    this.test();
  },
  methods: {
    test() {
      this.$http.get('');
    },
    taobao(params) {
      switch (params) {
        case 'init': taobao.init(); break;
        case 'login': taobao.login(); break;
        case 'search': taobao.search(); break;
        case 'page': taobao.page(); break;
        case 'find': taobao.find(); break;
        case 'buy': taobao.buy(); break;
      }
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
