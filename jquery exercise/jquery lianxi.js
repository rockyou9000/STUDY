/**
 * Created by Administrator on 2016/3/22.
 */
$(document).ready(function(){
   alert()
});
$(document) .ready (function(){

});
//简写形式
$(function(){

});

var domobj = document.getElementById("id");
var objhtml = domobj.innerHTML;

$("#id") .html();
//等价于
document.getElementById("id").innerHTML;

var $variable

var variable

//jquery 转换DOM
var cr = $cr[0];
var cr = $cr.get(0);

//DOM转换jquery
var cr;
var $cr = $(cr)

$(".mini").css("background","#bbffaa");

$("span,#two").css("background","#bbffaa");

$("p ～ div")

$("p + div")

$("div:first")

$("div:eq(3)")

$("div:gt(2)")

$("div:even")

$("div:not(.one)")

$("div:contains(shabi)")

$("div:empty")

$("div:has(.mini)")

$("div:parent")

$("input:hidden")
$(":visible")

$("div[title=test]")
    //以test开始
$("div[title^=test]")
    //以test结束
$("div[title$=test]")
    //含有test
$("div[title*=test]")
    //复合选择器，缩小范围
$("div[id][title$=test]")
    //选取每个父元素下的索引值是3n+1的元素 n从0开始
$("div:nth-child(3n+1)")

$("div:checked")
$("option:selected")
$("div:enabled")

$(".one").next("div");
$("#prev").nextAll("div");

$("div:not(.one)")
$("div:nth-child(even)")
$("div:nth-child(odd)")
$("div:nth-child(2n+1)")


$(function(){
   var $category = $('ul li:gt(5):not(:last)');
    $category.hide();
    var $toogleBtn = $('div.showmore>a')
    $toogleBtn.click(function(){
        if($category.is(":visilbe")){
            $category.hide()
            $('.showmore a span')
                .css("background","url(img/down.gif) no-repeat 0 0")
                .text("显示全部品牌");
            $('ul li').removeClass("promoted")
        }
        else{
            $category.show();
            $('.showmore a span')
                .css("background","url(img/up.gif) no-repeat 0 0")
                .text("精简显示品牌");
            $('ul li').filter(":contains('佳能'),:contains('尼康')")
                .addclass("promoted");
        }
        return false;
    })
});

var $li_1 = $("<li title='香蕉'>香蕉</li>");
var $li_2 = $("<li title='雪梨'>雪梨</li>");

$("ul").append($li_1);
$("ul").append($li_2);
