
//动态设置viewport的scale
// var scale = 1 / devicePixelRatio;
// document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

//动态计算html的font-size
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';

window.onresize = function () {

    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';

}
