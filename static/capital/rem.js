//以750px为基准设计尺寸自动适配
//既是ps调375px的设计图进行测量的值除16就等rem
//   自动转换px为rem
//   https://www.cnblogs.com/wangqiao170/p/8652505.html
//vscode操作
//1. shift+alt+F格式化代码
//2. alt+z选好px转rem
// (function (doc, win) {
//     var docEl = doc.documentElement,
//       resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//       recalc = function () {
//         var clientWidth = docEl.clientWidth; 
//         if (!clientWidth) return;
//         docEl.style.fontSize = 16 * (clientWidth / 375) + 'px';//其中“16”根据你设置的html的font-size属性值做适当的变化
//       };

//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

//改行内样式时，px自动转换rem
// 一：
 (function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      let clientWidth = docEl.clientWidth; // 屏幕宽度
      /**
       * 功能：移动端项目，电脑浏览器还没切换移动端，希望以宽750居中 (这只是为了好看)
       * 判断是pc端就固定屏幕宽度，使pixelSize值也固定
       */
      let flag_client = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if (!flag_client) {
        clientWidth = 750;
      }
      sessionStorage.setItem('clientWidth', clientWidth);

      if (!clientWidth) return;
      let pixelSize = 16 * (clientWidth / 375)
      sessionStorage.setItem('pixelSize', pixelSize)
      docEl.style.fontSize = pixelSize + 'px'; // 关键：设置的html的font-size计算值
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 二：公共方法
// pxToRem (num) { // 移动端px转rem
//   return num / Number(sessionStorage.getItem('pixelSize'))
// },
// remToPx (num) { // 移动端rem转px
//   return num * Number(sessionStorage.getItem('pixelSize'))
// }