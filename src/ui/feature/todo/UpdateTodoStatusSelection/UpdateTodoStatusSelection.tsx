import {
    ChangeEventHandler,
    ComponentPropsWithoutRef,
    FC,
    memo,
    useCallback,
} from 'react';
import classNames from 'classnames';
import css from './UpdateTodoStatusSelection.module.scss';
import { useUnit } from 'effector-react/compat';
import {
    $todoItemsPendingStatus,
    updateTodoEffect,
} from '@/model/todo/todo.model.ts';
import { DomainTodoStatus } from '@/types/todo/todo.type.ts';


export type UpdateTodoStatusSelectionProps =
    {
        todoId: string;
        status: DomainTodoStatus;
    }
    & ComponentPropsWithoutRef<'select'>;

export const UpdateTodoStatusSelection: FC<UpdateTodoStatusSelectionProps> = memo(function UpdateTodoStatusSelection (props) {
    const { todoId, status, className, ...other }         = props;
    const todoStatus                                      = useUnit($todoItemsPendingStatus);
    const onSelect: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
        updateTodoEffect([ todoId, { status: event.target.value as DomainTodoStatus } ]);
    }, [ todoId ]);

    return (
        <select
            { ...other }
            className={ classNames(css.container, { [css.pending]: todoStatus[todoId] }, [ className ]) }
            value={ status }
            onChange={ onSelect }
        >
            <option value={ DomainTodoStatus.AWAIT }>Ожидает</option>
            <option value={ DomainTodoStatus.IN_PROGRESS }>Выполняется</option>
            <option value={ DomainTodoStatus.DONE }>Завершено</option>
        </select>
    );
});