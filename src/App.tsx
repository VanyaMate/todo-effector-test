import { ComponentPropsWithoutRef, FC, memo } from 'react';
import './index.css';
import { TodoWindow } from '@/ui/widget/TodoWindow/TodoWindow.tsx';


export type AppProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const App: FC<AppProps> = memo(function App () {

    return (
        <TodoWindow/>
    );
});