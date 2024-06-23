import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';


const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(<App/>);
}