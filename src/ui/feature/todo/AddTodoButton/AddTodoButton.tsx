import { ComponentPropsWithoutRef, FC, memo } from 'react';
import { addTodoEffect } from '@/model/todo/todo.model.ts';


export type AddTodoButtonProps =
    {
        title: string;
    }
    & ComponentPropsWithoutRef<'button'>;

export const AddTodoButton: FC<AddTodoButtonProps> = memo(function AddTodoButton (props) {
    const { title, ...other } = props;

    return (
        <button { ...other } onClick={ () => addTodoEffect({ title }) }>
            Добавить
        </button>
    );
});