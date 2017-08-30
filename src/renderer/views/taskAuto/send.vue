<template>
  <div>
    <Card>
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
            </Col>
          </Row>
        </Card>
      </div>
      <div class="list-page">
        <Page :total="pageTotal" @on-change="pageChange" size="small"></Page>
      </div>

    </Card>

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
    }
  },
  created: function() {
    this.taskSelect({});
  },
  methods: {
    taskSelect(params) {
      params.type = 2;
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
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
</style>
