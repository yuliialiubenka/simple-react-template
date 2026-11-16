import css from './Hero.module.css';

interface HeroProps {
    title: string;
    text?: string;
    accent?: boolean;
}

export default function Hero({ title, text, accent = false }: HeroProps) {
    return (
        <section className={css.container}>
            <h1 className={accent ? `${css.title} ${css.accent}` : css.title}>{title}</h1>
            {text && <p className={css.text}>{text}</p>}
        </section>
    );
}
