// 参数绑定
let app1 = new Vue({
    el: "#app-1",
    data: {
        message: "Hello, Vue!"
    }
})

// 使用v-bind绑定参数
let app2 = new Vue({
    el: "#app-2",
    data: {
        message: "页面加载于 " + new Date().toLocaleString()
    }
})

// 逻辑判断
let app3 = new Vue({
    el: "#app-3",
    data: {
        isVisible: true
    }
})

// 使用for循环
let app4 = new Vue({
    el: "#app-4",
    data: {
        books: [
            {
                title: "C++ Primer Plus",
                price: "$79.9"
            },
            {
                title: "Professional Java",
                price: "$68.8"
            },
            {
                title: "PHP Cookbook",
                price: "$58.8"
            }
        ]
    }
})

// 绑定事件
let app5 = new Vue({
    el: "#app-5",
    data: {
        message: "绑定事件!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split("").reverse().join("")
        }
    }
})

// 双向绑定
let app6 = new Vue({
    el: "#app-6",
    data: {
        message: "双向绑定"
    }
})

// 组件化应用
// 定义一个名为 books 的新组件
Vue.component("books", {
    props: ['book'], // 属性名
    template: "<li>{{book.title}}&nbsp;&nbsp;&nbsp;&nbsp;{{book.price}}</li>" // 模板
})

let app7 = new Vue({
    el: "#app-7",
    data: {
        books: [
            {
                id: 1,
                title: "C++ Primer Plus",
                price: "$79.9"
            },
            {
                id: 2,
                title: "Professional Java",
                price: "$68.8"
            },
            {
                id: 3,
                title: "C Primer Plus",
                price: "$58.8"
            }
        ]
    }
})

//Vue 实例
/**
 * MVVM, Model-view-viewModel 一种软件架构模式, 派生于MVC
 */

// 钩子函数 created, mounted, updated, destroyed
let app8 = new Vue({
    el: "#app-8",
    data: {
        message: "钩子函数"
    },
    created: function () {
        console.log(this.message)
    }
})

// 插值
// 1. Mustache 双大括号语法 {{message}}

// 2. 针对html, 使用v-html
var app9 = new Vue({
    el: "#app-9",
    data: {
        message: "输出原始html代码: <span style=\"color:#99CCFF\">watch carefully</span>."
    }
})

/**
 * {{ }}模板中可以执行js语法, 如
 * {{ count + 1 }} // 计算
 * {{ status ? "success" : "failed" }} // 三元运算符
 * {{ message.split(" ")}} // 调用js方法
 *
 * 不会生效的语句:
 * {{ var message = 1}} // 赋值语句
 * {{ if (status) { return message} }} // 流程控制语句
 */

// v-bind:message 可以缩写为: message
var app10 = new Vue({
    el: "#app-10",
    data: {
        message: "v-bind 缩写"
    }
})

// v-on:click     可以缩写为: @click
var app11 = new Vue({
    el: "#app-11",
    data: {
        message: "v-on 缩写"
    },
    methods: {
        log: function () {
            console.log(this.message)
        }
    }
})

// 计算属性, 属性是随时通过动态计算而来的
// 计算属性存在缓存, 如果原始属性没有变化, 就不会重新计算
var app12 = new Vue({
    el: "#app-12",
    data: {
        message: "计算属性"
    },
    computed: {
        // 定义的函数相当于 reversedMessage 的 getter 方法
        reversedMessage: function () {
            return this.message.split("").reverse().join("")
        }
    }
})

// 侦听器 watch, 有点复杂, 暂时跳过

// v-for 的索引从0开始
var app13 = new Vue({
    el: "#app-13",
    data: {
        books: [
            {
                title: "C++ Primer Plus",
                price: "$79.9"
            },
            {
                title: "Professional Java",
                price: "$68.8"
            },
            {
                title: "PHP Cookbook",
                price: "$58.8"
            }
        ]
    }
})

// 遍历对象的属性
var app14 = new Vue({
    el: "#app-14",
    data: {
        employee: {
            salary: 2000,
            bonus: 500
        }
    }
})

// 遍历对象的属性, 并获取索引
var app15 = new Vue({
    el: "#app-15",
    data: {
        employee: {
            salary: 2000,
            bonus: 500
        }
    }
})

// 使用push, shift, slice, sort 等方法改变数组时, Vue会监听到数组的变化, 并重新渲染
// 直接使用索引修改数组时, 不会被Vue 监听到, 如: app.books[2] = "Python Scratch"
// 解决方法: Vue.set(app13.books, index, newValue)


// 同样地, 直接修改对象的属性, 也不会被Vue 监听到, 如: app13.books[2].title = "Python Scratch"
// 解决方法: Vue.set(object, key, newValue), 如Vue.set(app13.books[2], "title", "Python Scratch")