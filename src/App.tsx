import { ComponentPropsWithoutRef, FC, memo } from 'react';
import './index.css';


export type AppProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const App: FC<AppProps> = memo(function App (props) {

    return (
        <div>
            Clear Project
        </div>
    );
});