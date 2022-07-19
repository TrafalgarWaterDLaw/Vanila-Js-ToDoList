import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodosContxet } from '../store/todos.context';

const ImportantTodo = () => {
    const todoCtx = useContext(TodosContxet);

    if (todoCtx.favorite === true) { 
        return ( 
            <>
            {todoCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    onDelete={todoCtx.removeTodo.bind(null, item.id)}
                    date={item.todoDate}
                    title={item.title}
                    time={item.time}
                    text={item.text}
                    onFavorite={todoCtx.addFavorite.bind(null, item)}
                />
            ))}
        </>
        )
    }

    return null;
}

export default ImportantTodo;