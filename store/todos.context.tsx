import React from 'react';
import { useState } from 'react';

import Todo from '../modals/todo';

interface TodoProp {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
}

interface Prop {
	children?: React.ReactNode;
}

export const TodosContxet = React.createContext<TodoProp>({
	items: [],
	addTodo: () => {},
	removeTodo: () => {},
});

const TodosContextProvider: React.FC<Prop> = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	const contextValue: TodoProp = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContxet.Provider value={contextValue}>
			{props.children}
		</TodosContxet.Provider>
	);
};

export default TodosContextProvider;
