<style scoped>
.layout {
  background: #f5f7f9;
  min-width: 800px;
}

.layout-nav {
  height: 50px;
}

.layout-assistant {
  width: 400px;
  margin: 0 auto;
  height: inherit;
}

.layout-content {
  min-height: 500px;
  padding: 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.ivu-menu-item {
  padding: 0 10px;
}

.layout-sub-menu {
  height: 40px;
  line-height: 40px;
}

.layout-right-menu {
  float: right;
  margin-right: 5px;
}

.footer-set {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>
<template>
  <div class="layout">
    <Menu mode="horizontal" theme="primary" :active-name="$route.path" @on-select="menuRouter">
      <div class="layout-nav">
        <Menu-item name="/">
          <Icon type="home"></Icon>
          首页
        </Menu-item>
        <Menu-item name="/taskFree">
          <Icon type="android-people"></Icon>
          免费任务大厅
        </Menu-item>
        <Menu-item name="/taskAutoSend">
          <Icon type="social-android"></Icon>
          自动任务大厅
        </Menu-item>
        <Menu-item name="/flow">
          <Icon type="stats-bars"></Icon>
          发布收藏 | 搜索流量
        </Menu-item>
        <Menu-item name="/user">
          <Icon type="person"></Icon>
          会员中心 | 充值
        </Menu-item>
        <Menu-item name="/express">
          <Icon type="android-mail"></Icon>
          空包单号
        </Menu-item>
  
        <div class="layout-right-menu">
          <router-link to="/login">
            <Button>登录</Button>
          </router-link>
        </div>
      </div>
    </Menu>
    <Menu mode="horizontal" class="layout-sub-menu" :active-name="$route.path" @on-select="menuRouter" v-show="menuShow('/taskFree')">
      <div class="layout-assistant">
        <Menu-item name="/taskFree">免费任务</Menu-item>
        <Menu-item name="/taskFreeSend">已发任务</Menu-item>
        <Menu-item name="/taskFreeMy">我的任务</Menu-item>
        <Menu-item name="/taskFreeAdd">发布任务</Menu-item>
      </div>
    </Menu>
    <Menu mode="horizontal" class="layout-sub-menu" :active-name="$route.path" @on-select="menuRouter" v-show="menuShow('/taskAuto')">
      <div class="layout-assistant">
        <Menu-item name="/taskAutoSend">已发任务</Menu-item>
        <Menu-item name="/taskAutoMy">我的任务</Menu-item>
        <Menu-item name="/taskAutoAdd">发布任务</Menu-item>
      </div>
    </Menu>
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <Affix :offset-bottom="5">
      <div class="layout-copy">
        <span class="footer-set">
          <Dropdown placement="top-end" trigger="click" @on-click="setClick">
            <Button type="primary" icon="gear-b" shape="circle">设置</Button>
            <Dropdown-menu slot="list">
              <Dropdown-item name="taobaoBind">绑定账号</Dropdown-item>
              <Dropdown-item divided>充值</Dropdown-item>
              <Dropdown-item divided>联系客服</Dropdown-item>
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
  computed: {

  },
  methods: {
    menuRouter(name) {
      this.$router.push({ path: name });
    },
    menuShow(key) {
      return this.$route.path.indexOf(key) == 0;
    },
    setClick(name) {
      this.$router.push({ path: name });
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
