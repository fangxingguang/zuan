import Vue from 'vue'
import { bus } from '@/utils/bus.js'
const remote = require('electron').remote
const BrowserWindow = remote.BrowserWindow
const ipcMain = remote.ipcMain
const path = require('path')
let win = null;
let contents = null;

//监听返回
ipcMain.on('taobao', (event, arg) => {
    console.log(arg);
    if (arg.method == 'checkLogin') {
        var isLogin = arg.params;
        if (!isLogin) {
            taobao.login();
        }
    } else if (arg.method == 'productSelect') {
        taobao.productSelect(arg.params);
    }
})

var taobao = {
    //初始化
    init: function () {
        var winArr = BrowserWindow.getAllWindows();
        winArr.forEach(function (e) {
            if (e.id > 1) {
                var win = BrowserWindow.fromId(e.id);
                win.close();
            }
        })
        if (contents == null) {
            var opts = {
                width: 1200,
                height: 700,
                minWidth: 1200,
                minHeight: 700,
                show: false,
                //frame : false,
                // autoHideMenuBar: true,
                fullscreenable: false,
                webPreferences: {
                    javascript: true,
                    plugins: true,
                    nodeIntegration: false, // 不集成 Nodejs
                    webSecurity: false,
                    preload: path.resolve(__dirname, 'taobao.js') // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
                }
            };
            win = new BrowserWindow(opts);
            win.on('closed', (e) => {
                contents = null;
                win = null;
            })
            win.loadURL('https://taobao.com');
            contents = win.webContents;
            //contents.openDevTools();
        }
    },
    //检查登陆
    checkLogin: function () {
        contents.send('taobao', { method: 'checkLogin', params: '' });
    },
    //登陆
    login: async function () {
        contents.loadURL('https://login.taobao.com/member/login.jhtml');
        await taobao.sleep(5000);
        win.focus();
        //显示登录框
        contents.sendInputEvent({ type: 'mouseMove', x: 1100, y: 230 });
        contents.sendInputEvent({ type: 'mouseDown', x: 1100, y: 230, button: 'left', clickCount: 1 });
        contents.sendInputEvent({ type: 'mouseUp', x: 1100, y: 230, button: 'left', clickCount: 1 });
        await taobao.sleep(1000);
        //点击用户名输入框
        contents.sendInputEvent({ type: 'mouseMove', x: 880, y: 310 });
        contents.sendInputEvent({ type: 'mouseDown', x: 880, y: 310, button: 'left', clickCount: 1 });
        contents.sendInputEvent({ type: 'mouseUp', x: 880, y: 310, button: 'left', clickCount: 1 });
        await taobao.sleep(1000);
        //输入用户名
        await taobao.input('');
        await taobao.sleep(1000);
        //点击密码框
        contents.sendInputEvent({ type: 'mouseMove', x: 880, y: 380 });
        contents.sendInputEvent({ type: 'mouseDown', x: 880, y: 380, button: 'left', clickCount: 1 });
        contents.sendInputEvent({ type: 'mouseUp', x: 880, y: 380, button: 'left', clickCount: 1 });
        await taobao.sleep(1000);
        //输入密码
        await taobao.input('');
        await taobao.sleep(1000);
        //回车登陆
        contents.sendInputEvent({ type: 'char', keyCode: '\u000d' }); //回车
    },
    //输入字符串
    input: function (str) {
        var charArr = str.split('');
        var symbolArr = ['*', '#'];
        for (var i = 0; i < charArr.length; i++) {
            var char = charArr[i];
            if (symbolArr.indexOf(char)) {
                contents.sendInputEvent({ type: 'char', keyCode: char, modifiers: 'shift' })
            } else {
                contents.sendInputEvent({ type: 'char', keyCode: char })
            }
        }
    },
    //延迟
    sleep: function (ms) {
        console.log(ms);
        return new Promise(resolve => setTimeout(resolve, ms))
    },
    //搜索
    // search: function () {
    //     contents.send('taobao', { method: 'elFocus', params: '#q' });
    //     contents.send('taobao', { method: 'elInput', params: { el: '#q', text: '宝宝' } });
    //     contents.send('taobao', { method: 'elSubmit', params: '#J_TSearchForm' });
    // },
    // page: function () {
    //     contents.send('taobao', { method: 'elInput', params: { el: '#mainsrp-pager .J_Input', text: '5' } });
    //     contents.send('taobao', { method: 'elClick', params: '#mainsrp-pager .J_Submit' });
    // },
    // find: function () {
    //     contents.send('taobao', { method: 'elLink', params: { el: '#mainsrp-itemlist .items .item a.J_ClickStat', index: 2 } });
    // },
    //打开宝贝页面
    getProduct: function (url) {
        win.loadURL(url);
        win.focus();
        win.show();
    },
    productSelect: function (params) {
        win.hide();
        bus.$emit('productSelect', params)
    },
    buy: function () {
        contents.send('taobao', { method: 'elClick', params: '#J_LinkBuy' });
    }
}
taobao.init();
window.taobao = taobao;


