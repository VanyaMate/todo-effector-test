import { ComponentPropsWithoutRef, FC, memo } from 'react';
import {
    $todoItemsPendingStatus,
    removeTodoEffect,
} from '@/model/todo/todo.model.ts';
import { useUnit } from 'effector-react';
import css from './RemoveTodoButton.module.scss';
import classNames from 'classnames';


export type RemoveTodoButtonProps =
    {
        todoId: string;
    }
    & ComponentPropsWithoutRef<'button'>;

export const RemoveTodoButton: FC<RemoveTodoButtonProps> = memo(function RemoveTodoButton (props) {
    const { todoId, ...other } = props;
    const removing             = useUnit($todoItemsPendingStatus);

    return (
        <button
            { ...other }
            onClick={ () => removeTodoEffect(todoId) }
            className={ classNames(css.container, { [css.pending]: removing[todoId] }) }
        >
            Удалить
        </button>
    );
});