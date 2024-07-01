import { DomainTodo } from '@/types/todo/todo.type.ts';
import { TODO_LOCAL_STORAGE_NAME } from './const.ts';


export const removeTodo = function (id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const todos: DomainTodo[] = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE_NAME) ?? '[]');
                localStorage.setItem(TODO_LOCAL_STORAGE_NAME, JSON.stringify(todos.filter((todo) => todo.id !== id)));
                resolve(true);
            } catch (e) {
                reject(e);
            }
        }, 1000);
    });
};