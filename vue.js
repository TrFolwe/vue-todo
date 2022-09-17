Vue.createApp({
    data() {
        return {
            todoText: null,
            todoList: []
        };
    },
    methods: {
        addTodo() {
            if(!this.todoText || this.todoList.find(i => i.split(" - ")[0] === this.todoText)) return;
            this.todoList.push(`${this.todoText} - ${(new Date()).toLocaleString()}`);
        },
        todoDelete(todo) {
            this.todoList = this.todoList.filter(i => i !== todo);
        }
    }
}).mount("#app");