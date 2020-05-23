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
    let bounce1 = document.createElement('div')
    let bounce2 = document.createElement('div')
    bounce1.className = 'bounce bounce1'
    bounce2.className = 'bounce bounce2'
    let fm = document.createDocumentFragment()

    fm.appendChild(bounce1)
    fm.appendChild(bounce2)

    loadingWarp.appendChild(fm)
  }
  // 移动动画
  function setAnimateMove(loadingWarp){
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let span3 = document.createElement('span')
    let span4 = document.createElement('span')
    let span5 = document.createElement('span')

    let fm = document.createDocumentFragment()
    fm.appendChild(span1)
    fm.appendChild(span2)
    fm.appendChild(span3)
    fm.appendChild(span4)
    fm.appendChild(span5)

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
      componentUpdated: function(el, binding, vnode, oldVnode){
        let animate = Object.keys(binding.modifiers)[0]
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
