window.ipc = require('electron').ipcRenderer;
window.onload = function () {
    window.$ = window.jQuery = require('jquery');
    //监听通信
    ipc.on('taobao', (event, message) => {
        console.log(message);
        var method = eval(message.method);
        var params = message.params;
        method(params);
    })
    productSelect();
};

//注入外部js
function addScript(js, callback) {
    var script = document.createElement("script");
    script.src = js;
    script.onload = script.onreadystatechange = function () {
        $(document).ready(() => {
            callback();
        });
    };
    document.body.appendChild(script);
}

//点击
function elClick(el) {
    $(el)[0].click();
}

//获取焦点
function elFocus(el) {
    $(el).focus();
}

//失去焦点
function elBlur(el) {
    $(el).blur();
}

//表单提交
function elSubmit(el) {
    $(el).submit();
}

//输入框
function elInput(params) {
    var el = params.el;
    var text = params.text;
    $(el).val(text);
}

//查找链接
function elLink(params) {
    var el = params.el;
    var index = params.index;
    window.location.href = $(el).eq(index).attr('href');
}

//检查是否登陆
function checkLogin() {
    var isLogin = false;
    if ($(".site-nav-login-info-nick").text() != "") {
        isLogin = true;
    }
    ipc.send('taobao', { method: 'checkLogin', params: isLogin });
}

//选择商品条件
function productSelect() {
    if ($('.tb-skin').length) {
        $("body").append(`
            <style type="text/css">
                .btn-twinkle{
                    border: 2px solid red;
                    box-shadow: '10px 10px 10px #888888';
                    animation: twinkle 1s alternate infinite;
                }
                @keyframes twinkle{
                    from{background: #16e2eb;}
                    to{background: #3b6e99;}
                }
            </style>
        `);
        $('.tb-skin').addClass("btn-twinkle");

        if ($(".tb-skin .tm-sale-prop").length > 0) {
            tmSelect();
        } else {
            tbSelect();
        }
    }

}

//天猫选择产品
function tmSelect() {
    $("#J_LinkBasket,#J_LinkBuy").hide();
    $('#detail .tb-btn-sku').eq(0).append('<a href="#" id="productSelect">选择完毕</a>');
    var selectIndexArr = [];
    $("#productSelect").on("click", function (e) {
        e.preventDefault();
        var allSelect = true;
        selectIndexArr = [];
        $(".tb-skin .tm-sale-prop").each(function (index) {
            var selectIndex = -1;
            $(this).find('ul.tm-clear li').each(function (index) {
                if ($(this).hasClass('tb-selected')) {
                    selectIndex = index;
                }
            })
            if (selectIndex == -1) {
                alert('请选择 ' + $(this).find(".tb-metatit").text());
                allSelect = false;
                return false;
            } else {
                selectIndexArr.push(selectIndex);
            }
        })
        if (allSelect) {
            var data = {
                selectIndex: selectIndexArr.join(','),
                name: $(".tb-detail-hd h1").text().trim(),
                price: $(".tm-price:last").text(),
                image: "http:" + $("#J_ImgBooth").attr('src')
            };
            ipc.send('taobao', { method: 'productSelect', params: data });
            console.log(data);
        }
    });
}

//淘宝选择产品
function tbSelect() {
    $(".J_LinkBuy,.tb-btn-add").hide();
    $('#detail .tb-btn-buy').eq(0).append('<a href="#" id="productSelect">选择完毕</a>');
    var selectIndexArr = [];
    $("#productSelect").on("click", function (e) {
        e.preventDefault();
        var allSelect = true;
        selectIndexArr = [];
        $(".tb-skin .tb-prop").each(function (index) {
            var selectIndex = -1;
            $(this).find('ul.J_TSaleProp  li').each(function (index) {
                if ($(this).hasClass('tb-selected')) {
                    selectIndex = index;
                }
            })
            if (selectIndex == -1) {
                alert('请选择 ' + $(this).find(".tb-property-type").text());
                allSelect = false;
                return false;
            } else {
                selectIndexArr.push(selectIndex);
            }
        })
        if (allSelect) {
            var data = {
                selectIndex: selectIndexArr.join(','),
                name: $(".tb-main-title").text().trim(),
                price: $("#J_PromoPriceNum").text(),
                image: $("#J_ImgBooth").attr('src')
            };
            ipc.send('taobao', { method: 'productSelect', params: data });
            console.log(data);
        }
    });
}

//自动下单
function autoOrder(selectIndexArr) {
    if ($(".tb-skin .tm-sale-prop").length > 0) {
        //天猫
         $(".tb-skin .tm-sale-prop").each(function (index) {
            var selectIndex = selectIndexArr[index];
            $(this).find('ul.tm-clear li').each(function (index) {
                if ($(this).hasClass('tb-selected')) {
                    selectIndex = index;
                }
            })
            var li = $(this).find('ul.tm-clear li').eq(selectIndex);
            if (!li.hasClass('tb-selected')) {
                li.find("a")[0].click();
            }
        })
    } else {
        //淘宝
        $(".tb-skin .tb-prop").each(function (index) {
            var selectIndex = selectIndexArr[index];
            $(this).find('ul.J_TSaleProp  li').each(function (index) {
                if ($(this).hasClass('tb-selected')) {
                    selectIndex = index;
                }
            })
            var li = $(this).find('ul.tm-clear li').eq(selectIndex);
            if (!li.hasClass('tb-selected')) {
                li.find("a")[0].click();
            }
        })
    }
   
}