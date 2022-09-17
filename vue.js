Vue.createApp({
    data() {
        return {
            todoText: null,
            todoList: []
        };
    },
    methods: {
        addTodo() {
            if(!this.todoText || this.todoList.includes(this.todoText)) return;
            this.todoList.push(`${this.todoText} - ${new DateTime().toLocaleDateString()}`);
        },
        todoClick(todo) {
            this.todoList = this.todoList.filter(i => i !== todo);
        }
    }
}).mount("#app");