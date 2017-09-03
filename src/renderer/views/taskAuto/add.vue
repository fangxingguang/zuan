<template>
  <div>
    <Card style="width:500px;margin:0 auto;">
      <Form :model="formItem" :label-width="100" :rules="rules" ref="taskForm">
        <Form-item label="卖家账号" prop="seller">
          <Select v-model="formItem.seller" placeholder="我的淘宝店铺账号">
            <Option v-for="item in sellerList" :value="item.name" :key="item.name">{{ item.name }}</Option>
          </Select>
        </Form-item>
        <Form-item label="购买小号" prop="buyer">
          <Select v-model="formItem.buyer" placeholder="互拍使用的淘宝小号">
            <Option v-for="item in buyerList" :value="item.name" :key="item.name">{{ item.name }}</Option>
          </Select>
        </Form-item>
        <Form-item label="宝贝链接" prop="url">
          <Input v-model="formItem.url" placeholder=""></Input>
        </Form-item>
        <Form-item label="商品名称" prop="name">
          <Input v-model="formItem.name" placeholder=""></Input>
        </Form-item>
        <Form-item label="商品价格" prop="price">
          <Input v-model="formItem.price" placeholder="" style="width:80px;"></Input> 元
        </Form-item>
        <Form-item label="联系QQ" prop="qq">
          <Input v-model="formItem.qq" placeholder="请填写常用在线QQ，互拍前需要相互联系"></Input>
        </Form-item>
        <Form-item label="搜索关键词" prop="search_key">
          <Input v-model="formItem.search_key" placeholder="填写要搜索的关键词"></Input>
        </Form-item>
        <Form-item label="排名" prop="rank">
          <Input v-model="formItem.rank" placeholder="备注宝贝排在第几页第几位等信息"></Input>
        </Form-item>
        <Form-item label="好评语录" prop="comment">
          <Input v-model="formItem.comment" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写好评评语 限制300字"></Input>
        </Form-item>
        <Form-item label="互拍时间" prop="time">
          <Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placement="top-start" placeholder="选择日期" class="search-date" @on-change="timeChange"></Date-picker>
          <Button type="dashed" @click="timeAdd" icon="plus-round">添加</Button>
          <p>
            <Tag type="border" closable v-for="time in timeList">{{time}}</Tag>
            <Tag type="border" closable>2017-07-23 10:00</Tag>
            <Tag type="border" closable>2017-07-23 10:00</Tag>
            <Tag type="border" closable>2017-07-23 10:00</Tag>
          </p>
        </Form-item>
        <Form-item label="备注" prop="remark">
          <Input v-model="formItem.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写其它说明或者要求 限制100字"></Input>
        </Form-item>
        <Form-item label="消耗克拉">
          <Button type="dashed">商品：10</Button>+
          <Button type="dashed">关键词：20</Button>+
          <Button type="dashed">好评：30</Button> = 50 克拉
        </Form-item>
        <Form-item>
          <Button type="primary" @click="submit">提交</Button>
          <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
        <Form-item>
          温馨提示：产品拍下后没有及时付款，下一个任务将无法进行，所有互拍正常都是自动收货，可和对方联系协商收货时间。
        </Form-item>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    var validateTime = (rule, value, callback) => {
      if (value == "" && this.timeRadio == 1) {
        callback(new Error('时间不能为空!'));
      } else {
        callback();
      }
    };
    return {
      buyerList: [],
      sellerList: [],
      formItem: {
        type: 2,
        seller: '',
        buyer: '',
        url: '',
        name: '',
        price: '',
        qq: '',
        search_key: '',
        rank: '',
        comment: '',
        time: ['2016-01-01', '2016-02-15'],
        remark: ''
      },
      time: '',
      timeList: [],
      rules: {
        seller: [
          { required: true, message: '必填', trigger: 'blur' }
        ],
        buyer: [
          { required: true, message: '必填', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '必填', trigger: 'blur' },
          { type: 'url', message: '链接地址错误', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '必填', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '必填', trigger: 'blur' }
        ],
        qq: [
          { required: true, message: '必填', trigger: 'blur' }
        ],
        search_key: [
          { required: true, message: '必填', trigger: 'blur' }
        ],
        rank: [
          { required: true, message: '必填', trigger: 'blur' }
        ],
        comment: [
          { required: true, message: '必填', trigger: 'blur' },
          { type: 'string', max: 300, message: '长度不能大于300位', trigger: 'blur' }
        ],
        time: [
          {
            validator: validateTime, trigger: 'blur'
          }
        ],
        remark: [
          { required: true, message: '必填', trigger: 'blur' },
          { type: 'string', max: 100, message: '长度不能大于100位', trigger: 'blur' }
        ]
      },
    }
  },
  created: function() {
    this.taobaoSelect();
  },
  methods: {
    taobaoSelect() {
      this.$http.get('taobaoSelect').then((res) => {
        if (res.code == 200) {
          var taobao = res.data;
          if (taobao.seller) {
            this.sellerList = taobao.seller;
          }
          if (taobao.buyer) {
            this.buyerList = taobao.buyer;
          }
        }
      });
    },
    timeChange(time) {
      console.log(time)
      this.time = time;
    },
    timeAdd() {
      if (this.time) {
        this.timeList.push(this.time);
      }
    },
    submit() {
      this.$refs['taskForm'].validate((valid) => {
        if (valid) {
          this.formItem.time = this.timeList.join(',');
          this.$http.post('taskAdd', this.formItem).then((res) => {
            if (res.code == 200) {
              this.$Notice.success({
                title: '操作成功！',
              });
              this.$refs['taskForm'].resetFields();
            } else {
              this.$Message.error(res.msg);
            }
          });
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
