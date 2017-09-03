window.ipc = require('electron').ipcRenderer;
window.onload = function () {
    window.$ = require('jquery');
    getAccount();
    getLoginName();
};

//获取登录账号密码
function getAccount() {
    $("#J_SubmitStatic").on("click", function () {
        var name = $("#TPL_username_1").val();
        var pwd = $("#TPL_password_1").val();
        ipc.sendToHost('getAccount', name, pwd);
    })
}

//获取真实登陆账号
function getLoginName() {
    var name = $(".site-nav-login-info-nick").text();
    ipc.sendToHost('getLoginName', name);
}

