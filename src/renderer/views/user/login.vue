<<style scoped>
    .content-card{
        width: 350px;
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
     .myCanvas{
        height:100%;
        width: 100%;
      }
      .image-code{
          cursor:pointer;
      }
</style>

<template>
    <div>
        <canvas ref="renderCanvas" class="myCanvas"></canvas>
        <Card class="content-card" v-show="type=='login'">
            <p slot="title">
                <Icon type="person"></Icon>
                登录
            </p>
            <a href="#" slot="extra">
                <Icon type="person-add"></Icon>
                <a href="javascript:void(0)" @click="changeShow('register')">注册 >></a>
            </a>
            <div>
                <Form ref="loginForm" :model="loginForm" :rules="rules">
                    <Form-item prop="name">
                        <Input type="text" size="large" v-model="loginForm.name" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="pwd">
                        <Input type="password" size="large" v-model="loginForm.pwd" placeholder="密码" @on-enter="loginSubmit('loginForm')">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" size="large" @click="loginSubmit" :loading="loading">登录</Button>
                    </Form-item>
                </Form>
            </div>
        </Card>
        <Card class="content-card" v-show="type=='register'">
            <p slot="title">
                <Icon type="person-add"></Icon>
                注册
            </p>
            <a href="#" slot="extra">
                <Icon type="person"></Icon>
                <a href="javascript:void(0)" @click="changeShow('login')">登录 >></a>
            </a>
            <div>
                <Form ref="registerForm" :model="registerForm" :rules="rules">
                    <Form-item prop="name">
                        <Input type="text" size="large" v-model="registerForm.name" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="pwd">
                        <Input type="password" size="large" v-model="registerForm.pwd" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="code">
                        <Input type="text" v-model="registerForm.code" placeholder="验证码" style="width:150px;float:left;">
                        <Icon type="image" slot="prepend"></Icon>
                        </Input>
                        <img :src="imageCode" class="image-code" @click="refreshImageCode"></img>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" size="large" @click="registerSubmit">注册</Button>
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
            loginForm: {
                name: '',
                pwd: ''
            },
            registerForm: {
                name: '',
                pwd: '',
                code: ''
            },
            rules: {
                name: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 3, message: '密码长度不能小于3位', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请填写验证码', trigger: 'blur' }
                ],
            },
            imageCode: window.api + 'imageCode',
            loading: false
        }
    },
    mounted() {
        this.canvas();
    },
    methods: {
        loginSubmit() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.loading = true;
                    this.$http.post('login', this.loginForm).then((res) => {
                        this.loading = false;
                        if (res.code == 200) {
                            this.$store.dispatch('SIGNIN', res.data);
                            this.$Message.success('登陆成功!');
                            this.$router.push('/index');
                        } else {
                            this.$Message.error(res.msg);
                        }
                    });
                }
            })
        },
        registerSubmit() {
            this.$refs['registerForm'].validate((valid) => {
                if (valid) {
                    this.$http.post('register', this.registerForm).then((res) => {
                        if (res.code == 200) {
                            this.$store.dispatch('SIGNIN', res.data);
                            this.$Message.success('注册成功!');
                            this.$router.push('/index');
                        } else {
                            this.$Message.error(res.msg);
                        }
                    });
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
        },
        refreshImageCode() {
            this.imageCode = window.api + 'imageCode?r=' + Math.random();
        }
    }
}
</script>
