<template>
  <div>
    <Card>
      <Row>
        <Col span="24">
        <span class="search-input">
          <Input placeholder="关键词">
          <Select slot="prepend" style="width: 100px" clearable>
            <Option value="mySeller">我的卖家账号</Option>
            <Option value="myBuyer">我的买家账号</Option>
            <Option value="otherSeller">对方买家账号</Option>
            <Option value="otherBuyer">对方买家账号</Option>
            <Option value="productName">商品名称</Option>
          </Select>
          <Button slot="append" icon="ios-search"></Button>
          </Input>
        </span>
        <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" class="search-date"></Date-picker>
        </Col>
      </Row>
      <br/>
      <div class="ivu-table-wrapper">
        <div class="ivu-table">
          <div class="ivu-table-body">
            <table cellspacing="0" cellpadding="0" border="0">
              <colgroup>
                <col>
              </colgroup>
              <tbody class="ivu-table-tbody">
                <tr class="ivu-table-row">
                  <td class="">
                    <div class="ivu-table-cell">
                      <span>
                        <p>
                          <Button type="text">任务编号：2017071612401122</Button>
                          <Button type="text">状态：</Button>
                          <Radio-group type="button" size="small">
                              <Radio label="已拍下"></Radio>
                              <Radio label="已付款"></Radio>
                              <Radio label="已完成"></Radio>
                              <Radio label="已退款"></Radio>
                          </Radio-group>
                          （自行标注不影响任务进程）
                        </p>
                        <p>
                          <Badge count="我的"></Badge>
                          <Button type="text">价格：100 元</Button>
                          <Button type="text">商品：
                            <a href="#">撒萨达萨达萨达萨达萨达萨达撒的</a>
                          </Button>
                        </p>
                        <p>
                          <Button-group size="small">
                            <Button type="text">需要搜索</Button>
                            <Button type="text">无评语</Button>
                            <Button type="text">卖号：1233333</Button>
                            <Button type="text">买号：1233333</Button>
                            <Button type="text">QQ：222222222</Button>
                            <Button type="text">旺旺：565656561415565</Button>
                          </Button-group>
                        </p>
                         <p>
                          <Badge count="对方"></Badge>
                          <Button type="text">价格：100 元</Button>
                          <Button type="text">商品：
                            <a href="#">撒萨达萨达萨达萨达萨达萨达撒的</a>
                          </Button>
                        </p>
                        <p>
                          <Button-group size="small">
                            <Button type="text">搜索关键词：衣服</Button>
                            <Button type="text">排名：第2页4个</Button>
                            <Button type="text">卖号：1233333</Button>
                            <Button type="text">买号：1233333</Button>
                            <Button type="text">QQ：222222222</Button>
                            <Button type="text">旺旺：565656561415565</Button>
                            <Button type="text">评语：真不错！</Button>
                          </Button-group>
                        </p>
                      </span>
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

.search-date {
  float: right;
  margin-right: 10px;
}
</style>
