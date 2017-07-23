window.ipc = require('electron').ipcRenderer;
window.onload = function () {
    window.$ = window.jQuery = require('jquery');
    ipc.on('ping', function (event, arg) {
        console.log(arg); // prints "pong"
        ipc.sendToHost('pong','bbbb');
    });
};

function getNickName() {
    var nickname = $(".site-nav-login-info-nick").text();
    ipc.sendToHost(nickname);
}