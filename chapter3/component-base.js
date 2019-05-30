// 注册一个组件，名称为click-counter
// 这里的注册方式是全局注册
Vue.component('click-counter', {
    // 组件的data必须是一个函数
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button type="button" class="btn btn-primary" v-on:click="count++"> you clicked {{count}} times.</button>'
})

new Vue({
    el: "#app-1"
})

// 通过Prop向组件传递数据
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{title}}</h3>'
})

new Vue({
    el: "#app-2"
})

// 使用data渲染组件
new Vue({
    el: "#app-3",
    data: {
        titles: ['Java core volume', 'C ++ Primer Plus', 'C Primer Plus']
    }
})

// 使用更高级的template
Vue.component('book-list', {
    props: ['book'],
    // template 是ES6的模板字符串
    template: `
        <div class="book-list">
            <h4>{{book.title}}</h4>
            <h4>{{book.price}}</h4>
        </div>`
})

new Vue({
    el: "#app-4",
    data: {
        books: [
            {title: "Java core volume", price: "$68.8"},
            {title: "C ++ Primer Plus", price: "$98.8"},
            {title: "C Primer Plus", price: "$88.8"}
        ]
    }
})

// 通过事件向父级组件发送消息
// 在模板中添加一个按钮，这个按钮绑定了一个click事件
// 当点击了click事件后，通过内建的$emit方法传入事件的名字，父级组件会触发该事件
Vue.component('book-list2', {
    props: ['book'],
    template: `
    <div class="book-list2">
        <h4>{{book.title}}</h4>
        <h4>{{book.price}}</h4>
        <button type="button" class="btn btn-primary btn-sm" @click="$emit('enlarge-text')">放大字体</button>
    </div>`
})

new Vue({
    el: "#app-5",
    data: {
        books: [
            {title: "Java core volume", price: "$68.8"},
            {title: "C ++ Primer Plus", price: "$98.8"},
            {title: "C Primer Plus", price: "$88.8"}
        ],
        fontSize: 1
    }
})
