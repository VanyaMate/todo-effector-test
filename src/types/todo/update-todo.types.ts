import { DomainTodoStatus } from './todo.type.ts';


export type DomainUpdateType = {
    title?: string;
    status?: DomainTodoStatus;
}