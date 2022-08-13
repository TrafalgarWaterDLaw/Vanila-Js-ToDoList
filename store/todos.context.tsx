import React from 'react';
import { useState, useEffect } from 'react';

import Todo from '../modals/todo';

interface TodoProp {
	items: Todo[];
	favorite: boolean;
	lightTheme: boolean;
	changeTheme: () => void;
	addFavorite: (todo: Todo) => void;
	addTodo: (text: string, day: string, time: string, title: string) => void;
	removeTodo: (id: string) => void;
}

interface Prop {
	children?: React.ReactNode;
}

export const TodosContxet = React.createContext<TodoProp>({
	items: [],
	favorite: false,
	lightTheme: true,
	addTodo: () => {},
	removeTodo: () => {},
	addFavorite: () => {},
	changeTheme: () => {},
});

const TodosContextProvider: React.FC<Prop> = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [favorite, setFavorite] = useState<boolean>(false);
	const [theme, setTheme] = useState<boolean>(false);
	
	const id = new Date().toISOString()


	const addTodoHandler = (
		text: string,
		day: string,
		time: string,
		title: string,
	) => {
		const newTodo = new Todo(text, day, time, title);

		localStorage.setItem(id, JSON.stringify(newTodo));

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	//retrieve data from local storage
	useEffect(() => { 
		const keys = Object.keys(localStorage);
		const length = keys.length;

		if (length > 0) { 
			const todos = [];
			for (let i = 0; i < length; i++) {
				const key = keys[i];
				const todo = JSON.parse(localStorage.getItem(key) as string);
				todos.push(todo);
			}
			setTodos(todos);
		}
	}, []);

	const removeTodoHandler = (id: string) => {
		localStorage.removeItem(id);
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});

	};


	//TODO: Fix this code
	const favoriteHandler = (todo: Todo) => {
		setFavorite((prevFavorite) => {
			return !prevFavorite;
		});
	};

	const themeHandler = () => {
		setTheme((prevFavorite) => {
			return !prevFavorite;
		});
	};

	const contextValue: TodoProp = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
		favorite: favorite,
		addFavorite: favoriteHandler,
		lightTheme: theme,
		changeTheme: themeHandler
	};

	return (
		<TodosContxet.Provider value={contextValue}>
			{props.children}
		</TodosContxet.Provider>
	);
};

export default TodosContextProvider;
