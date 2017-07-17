<<style scoped>
    .content-card{
        width:350px;
        margin:50px auto;
    }
</style>

<template>
    <Card class="content-card">
        <p slot="title">
            <Icon type="person-add"></Icon>
            注册
        </p>
        <a href="#" slot="extra">
            <Icon type="person"></Icon>
            <router-link to="login">登录 >></router-link>
        </a>
        <div>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <Form-item prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="code">
                    <Input type="text" v-model="formInline.code" placeholder="验证码" style="width:100px;">
                    <Icon type="image" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" size="large" @click="handleSubmit('formInline')">注册</Button>
                </Form-item>
            </Form>
        </div>
    </Card>
</template>
<script>
export default {
    data() {
        return {
            formInline: {
                user: '',
                password: '',
                code: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请填写验证码', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        }
    }
}
</script>
