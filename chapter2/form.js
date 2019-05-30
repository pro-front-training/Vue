// 单个复选框
var app1 = new Vue({
    el: "#app-1",
    data: {
        message: false
    }
})

// 多个复选框, 将值绑定到同一个数组
var app2 = new Vue({
    el: "#app-2",
    data: {
        message: []
    }
})

// 绑定输入框
var app3 = new Vue({
    el: "#app-3",
    data: {
        message: ""
    }
})

// textarea 输入绑定
var app4 = new Vue({
    el: "#app-4",
    data: {
        message: ""
    }
})

// 单选框
var app5 = new Vue({
    el: "#app-5",
    data: {
        message: ""
    }
})

// 下拉选择框
var app6 = new Vue({
    el: "#app-6",
    data: {
        message: ""
    }
})

// 多选下拉框
var app7 = new Vue({
    el: "#app-7",
    data: {
        message: []
    }
})

// 动态生成下拉框
var app8 = new Vue({
    el: "#app-8",
    data: {
        message: "",
        options: ["apple", "banana", "orange"]
    }
})