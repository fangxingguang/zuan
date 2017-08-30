<template>
  <div>
    <Row>
      <Col span="12">
      <Icon type="help-circled"></Icon>
      <a href="#">接任务必看，违者封号！</a>
      </Col>
      <Col span="12">
      <span class="search-input">
        <Input placeholder="相近金额靠前" v-model="searchValue">
        <label slot="prepend">任务金额：</label>
        <Button slot="append" icon="ios-search" @click="search"></Button>
        </Input>
      </span>
      </Col>
    </Row>
    <br/>
    <div class="list-page">
      <Page :total="pageTotal" @on-change="pageChange" size="small"></Page>
    </div>
    <div v-for="task in taskList">
      <Card>
        <Row>
          <Col span="18">
          <p>
            <Button type="text">价格：{{task.price}} 元</Button>
            <Button type="text">商品：
              <a :href="task.url">{{task.name}}</a>
            </Button>
          </p>
          <p>
            <Button-group size="small">
              <Button type="text">{{task.search_key}}</Button>
              <Button type="text">{{task.comment}}</Button>
              <Button type="text">买号：{{task.buyer}}</Button>
              <Button type="text">QQ：{{task.qq}}</Button>
              <Button type="text">旺旺：{{task.seller}}</Button>
            </Button-group>
          </p>
          </Col>
          <Col span="6">
          <Button type="primary" size="small" @click="showDetail(task)">详情</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" class="ivu-btn ivu-btn-warning" @click="showInvite(task)">邀请互拍</button>
          </Col>
        </Row>
      </Card>
    </div>
    <div class="list-page">
      <Page :total="pageTotal" @on-change="pageChange" size="small"></Page>
    </div>

    <Modal v-model="showDetailFlag" title="任务详情">
      <Row>
        <Col span="4">商品名称：</Col>
        <Col span="20">{{task.name}}</Col>
      </Row>
      <Row>
        <Col span="4">商品价格：</Col>
        <Col span="20">{{task.price}}</Col>
      </Row>
      <Row>
        <Col span="4">商品链接：</Col>
        <Col span="20">{{task.url}}</Col>
      </Row>
      <Row>
        <Col span="4">搜索关键词：</Col>
        <Col span="20">{{task.search_key}}</Col>
      </Row>
      <Row>
        <Col span="4">搜索排名：</Col>
        <Col span="20">{{task.rank}}</Col>
      </Row>
      <Row>
        <Col span="4">好评语录：</Col>
        <Col span="20">{{task.comment}}</Col>
      </Row>
      <Row>
        <Col span="4">备注：</Col>
        <Col span="20">{{task.remark}}</Col>
      </Row>
    </Modal>

    <Modal v-model="showInviteFlag" title="邀请互拍" @on-ok="invite">
      <Row>
        <Col span="4">我的任务：</Col>
        <Col span="20">
        <Select v-model="myTaskId">
          <Option v-for="item in myTaskList" :value="item.id" :key="item.id">{{ item.name }}（{{item.price}}）</Option>
        </Select>
        </Col>
      </Row>

    </Modal>

  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      page: 0,
      showDetailFlag: false,
      task: {},
      showInviteFlag: false,
      myTaskList: [],
      myTaskId: ''
    }
  },
  created: function() {
    this.taskSelect({});
  },
  computed: {
    taskList() {
      return this.$store.state.task.freeTaskList;
    },
    pageTotal() {
      return this.$store.state.task.freeTaskTotal;
    }
  },
  methods: {
    taskSelect() {
      var params = {};
      if (this.searchValue) {
        params.price = this.searchValue;
      }
      params.page = this.page;
      this.$store.dispatch('freeTaskSelect', params);
    },
    search() {
      this.taskSelect();
    },
    pageChange(page) {
      this.page = page;
      this.taskSelect();
    },
    showDetail(task) {
      this.task = task;
      this.showDetailFlag = true;
    },
    showInvite(task) {
      this.task = task;
      this.showInviteFlag = true;
      this.taskSelectWait();
    },
    taskSelectWait() {
      var params = {
        type: 1
      };
      this.$http.get('taskSelectWait', { params: params }).then((res) => {
        if (res.code == 200) {
          this.myTaskList = res.data;
        }
      });
    },
    invite() {
      var params = {
        my_task_id: this.myTaskId,
        other_task_id: this.task.id
      };
      this.$http.post('taskInvite', params).then((res) => {
        if (res.code == 200) {
          this.$Notice.success({ title: '邀请成功！' });
        } else {
          this.$Notice.error({ title: res.msg });
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
