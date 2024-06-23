import { DomainTodo } from '@/types/todo/todo.type.ts';
import { TODO_LOCAL_STORAGE_NAME } from '.const.ts';


export const loadTodos = function (): Promise<DomainTodo[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE_NAME)));
            } catch (e) {
                reject(e);
            }
        }, 1000);
    });
};