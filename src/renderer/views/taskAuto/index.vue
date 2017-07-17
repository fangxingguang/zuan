<template>
  <div>
    <Card>
      <Row>
        <Col span="12">
        <Icon type="help-circled"></Icon>
        <a href="#">自动任务</a>
        </Col>
        <Col span="12">
        <span class="search-input">
          <Input placeholder="相近金额靠前">
          <label slot="prepend">任务金额：</label>
          <Button slot="append" icon="ios-search"></Button>
          </Input>
        </span>
        </Col>
      </Row>
      <br/>
      <div data-v-ed72c544="" class="ivu-table-wrapper">
        <div class="ivu-table">
          <div class="ivu-table-body">
            <table cellspacing="0" cellpadding="0" border="0">
              <colgroup>
                <col width="600">
                <col width="150">
                <col width="150">
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
                    </div>
                  </td>
                  <td class="">
                    <div class="ivu-table-cell">
                      <div>
                        <button type="button" class="ivu-btn ivu-btn-warning">
                          邀请互拍
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="ivu-table-tip" style="display: none;">
            <table cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td>
                    <span>暂无筛选结果</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!---->
          <!---->
          <!---->
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.search-input {
  float: right;
}
</style>
