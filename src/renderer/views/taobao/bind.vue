<template>
  <div>
    <Card>
      <Row>
        <Col span="20">
        <webview src="https://login.taobao.com" disablewebsecurity plugins style="height:500px;" id="taobao" :preload="preload"></webview>
        </Col>
        <Col span="4">
        <Button @click="test">显示登录框</Button>
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
      preload: `file://${path.join(__static, '/js/inject.js')}`
    }
  },
  created: function () {
    this.loadJquery();
  },
  methods: {
    loadJquery() {
      var _this = this;
      setTimeout(function () {
        _this.webview = document.getElementById("taobao");
        //_this.webview.openDevTools();
      }, 10)
    },
    test() {
      var js = `
        window.scrollTo(400,200);
        $("#J_Quick2Static").click();
        // $("#TPL_username_1").val("fangxingguang");
        // $("#TPL_password_1").val("");
        // $("#J_SubmitStatic").click();
      `;
      this.webview.executeJavaScript(js, true, function () {
      });
    }
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
</style>
