/**
 * 设置rem
 */
export const setRem = () => {
  const baseSize = 375
  // 设置 rem 函数
  function initRem () {
    const scale = document.documentElement.clientWidth / 375
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  }
  // 初始化
  initRem()
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    initRem()
  }
}
