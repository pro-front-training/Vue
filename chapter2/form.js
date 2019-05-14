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