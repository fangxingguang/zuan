<template>
  <div>
    <Card>
      <Tabs type="card" v-model="tabIndex" @on-click="tabClick">
        <Tab-pane label="免费任务">
          <list v-if="tabIndex==0"></list>
        </Tab-pane>
        <Tab-pane label="发布任务">
          <add></add>
        </Tab-pane>
        <Tab-pane label="已发布任务">
          <send v-if="tabIndex==2"></send>
        </Tab-pane>
        <Tab-pane label="我的任务">
          <my v-if="tabIndex==3"></my>
        </Tab-pane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
import list from './list';
import add from './add';
import send from './send';
import my from './my';
export default {
  data() {
    return {
      listSearchPrice: ''
    }
  },
  computed: {
    tabIndex() {
      return this.$store.state.task.freeTaskTabIndex;
    }
  },
  methods: {
    tabClick(name) {
      this.$store.dispatch('changeState', { freeTaskTabIndex: name });
    }
  },
  components: {
    list, add, send, my
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
</style>
