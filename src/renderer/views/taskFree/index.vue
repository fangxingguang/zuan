<template>
  <div>
    <Card>
      <Tabs type="card">
        <Tab-pane label="免费任务">
          <list></list>
        </Tab-pane>
        <Tab-pane label="发布任务">
          <add></add>
        </Tab-pane>
        <Tab-pane label="已发布任务">
          <send></send>
        </Tab-pane>
        <Tab-pane label="我的任务">
          <my></my>
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
