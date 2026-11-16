import css from './App.module.css';
import Hero from '../Hero/Hero';

export default function App() {
    return (
        <div className={css.app}>
            <Hero title="Simple React template" text="Vite + React + TypeScript" accent />
        </div>
    );
}
