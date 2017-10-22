<template>
  <div>
    <Card>
      <Tabs type="card" v-model="tabIndex">
        <Tab-pane label="发布任务">
          <add></add>
        </Tab-pane>
        <Tab-pane label="已发布任务">
          <send v-if="tabIndex==1"></send>
        </Tab-pane>
        <Tab-pane label="我的任务">
          <my v-if="tabIndex==2"></my>
        </Tab-pane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
import add from './add';
import send from './send';
import my from './my';
export default {
  data() {
    return {
      tabIndex: 0
    }
  },
  components: {
    add, send, my
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
</style>
