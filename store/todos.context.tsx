import React from 'react';
import { useState } from 'react';

import Todo from '../modals/todo';

interface TodoProp {
	items: Todo[];
	favorite: boolean;
	addFavorite: (todo: Todo) => void;
	addTodo: (text: string, day: string, time: string, title: string) => void;
	removeTodo: (id: string) => void;
}

interface Prop {
	children?: React.ReactNode;
}

export const TodosContxet = React.createContext<TodoProp>({
	items: [],
	addTodo: () => {},
	removeTodo: () => { },
	favorite: false,
	addFavorite: () => { }
});

const TodosContextProvider: React.FC<Prop> = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [favorite, setFavorite] = useState<boolean>(false);

	const addTodoHandler = (text: string, day: string, time: string, title: string) => {
		const newTodo = new Todo(text, day, time, title);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	const favoriteHandler = (todo: Todo) => { 
		setFavorite((prevFavorite) => {
			return !prevFavorite;
		});
	}

	const contextValue: TodoProp = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
		favorite: favorite,
		addFavorite: favoriteHandler,
	};

	return (
		<TodosContxet.Provider value={contextValue}>
			{props.children}
		</TodosContxet.Provider>
	);
};

export default TodosContextProvider;
