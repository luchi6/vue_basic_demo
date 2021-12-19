/* 
    自定义插件
*/
(function (window) {
    // 定义一个插件对象
    const MyPlugin = {}

    // 插件对象必须有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log("myGlobalMethod")
        }

        // 2. 添加全局资源
        // 定义全局指令
        Vue.directive('my-directive', (el, binding, vnode, oldVnode) => {
            el.textContent = binding.value + "hello world"
        })

        // 3. 注入组件选项
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }
        //   ...
        // })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
            // 逻辑...
            console.log("vm.$myMethod")
        }
    }

    // 暴露插件
    window.MyPlugin = MyPlugin

})(window)