console.log("確認連接");

var vue1 = new Vue({
    el: "#vue1",
    data: {
        text: "Hi,I am VUE",
        a: 999,
        b: 3,
    },
});

var vue2 = new Vue({
    el: "#vue2",
    data: {
        aligment: "center",
        yahoo: "https://tw.yahoo.com/"
    }
});

var vue3 = new Vue({
    el: "#vue3",
    data: {
        test: true,
        activity: false,
    }
});

var vue4 = new Vue({
    el: "#vue4",
    data: {
        products: [
            {name: "奶茶", price: 45},
            {name: "紅茶", price: 45},
            {name: "綠茶", price: 45},
            {name: "青茶", price: 45},
        ]
    }
});

var vue5 = new Vue({
    el: "#vue5",
    data: {
        text: "",
    },
    methods: {
        show: function() {
            this.text = "點到了"
        }
    },
});