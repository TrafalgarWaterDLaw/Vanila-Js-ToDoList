import React from 'react';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodosContxet } from '../store/todos.context';

const Todos: React.FC = () => {
	const todoCtx = useContext(TodosContxet);

	return (
		<ul>
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
		</ul>
	);
};

export default Todos;
