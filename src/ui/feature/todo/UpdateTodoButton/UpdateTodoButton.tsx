import { ComponentPropsWithoutRef, FC, memo } from 'react';
import { DomainTodoStatus } from '@/types/todo/todo.type.ts';
import { updateTodoEffect } from '@/model/todo/todo.model.ts';


export type UpdateTodoButtonProps =
    {
        todoId: string;
        title?: string;
        status?: DomainTodoStatus;
    }
    & ComponentPropsWithoutRef<'button'>;

export const UpdateTodoButton: FC<UpdateTodoButtonProps> = memo(function UpdateTodoButton (props) {
    const { todoId, title, status, ...other } = props;

    return (
        <button { ...other } onClick={
            () => updateTodoEffect([ todoId, { title, status } ])
        }>
            Обновить
        </button>
    );
});