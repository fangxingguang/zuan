<template>
  <div>
    <Card>
      <Row>
        <Col span="18">
        <webview src="https://login.taobao.com" disablewebsecurity plugins style="height:580px;" id="taobao" :preload="preload"></webview>
        </Col>
        <Col span="6">
        <Card :bordered="false">
          <p slot="title">绑定卖家账号</p>
          <p>
            <Input style="width:140px;" :value="bindName" disabled></Input>
            <Button type="primary" @click="bindSeller">绑定</Button>
          </p>
          <br/>
          <p>
            <Tag closable color="blue" v-for="item in sellerList" @on-close="tagClose(item.id)">{{item.name}}</Tag>
          </p>
        </Card>
        <Card :bordered="false">
          <p slot="title">绑定买家账号</p>
          <p>
            <Input style="width:140px;" placeholder="账号" :value="bindName" disabled></Input>
          </p>
          <p>
            <Input type="password" style="width:140px;" placeholder="自动任务请输入密码" :value="bindPwd" disabled></Input>
            <Button type="primary" @click="bindBuyer">绑定</Button>
          </p>
          <br/>
          <p>
            <Tag closable color="blue" v-for="item in buyerList" @on-close="tagClose(item.id)">{{item.name}}</Tag>
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
      preload: `file:${path.resolve(__dirname, '../../utils/preload.js')}`,
      bindName: '',
      bindPwd: '',
      loginName: '',
      sellerList: [],
      buyerList: [],
      logoutUrl: 'https://login.taobao.com/member/logout.jhtml?f=top&out=true&redirectURL=https%3A%2F%2Fwww.taobao.com%2F'
    }
  },
  mounted: function() {
    this.loadReady();
    this.taobaoSelect();
  },
  methods: {
    loadReady() {
      var _this = this;
      this.webview = document.getElementById("taobao");
      this.webview.addEventListener("dom-ready", function() {
        //this.openDevTools();
      });
      this.webview.addEventListener('ipc-message', function(event) {
        if (event.channel == 'getAccount') {
          _this.bindName = event.args[0];
          _this.bindPwd = event.args[1];
          console.log(event.args);
        }
        if (event.channel == 'getLoginName') {
          if (_this.loginName == '') {
            _this.loginName = event.args[0];
          }
          console.log(event.args[0]);
        }
        //console.log(event);
      });
    },
    taobaoSelect() {
      this.$http.get('taobaoSelect').then((res) => {
        if (res.code == 200) {
          var taobao = res.data;
          if (taobao.seller) {
            this.sellerList = taobao.seller;
          }
          if (taobao.buyer) {
            this.buyerList = taobao.buyer;
          }
        }
      });
    },
    bindSeller() {
      if (this.loginName != this.bindName) {
        this.$Message.error('登陆验证错误');
        return;
      }
      var params = {
        type: 'seller',
        name: this.bindName
      };
      this.$http.post('taobaoAdd', params).then((res) => {
        if (res.code == 200) {
          this.$Notice.success({
            title: '操作成功！',
          });
          this.taobaoSelect();
          this.webview.loadURL(this.logoutUrl);
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    bindBuyer() {
      if (this.loginName != this.bindName) {
        this.$Message.error('登陆验证错误');
        return;
      }
      var params = {
        type: 'buyer',
        name: this.bindName,
        pwd: this.bindPwd,
      };
      this.$http.post('taobaoAdd', params).then((res) => {
        if (res.code == 200) {
          this.$Notice.success({
            title: '操作成功！',
          });
          this.taobaoSelect();
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    tagClose(id) {
      this.$Modal.confirm({
        title: '确认操作',
        content: '<p>确认删除？</p>',
        onOk: () => {
          var params = {
            id: id
          };
          this.$http.post('taobaoDel', params).then((res) => {
            if (res.code == 200) {
              this.$Notice.success({
                title: '操作成功！',
              });
              this.taobaoSelect();
            } else {
              this.$Message.error(res.msg);
            }
          });
        }
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
