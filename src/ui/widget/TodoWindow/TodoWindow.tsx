import { ComponentPropsWithoutRef, FC, memo, useEffect } from 'react';
import classNames from 'classnames';
import css from './TodoWindow.module.scss';
import { TodoHeader } from '@/ui/widget/TodoWindow/TodoHeader/TodoHeader.tsx';
import { TodoList } from '@/ui/widget/TodoWindow/TodoList/TodoList.tsx';
import { loadTodosEffect } from '@/model/todo/todo.model.ts';


export type TodoWindowProps =
    {}
    & ComponentPropsWithoutRef<'main'>;

export const TodoWindow: FC<TodoWindowProps> = memo(function TodoWindow (props) {
    const { className, ...other } = props;

    useEffect(() => {
        loadTodosEffect();
    }, []);

    return (
        <main
            { ...other }
            className={ classNames(css.container, {}, [ className ]) }
        >
            <TodoHeader/>
            <TodoList/>
        </main>
    );
});