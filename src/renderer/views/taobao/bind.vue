<template>
  <div>
    <Card>
      <Row>
        <Col span="18">
        <webview src="https://login.taobao.com" disablewebsecurity plugins style="height:580px;" id="taobao" :preload="preload"></webview>
        </Col>
        <Col span="6">
        <!-- <Button @click="test2">获取账号密码</Button> -->
        <Card :bordered="false">
          <p slot="title">绑定卖家账号</p>
          <p>
            <Input style="width:140px;"></Input>
            <Button type="primary">绑定</Button>
          </p>
          <br/>
          <p>
            <Tag closable color="blue">卖家账号2</Tag>
            <Tag closable color="blue">卖家账号2</Tag>
          </p>
        </Card>
        <Card :bordered="false">
          <p slot="title">绑定买家账号</p>
          <p>
            <Input style="width:140px;" placeholder="账号"></Input>
          </p>
          <p>
            <Input type="password" style="width:140px;" placeholder="自动任务请输入密码"></Input>
            <Button type="primary">绑定</Button>
          </p>
          <br/>
          <p>
            <Tag closable color="blue">买家账号2</Tag>
            <Tag closable color="blue">买家账号2</Tag>
          </p>
        </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
const path = require('path')
export default {
  data() {
    return {
      webview: '',
      preload: `file:${path.resolve(__dirname, '../../utils/preload.js')}`
    }
  },
  mounted: function () {
    this.loadReady();
  },
  methods: {
    loadReady() {
      this.webview = document.getElementById("taobao");
      this.webview.addEventListener("dom-ready", function () {
        //this.openDevTools();
        this.addEventListener('ipc-message', function (event) {
          console.log(event.args);
        });
      });
    },
    test2() {
      this.webview.send('ping','aaaaa');
    }
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
</style>
