<style scoped>
.layout-top-menu {
  height: 30px;
  padding-top: 5px;
}

.layout-main-menu {
  display: block;
}

.layout-right-tools {
  color: #fff;
  float: right;
  margin: 2px 20px 0 0;
  -webkit-app-region: no-drag;
}

.layout-right-tools label {
  margin: 0 5px;
}

.logo {
  float: left;
  width: 250px;
  padding: 0;
  margin: 0;
  margin-left: 20px;
}

.logo a {
  height: 60px;
  color: #fff;
}

.layout {
  background: #f5f7f9;
  min-width: 800px;
}

.layout-header {
  min-width: 1000px;
  width: 100%;
  position: absolute;
  background: #2d8cf0;
  -webkit-app-region: drag;
}

.layout-content {
  padding: 5px;
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}

.layout-content-main {
  padding: 10px;
}

.ivu-menu-item {
  padding: 0 10px !important;
  -webkit-app-region: no-drag;
}

.layout-right-menu {
  float: right;
  margin-right: 5px;
  -webkit-app-region: no-drag;
}

.layout-right-menu i {
  font-size: 20px;
  color: #ddd;
  margin: 0 5px;
  cursor: pointer;
}

.footer-set {
  position: absolute;
  right: 5px;
  bottom: 5px;
}

.ivu-menu-item-active {
  border-bottom: 2px solid #87DBAE;
}

.right-menu-list {
  -webkit-app-region: no-drag;
  padding: 5px;
  cursor: pointer;
}
</style>
<template>
  <div class="layout">
    <div class="layout-header">
      <div class="layout-top-menu">
        <Row>
          <Col span="8">
          <h3 class="logo">
            <router-link to="/index">
              <Icon type="social-snapchat-outline" style="font-size:20px;"></Icon> 钻起来 永久免费互动平台</router-link>
          </h3>
          </Col>
          <Col span="16">
          <div class="layout-right-menu">
            <span>
              <Dropdown trigger="click" @on-click="rightMenuClick">
                <a href="javascript:void(0)">
                  <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                  <Dropdown-item class="right-menu-list" name="logout">
                    <Icon type="log-out" style="font-size:12px;color:red;"></Icon> 退出</Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
            </span>
            <span @click="sendToMain('winMin')">
              <Icon type="minus"></Icon>
            </span>
            <span @click="sendToMain('winMax')">
              <Icon type="arrow-expand"></Icon>
            </span>
            <span @click="sendToMain('winClose')">
              <Icon type="android-close"></Icon>
            </span>
          </div>
          <span class="layout-right-tools">
            <label>用户名：fangxingguang</label>&nbsp;
            <label>余额：1000 元</label>
            <label>发布点：100 克拉</label>
          </span>
          </Col>
        </Row>
      </div>
      <div class="layout-main-menu">
        <Menu mode="horizontal" theme="primary" :active-name="$route.path" @on-select="menuRouter">
          <div>
            <Menu-item name="/index">
              <Icon type="home"></Icon>
              首页
            </Menu-item>
            <Menu-item name="/taskFree">
              <Icon type="android-people"></Icon>
              免费任务
            </Menu-item>
            <Menu-item name="/taskAuto">
              <Icon type="social-android"></Icon>
              自动任务
            </Menu-item>
            <Menu-item name="/flow">
              <Icon type="stats-bars"></Icon>
              收藏 | 搜索流量
            </Menu-item>
            <Menu-item name="/express">
              <Icon type="android-mail"></Icon>
              空包单号
            </Menu-item>
            <Menu-item name="/user">
              <Icon type="person"></Icon>
              会员中心
            </Menu-item>
          </div>
        </Menu>
      </div>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <Affix :offset-bottom="5">
      <div class="layout-copy">
        <span class="footer-set">
          <Dropdown placement="top-end" trigger="click" @on-click="toolsClick">
            <Button type="primary" icon="help-circled" shape="circle">帮助</Button>
            <Dropdown-menu slot="list">
              <Dropdown-item name="help">联系客服</Dropdown-item>
               <Dropdown-item name="debug">调试工具</Dropdown-item> 
            </Dropdown-menu>
          </Dropdown>
        </span>
      </div>
    </Affix>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
    menuRouter(name) {
      this.$router.push({ path: name });
    },
    toolsClick(name) {
      if (name == 'debug') {
        this.$electron.ipcRenderer.send('ipc', 'debug');
      }
    },
    sendToMain($cmd) {
      this.$electron.ipcRenderer.send('ipc', $cmd);
    },
    rightMenuClick(name) {
      if (name == 'logout') {
        this.$router.push({ path: '/' });
      }
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
