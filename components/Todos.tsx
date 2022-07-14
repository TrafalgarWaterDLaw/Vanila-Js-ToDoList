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
					text={item.text}
				/>
			))}
		</ul>
	);
};

export default Todos;
