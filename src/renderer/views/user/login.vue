<<style scoped>
    .content-card{
        width: 380px;
        min-height: 305px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        margin: 0 auto;
        border-radius: 4px;
        opacity: .95;
        border: 1px solid #dedede;
    }
</style>

<template>
    <div>
        <canvas ref="renderCanvas"></canvas>
        <Card class="content-card" v-if="type=='login'">
            <p slot="title">
                <Icon type="person"></Icon>
                登录
            </p>
            <a href="#" slot="extra">
                <Icon type="person-add"></Icon>
                <a href="javascript:void(0)" @click="changeShow('register')">注册 >></a>
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
                    <Form-item>
                        <Button type="primary" size="large" @click="handleSubmit('formInline')">登录</Button>
                    </Form-item>
                </Form>
            </div>
        </Card>
        <Card class="content-card" v-if="type=='register'">
            <p slot="title">
                <Icon type="person-add"></Icon>
                注册
            </p>
            <a href="#" slot="extra">
                <Icon type="person"></Icon>
                <a href="javascript:void(0)" @click="changeShow('login')">登录 >></a>
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
    </div>
</template>
<script>
import { CanvasAnimate } from '@/utils/CanvasAnimate';
export default {
    data() {
        return {
            type: 'login',
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        this.canvas();
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
        },
        changeShow(type) {
            this.type = type;
        },
        canvas() {
            const renderCanvas = this.$refs.renderCanvas;
            var canvas = new CanvasAnimate(renderCanvas, { length: 60, clicked: true, moveon: true })
            canvas.Run() // 开始运行
        }
    }
}
</script>
