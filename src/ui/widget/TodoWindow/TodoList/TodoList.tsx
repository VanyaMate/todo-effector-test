import { ComponentPropsWithoutRef, FC, memo } from 'react';
import classNames from 'classnames';
import css from './TodoList.module.scss';
import { useUnit } from 'effector-react';
import {
    $todoItems,
    $todoLoading,
} from '@/model/todo/todo.model.ts';
import { TodoItem } from '@/ui/entity/todo/TodoItem/TodoItem.tsx';
import {
    RemoveTodoButton,
} from '@/ui/feature/todo/RemoveTodoButton/RemoveTodoButton.tsx';
import {
    UpdateTodoStatusSelection,
} from '@/ui/feature/todo/UpdateTodoStatusSelection/UpdateTodoStatusSelection.tsx';


export type TodoListProps =
    {}
    & ComponentPropsWithoutRef<'section'>;

export const TodoList: FC<TodoListProps> = memo(function TodoList (props) {
    const { className, ...other }    = props;
    const [ todoItems, todoLoading ] = useUnit([ $todoItems, $todoLoading ]);

    return (
        <section
            { ...other }
            className={ classNames(css.container, {}, [ className ]) }
        >
            <h2>Список</h2>
            {
                todoLoading
                ? 'Загрузка...'
                : todoItems.map((todo) => (
                    <TodoItem
                        key={ todo.id }
                        title={ todo.title }
                        prefixNode={
                            <RemoveTodoButton todoId={ todo.id }/>
                        }
                        postfix={
                            <UpdateTodoStatusSelection
                                todoId={ todo.id }
                                status={ todo.status }
                            />
                        }
                    />
                ))
            }
        </section>
    );
});