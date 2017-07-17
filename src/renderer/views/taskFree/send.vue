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
          <Input placeholder="关键词">
          <label slot="prepend">商品名称：</label>
          <Button slot="append" icon="ios-search"></Button>
          </Input>
        </span>
        </Col>
      </Row>
      <br/>
      <div class="ivu-table-wrapper">
        <div class="ivu-table">
          <div class="ivu-table-body">
            <table cellspacing="0" cellpadding="0" border="0">
              <colgroup>
                <col width="600">
                <col width="150">
                <col width="200">
              </colgroup>
              <tbody class="ivu-table-tbody">
                <tr class="ivu-table-row">
                  <td class="">
                    <div class="ivu-table-cell">
                      <span>
                        <p>
                          <Button type="text">价格：100 元</Button>
                          <Button type="text">商品：
                            <a href="#">撒萨达萨达萨达萨达萨达萨达撒的</a>
                          </Button>
                        </p>
                        <p>
                          <Button-group size="small">
                            <Button type="ghost">需要搜索</Button>
                            <Button type="ghost">无评语</Button>
                            <Button type="ghost">买号：1233333</Button>
                            <Button type="ghost">QQ：222222222</Button>
                            <Button type="ghost">旺旺：565656561415565</Button>
                          </Button-group>
                        </p>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="ivu-table-cell">
                      <Button type="primary" size="small">详情</Button>&nbsp;
                      <Button type="warning" size="small">删除</Button>
                    </div>
                  </td>
                  <td class="">
                    <div class="ivu-table-cell">
                      <div>
                        <button type="button" class="ivu-btn ivu-btn-warning" @click="taskFreeSearch">
                          搜索相近商品
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="ivu-table-row">
                  <td class="">
                    <div class="ivu-table-cell">
                      <span>
                        <p>
                          <Button type="text">价格：100 元</Button>
                          <Button type="text">商品：
                            <a href="#">撒萨达萨达萨达萨达萨达萨达撒的</a>
                          </Button>
                        </p>
                        <p>
                          <Button-group size="small">
                            <Button type="ghost">需要搜索</Button>
                            <Button type="ghost">无评语</Button>
                            <Button type="ghost">买号：1233333</Button>
                            <Button type="ghost">QQ：222222222</Button>
                            <Button type="ghost">旺旺：565656561415565</Button>
                          </Button-group>
                        </p>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="ivu-table-cell">
                      <Button type="primary" size="small">详情</Button>&nbsp;
                      <Button type="warning" size="small">删除</Button>
                    </div>
                  </td>
                  <td class="">
                    <div class="ivu-table-cell">
                      <div>
                        <button type="button" class="ivu-btn ivu-btn-warning" @click="showInvite=true">
                          查看邀请
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="ivu-table-row">
                  <td class="">
                    <div class="ivu-table-cell">
                      <span>
                        <p>
                          <Button type="text">价格：100 元</Button>
                          <Button type="text">商品：
                            <a href="#">撒萨达萨达萨达萨达萨达萨达撒的</a>
                          </Button>
                        </p>
                        <p>
                          <Button-group size="small">
                            <Button type="ghost">需要搜索</Button>
                            <Button type="ghost">无评语</Button>
                            <Button type="ghost">买号：1233333</Button>
                            <Button type="ghost">QQ：222222222</Button>
                            <Button type="ghost">旺旺：565656561415565</Button>
                          </Button-group>
                        </p>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="ivu-table-cell">
                      <Button type="primary" size="small">详情</Button>&nbsp;
                    </div>
                  </td>
                  <td class="">
                    <div class="ivu-table-cell">
                      <div>
                        <button type="button" class="ivu-btn ivu-btn-warning" @click="showOther=true">
                          互拍详情
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  
    <Modal v-model="showInvite" title="邀请记录" width="800">
      <p>
        <table>
          <colgroup>
            <col width="600">
            <col width="150">
          </colgroup>
          <tbody class="ivu-table-tbody">
            <tr>
              <td>
                <span>
                  <p>
                    <Button type="text">价格：100 元</Button>
                    <Button type="text">商品：
                      <a href="#">撒萨达萨达萨达萨达萨达萨达撒的</a>
                    </Button>
                  </p>
                  <p>
                    <Button-group size="small">
                      <Button type="ghost">需要搜索</Button>
                      <Button type="ghost">无评语</Button>
                      <Button type="ghost">买号：1233333</Button>
                      <Button type="ghost">QQ：222222222</Button>
                      <Button type="ghost">旺旺：565656561415565</Button>
                    </Button-group>
                  </p>
                </span>
              </td>
              <td>
                <Button type="primary" size="small">接受</Button>&nbsp;
                <Button type="warning" size="small">拒绝</Button>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <p>
                    <Button type="text">价格：100 元</Button>
                    <Button type="text">商品：
                      <a href="#">撒萨达萨达萨达萨达萨达萨达撒的</a>
                    </Button>
                  </p>
                  <p>
                    <Button-group size="small">
                      <Button type="ghost">需要搜索</Button>
                      <Button type="ghost">无评语</Button>
                      <Button type="ghost">买号：1233333</Button>
                      <Button type="ghost">QQ：222222222</Button>
                      <Button type="ghost">旺旺：565656561415565</Button>
                    </Button-group>
                  </p>
                </span>
              </td>
              <td>
                <Button type="warning" size="small">撤销</Button>
              </td>
            </tr>
          </tbody>
        </table>
  
      </p>
    </Modal>
  
    <Modal v-model="showOther" title="互拍详情" width="800">
      <p>
        <table>
          <colgroup>
            <col width="600">
          </colgroup>
          <tbody class="ivu-table-tbody">
            <tr>
              <td>
                <span>
                  <p>
                    <Button type="text">价格：100 元</Button>
                    <Button type="text">商品：
                      <a href="#">撒萨达萨达萨达萨达萨达萨达撒的</a>
                    </Button>
                  </p>
                  <p>
                    <Button-group size="small">
                      <Button type="ghost">需要搜索</Button>
                      <Button type="ghost">无评语</Button>
                      <Button type="ghost">买号：1233333</Button>
                      <Button type="ghost">QQ：222222222</Button>
                      <Button type="ghost">旺旺：565656561415565</Button>
                    </Button-group>
                  </p>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </p>
    </Modal>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInvite: false,
      showOther: false,
    }
  },
  methods: {
    taskFreeSearch() {
      this.$router.push({ path: '/taskFree' });
    }
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
</style>
