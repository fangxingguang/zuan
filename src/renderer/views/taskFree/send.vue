<template>
  <div>
    <Row>
      <Col span="12">
      <Icon type="help-circled"></Icon>
      <a href="#">已发任务</a>
      </Col>
      <Col span="12">
      <span class="search-input">
        <Input placeholder="关键词" v-model="searchValue">
        <label slot="prepend">商品名称：</label>
        <Button slot="append" icon="ios-search" @click="search"></Button>
        </Input>
      </span>
      </Col>
    </Row>
    <br/>
    <div class="list-page">
      <Page :total="pageTotal" @on-change="pageChange" size="small"></Page>
    </div>
    <div v-for="(task, index) in taskList">
      <Card>
        <Row>
          <Col span="16">
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
          <Col span="8">
          <Button type="primary" size="small" @click="showDetail(task)">详情</Button>
          &nbsp;&nbsp;
          <Poptip confirm title="您确认删除该任务吗？" @on-ok="taskDelete(index,task)">
            <Button type="warning" size="small">删除</Button>
          </Poptip>
          &nbsp;&nbsp;
          <button type="button" class="ivu-btn ivu-btn-warning" @click="searchLikeTask(task)">搜索相近商品</button>
          </Col>
          <button type="button" class="ivu-btn ivu-btn-warning" @click="inviteSelect(task)">
            查看邀请
          </button>
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

    <Modal v-model="showInviteFlag" title="邀请记录">
      <div v-for="(invite, index) in inviteSendList">
        <Row>
          <Col span="16">
          <p>
            <Button type="text">价格：{{invite.task.price}} 元</Button>
            <Button type="text">商品：
              <a :href="task.url">{{invite.task.name}}</a>
            </Button>
          </p>
          <p>
            <Button-group size="small">
              <Button type="text">{{invite.task.search_key}}</Button>
              <Button type="text">{{task.comment}}</Button>
              <Button type="text">.{{task.buyer}}</Button>
              <Button type="text">QQ：{{invite.task.qq}}</Button>
              <Button type="text">旺旺：{{invite.task.seller}}</Button>
            </Button-group>
          </p>
          </Col>
          <Col span="8">
          <Poptip confirm title="您确认取消邀请吗？" @on-ok="inviteUpdate(index,invite,-1)">
            <Button type="warning" size="small">取消</Button>
          </Poptip>
          </Col>
        </Row>
      </div>
      <div v-for="(task, index) in inviteReceiveList">
        <Row>
          <Col span="16">
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
          <Col span="8">
          <Poptip confirm title="确认接受？" @on-ok="inviteUpdate(index,task,1)">
            <Button type="primary" size="small">接受</Button>&nbsp;
          </Poptip>
          <Poptip confirm title="确认拒绝？" @on-ok="inviteUpdate(index,task,-2)">
            <Button type="warning" size="small">拒绝</Button>
          </Poptip>
          </Col>
        </Row>
      </div>
    </Modal>

  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [],
      searchValue: '',
      pageTotal: 0,
      showDetailFlag: false,
      task: {},
      showInviteFlag: false,
      myTaskList: [],
      myTaskId: '',
      inviteSendList: [],
      inviteReceiveList: []
    }
  },
  created: function () {
    this.taskSelect({});
  },
  methods: {
    taskSelect(params) {
      params.type = 1;
      this.$http.get('taskSelectSend', { params: params }).then((res) => {
        if (res.code == 200) {
          this.taskList = res.data.data;
          this.pageTotal = res.total;
        }
      });
    },
    search() {
      var params = {
        key: 'name',
        value: this.searchValue
      };
      this.taskSelect(params);
    },
    pageChange(page) {
      var params = {
        page: page,
      };
      this.taskSelect(params);
    },
    showDetail(task) {
      this.task = task;
      this.showDetailFlag = true;
    },
    searchLikeTask(task) {
      this.$store.dispatch('freeTaskSelect', { price: task.price });
    },
    taskDelete(index, task) {
      var params = {
        id: task.id,
      };
      this.$http.post('taskDelete', params).then((res) => {
        if (res.code == 200) {
          this.taskList.splice(index, 1);
          this.$Notice.success({ title: '删除成功！' });
        } else {
          this.$Notice.error({ title: res.msg });
        }
      });
    },
    inviteSelect(task) {
      this.showInviteFlag = true;
      this.task = task;
      var params = {
        task_id: task.id,
      };
      this.$http.get('inviteSelect', { params: params }).then((res) => {
        if (res.code == 200) {
          this.inviteSendList = res.data.sendList;
          this.inviteReceiveList = res.data.receiveList;
        }
      });
    },
    inviteUpdate(index, invite, status) {
      var params = {
        id: invite.id,
        status: status
      };
      this.$http.post('inviteUpdate', params).then((res) => {
        if (res.code == 200) {
          this.inviteSelect(this.task);
          this.$Notice.success({ title: '操作成功！' });
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
