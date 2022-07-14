// class Todo {
//     id: string

//     constructor(public todoText: string) {
//         this.id = Math.random().toString()
//     }
// }

//Alternative
 
class Todo {
    id: string
    text: string

    constructor(todoText: string) {
        this.text = todoText
        this.id = new Date().toISOString()
    }
}

export default Todo;



//export default Todo;
