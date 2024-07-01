import { ComponentPropsWithoutRef, FC, memo, ReactNode } from 'react';
import classNames from 'classnames';
import css from './TodoItem.module.scss';


export type TodoItemProps =
    {
        title: string;
        prefixNode?: ReactNode;
        postfix?: ReactNode;
    }
    & ComponentPropsWithoutRef<'div'>;

export const TodoItem: FC<TodoItemProps> = memo(function TodoItem (props) {
    const { prefixNode, postfix, title, className, ...other } = props;

    return (
        <article
            { ...other }
            className={ classNames(css.container, {}, [ className ]) }
        >
            { prefixNode }
            <h3 className={ css.title }>{ title }</h3>
            { postfix }
        </article>
    );
});