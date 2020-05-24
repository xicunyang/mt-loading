  import cs from './loading.css'
  // 设置动画
  function setAnimate(loadingWarp,animate){
    if(!animate) {
      setAnimateMove(loadingWarp)
      return
    }
    switch(animate){
      case 'bounce':
        setAnimateBounce(loadingWarp)
        break;
      case 'move':
        setAnimateMove(loadingWarp)
        break;
      default:
        // 默认
        setAnimateMove(loadingWarp)
        break
    }
  }
  // 弹跳动画
  function setAnimateBounce(loadingWarp){
    let fm = document.createDocumentFragment()
    for(let i=1;i<=2;i++){
      let bounce = document.createElement('div')
      bounce.className = `bounce bounce${i} mt-loading-color`
      fm.appendChild(bounce)
    }
    loadingWarp.appendChild(fm)
  }
  // 移动动画
  function setAnimateMove(loadingWarp){
    let fm = document.createDocumentFragment()
    for(let i=0;i<5;i++){
      let span = document.createElement('span')
      span.className = ' mt-loading-color'
      fm.appendChild(span)
    }
    loadingWarp.appendChild(fm)
  }

  // 添加loading
  function addMask(el,animate){
    el.style.position = 'relative'
    let mask = document.createElement('div')
    mask.className = 'mt-loading'
    let loadingWarp = document.createElement('div')
    loadingWarp.className = 'loading-warp'

    setAnimate(loadingWarp,animate)

    mask.appendChild(loadingWarp)
    el.appendChild(mask)
  }

  // 删除loading
  function removeMask(el){
    let mask = el.querySelector('.mt-loading')
    if(!mask) return
    el.removeChild(mask)
  }

  // 导出
  export default {
    bind: function(el, binding, vnode){
        let animate = Object.keys(binding.modifiers)[0]

         if(binding.value){
           addMask(el,animate)
         }
      },
      update: function(el, binding, vnode, oldVnode){
        let animate = Object.keys(binding.modifiers)[0]
        // 该update函数是当vnode更新就会被触发，可能我们的值没有更新，就会造成重复渲染的问题
        // 在这里处理一下
        if(binding.oldValue === binding.value) return
        if(binding.value){
          // 显示
          addMask(el,animate)
        }else{
          console.log('取消');
          // 取消
          removeMask(el)
        }
      }
  }
