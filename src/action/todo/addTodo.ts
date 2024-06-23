import { DomainCreateTodo } from '@/types/todo/create-todo.type.ts';
import { DomainTodo, DomainTodoStatus } from '@/types/todo/todo.type.ts';
import { TODO_LOCAL_STORAGE_NAME } from '.const.ts';


export const addTodo = function (data: DomainCreateTodo): Promise<DomainTodo> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const todo: DomainTodo    = {
                    id    : Math.random().toString(),
                    title : data.title,
                    status: DomainTodoStatus.AWAIT,
                };
                const todos: DomainTodo[] = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE_NAME) ?? '[]');

                todos.push(todo);
                localStorage.setItem(TODO_LOCAL_STORAGE_NAME, JSON.stringify(todos));

                resolve(todo);
            } catch (e) {
                reject(e);
            }
        }, 1000);
    });
};