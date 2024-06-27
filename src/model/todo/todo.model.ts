import { createEffect, createStore } from 'effector';
import { DomainTodo } from '@/types/todo/todo.type.ts';
import { addTodo } from '@/action/todo/addTodo.ts';
import { loadTodos } from '@/action/todo/loadTodos.ts';
import { removeTodo } from '@/action/todo/removeTodo.ts';
import { updateTodo } from '@/action/todo/updateTodo.ts';
import { DomainCreateTodo } from '@/types/todo/create-todo.type.ts';
import { DomainUpdateType } from '@/types/todo/update-todo.types.ts';


export const addTodoEffect    = createEffect<DomainCreateTodo, DomainTodo, Error>(addTodo);
export const loadTodosEffect  = createEffect<void, Array<DomainTodo>, Error>(loadTodos);
export const removeTodoEffect = createEffect<string, boolean, Error>(removeTodo);
export const updateTodoEffect = createEffect<[ string, DomainUpdateType ], DomainTodo, Error>(updateTodo);

export const $todoLoading = createStore<boolean>(false)
    .on(loadTodosEffect, () => true)
    .on(loadTodosEffect.finally, () => false);

export const $todoAdding = createStore<boolean>(false)
    .on(addTodoEffect, () => true)
    .on(addTodoEffect.finally, () => false);

export const $todoItemsPendingStatus = createStore<Record<string, boolean>>({})
    .on(addTodoEffect.done, (state, payload) => ({
        ...state,
        [payload.result.id]: false,
    }))
    .on(removeTodoEffect, (state, id) => {
        state[id] = true;
        return { ...state };
    })
    .on(removeTodoEffect.done, (state, payload) => {
        delete state[payload.params[0]];
        return { ...state };
    })
    .on(updateTodoEffect, (state, data) => ({
        ...state,
        [data[0]]: true,
    }))
    .on(updateTodoEffect.finally, (state, { params }) => ({
        ...state,
        [params[0]]: false,
    }));

export const $todoItems = createStore<Array<DomainTodo>>([])
    .on(addTodoEffect.done, (state, payload) => [ ...state, payload.result ])
    .on(loadTodosEffect.done, (state, payload) => [ ...state, ...payload.result ])
    .on(removeTodoEffect.done, (state, payload) => state.filter((todo) => todo.id !== payload.params))
    .on(updateTodoEffect.done, (state, payload) => state.map(
        (todo) => todo.id === payload.result.id ? payload.result : todo,
    ));