var app = new Vue({
    el: '#ToDoApp',
    data: {
        newToDo: '',
        ToDos: []
    },
    created() {
        this.ToDos = JSON.parse(localStorage.getItem('todos') || '');
    },
    methods: {
        addToDo() {
            this.ToDos.push({ id: 1, text: this.newToDo, completed: false });
            this.newToDo = '';
            localStorage.setItem('todos', JSON.stringify(this.ToDos));
        },
        saveToDo() {
            localStorage.setItem('todos', JSON.stringify(this.ToDos));
            alert('Task saved!');
        },
        removeToDo(ToDo) {
            this.ToDos.splice(this.ToDos.indexOf(ToDo), 1);
            localStorage.setItem('todos', JSON.stringify(this.ToDos));
        }
    }
});