class Todo {
    id: string
    text: string
    title: string
    time: string
    todoDate: string

    constructor(todoText: string, day: string, time: string, title: string) {
        this.text = todoText
        this.id = new Date().toISOString()
        this.time = time
        this.title = title
        this.todoDate = day
    }
}

export default Todo;
