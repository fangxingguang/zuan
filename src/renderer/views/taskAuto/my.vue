<template>
  <div>
    <Card>
      <Row>
        <Col span="24">
        <span class="search-input">
          <Input placeholder="关键词" v-model="searchVal">
          <Select slot="prepend" style="width: 100px" clearable v-model="searchKey">
            <Option value="my_seller">我的卖家账号</Option>
            <Option value="my_buyer">我的买家账号</Option>
            <Option value="other_seller">对方卖家账号</Option>
            <Option value="other_buyer">对方买家账号</Option>
            <Option value="name">商品名称</Option>
          </Select>
          <Button slot="append" icon="ios-search" @click="search"></Button>
          </Input>
        </span>
        <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" class="search-date" @on-change="searchDateChange"></Date-picker>
        </Col>
      </Row>
      <br/>
      <div v-for="task in taskList">
        <Card>
          <Row>
            <Col span="5">
            <Button type="text">任务编号：{{task.id}}{{task.other_task_id}}</Button>
            </Col>
            <Col span="19">
            <p>
              <Button type="text">我：</Button>
              <Radio-group type="button" size="small" v-model="task.step" @on-change="stepChange(task)">
                <Radio label="1">已拍下</Radio>
                <Radio label="2">已付款</Radio>
                <Radio label="3">已发货</Radio>
                <Radio label="4">已完成</Radio>
                <Radio label="5">已退款</Radio>
              </Radio-group>
              （自行标注不影响任务进程）
            </p>
            <p>
              <Button type="text">他：</Button>
              <Radio-group type="button" size="small" v-model="task.other_task_step">
                <Radio label="1" disabled>已拍下</Radio>
                <Radio label="2" disabled>已付款</Radio>
                <Radio label="3" disabled>已发货</Radio>
                <Radio label="4" disabled>已完成</Radio>
                <Radio label="5" disabled>已退款</Radio>
              </Radio-group>
            </p>
            </Col>
          </Row>
          <Row>
            <Col span="24">
            <Badge count="我的"></Badge>
            <Button type="text">价格：{{task.price}} 元</Button>
            <Button type="text">商品：
             <a :href="task.url" target="__blank">{{task.name}}</a>
            </Button>
            </Col>
          </Row>
          <Row>
            <Col span="24">
            <Button-group size="small">
              <Button type="text">{{task.search_key}}</Button>
              <Button type="text">{{task.comment}}</Button>
              <Button type="text">买号：{{task.buyer}}</Button>
              <Button type="text">QQ：{{task.qq}}</Button>
              <Button type="text">旺旺：{{task.seller}}</Button>
            </Button-group>
            </Col>
          </Row>
          <Row>
            <Col span="24">
            <Badge count="对方"></Badge>
            <Button type="text">价格：{{task.other_task_price}} 元</Button>
            <Button type="text">商品：
              <a href="#">{{task.other_task_name}}</a>
            </Button>
            </Col>
          </Row>
          <Row>
            <Col span="24">
            <Button-group size="small">
              <Button type="text">{{task.other_task_search_key}}</Button>
              <Button type="text">{{task.other_task_comment}}</Button>
              <Button type="text">买号：{{task.other_task_buyer}}</Button>
              <Button type="text">QQ：{{task.other_task_qq}}</Button>
              <Button type="text">旺旺：{{task.other_task_seller}}</Button>
            </Button-group>
            </Col>
          </Row>
        </Card>
      </div>
      <div class="list-page">
        <Page :total="pageTotal" @on-change="pageChange" size="small"></Page>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [],
      pageTotal: 0,
      searchKey: '',
      searchVal: '',
      searchDate: [],
      params: {
        type: 2
      }
    }
  },
  created: function() {
    this.taskSelectDo();
  },
  methods: {
    taskSelectDo() {
      this.$http.get('taskSelectDo', { params: this.params }).then((res) => {
        if (res.code == 200) {
          this.taskList = res.data.data;
          this.pageTotal = res.total;
        }
      });
    },
    pageChange(page) {
      this.params.page = page;
      this.taskSelectDo();
    },
    search() {
      this.params.key = this.searchKey;
      this.params.value = this.searchVal;
      this.params.start_time = this.searchDate[0];
      this.params.end_time = this.searchDate[1];
      this.taskSelectDo();
    },
    searchDateChange(date) {
      console.log(date)
      this.searchDate = date;
    },
    stepChange(task) {
      var params = {
        id: task.id,
        step: task.step
      };
      this.$http.get('taskUpdate', { params: params }).then((res) => {
        if (res.code == 200) {
          this.$Notice.success({ title: '更新成功！' });
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

.search-date {
  float: right;
  margin-right: 10px;
}
</style>
