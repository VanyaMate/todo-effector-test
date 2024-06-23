export enum DomainTodoStatus {
    DONE,
    IN_PROGRESS,
    AWAIT,
}

export type DomainTodo = {
    id: string;
    title: string;
    status: DomainTodoStatus;
}