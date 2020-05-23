/**
 * 统一导出文件
 */
import MtLoading from './directive/loading'

const directives = {'mt-loading':MtLoading}

// 定义install
const install = function(Vue){
    // 遍历所有的自定义事件
    Object.keys(directives).forEach(key=>{
        Vue.directive(key,directives[key])
    })
}

// 引入
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

// 导出
export default {
    install,
    ...directives
}
