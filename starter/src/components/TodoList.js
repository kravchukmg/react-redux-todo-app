import React from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
	const todos = [
		{ id: uuidv4(), title: 'todo1', completed: false },
		{ id: uuidv4(), title: 'todo2', completed: false },
		{ id: uuidv4(), title: 'todo3', completed: true },
		{ id: uuidv4(), title: 'todo4', completed: false },
		{ id: uuidv4(), title: 'todo5', completed: false },
	];

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} key={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
